package com.example.demo;

 import org.springframework.boot.autoconfigure.SpringBootApplication;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.RequestParam;
 import org.springframework.web.bind.annotation.RestController;
 import org.springframework.http.ResponseEntity;
 import java.util.Base64;
 import java.time.LocalDateTime;  
 import java.text.SimpleDateFormat;  
 import java.util.Date;    
 import java.util.Random;
 import java.util.ArrayList;
 import java.util.HashMap; 
 import org.springframework.web.bind.annotation.CrossOrigin;
 import java.util.Map;
 import org.springframework.web.bind.annotation.RestController;


 @RestController
 public class Controller {
    private static int counter = 0;
    private static  ArrayList<String> idList = new ArrayList<String>();
    private static HashMap<String, String> roomSizeMap = new HashMap<String, String>();
    private static HashMap<String, String> roomPublicMap = new HashMap<String, String>();
    private static HashMap<String, HashMap<String,Integer>> idCharactersMap = new HashMap<String,  HashMap<String,Integer>>();
    private static HashMap<String, HashMap<String,ArrayList<String>>> realtimeIdCharactersMap = new HashMap<String,  HashMap<String,ArrayList<String>>>();
    private static HashMap<String, ArrayList<String>> charactersRemainingMap = new HashMap<String, ArrayList<String>>();


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getRoom")
    public String getRoom(@RequestParam(value = "size", defaultValue = "World") String size) {
        System.out.println("size");
        System.out.println(size);
        counter+=1;
        //get Time
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");  
        Date date = new Date();  
        String time = formatter.format(date);  
        String finalInput = Integer.toString(counter) +time;
        System.out.println("Time now"+"   "+finalInput);
        //encode
        String encodedString = Base64.getEncoder().encodeToString(finalInput.getBytes());
        String publicURLString = finalInput+"12345467";
        String encodedPublicString = Base64.getEncoder().encodeToString(publicURLString.getBytes());
        idList.add(encodedString);
        roomSizeMap.put(encodedString ,size);
        roomPublicMap.put(encodedString ,encodedPublicString);
        ArrayList<String> initilizeStringArray = new ArrayList<String>();
        realtimeIdCharactersMap.put(encodedString, new HashMap<String,ArrayList<String>>());
        return  encodedString;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/hasRoom")
    public Boolean hasRoom(@RequestParam(value = "id", defaultValue = "World") String id) {
        Boolean isRoomRegistered = false;
        if(idList.contains(id)){
            isRoomRegistered =true;
        }
        return isRoomRegistered;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getRoomSize")
    public String getRoomSize(@RequestParam(value = "id", defaultValue = "World") String id) {
        System.out.println(roomSizeMap.get(id));
        return roomSizeMap.get(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/putCharacter")
    public String putCharacter(@RequestParam(value = "id") String id, @RequestParam(value = "charactersName") String character , @RequestParam(value = "charactersSize") String charactersSize) {
        System.out.println("IDIDIDID"+"   "+ id);
        //store at individual character map
        HashMap<String,Integer> initialStringArray = idCharactersMap.get(id);
        if(initialStringArray!=null){
            System.out.println("herereererererer");
            initialStringArray.put(character,Integer.parseInt(charactersSize));
        }else{
            HashMap<String,Integer> newStringArray = new HashMap<String,Integer>();
            System.out.println("charactersSize");
            System.out.println(charactersSize);
            newStringArray.put(character,Integer.parseInt(charactersSize));
            idCharactersMap.put(id,newStringArray);  
        }
        
        //store at array
        ArrayList<String> remainingCharactesList = charactersRemainingMap.get(id);
        if(remainingCharactesList!=null){
            for(int i = 0;i<Integer.parseInt(charactersSize);i++){
                remainingCharactesList.add(character);
            }
        }else{
            ArrayList<String> tempCharactersList = new ArrayList<String>();
            tempCharactersList.add(character);
            charactersRemainingMap.put(id,tempCharactersList);
        }
        System.out.println("idCharactersMap");
        /*
        System.out.println(idCharactersMap);
        System.out.println("initialStringArray");
        System.out.println(initialStringArray);
        System.out.println(character);*/
        
        return character;
        /*ArrayList<String> initialStringArray = idCharactersMap.get(id);
        initialStringArray.add(character);
        idCharactersMap.put(id,initialStringArray);*/
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getPublicRoom")
    public String getPublicRoom(@RequestParam(value = "id", defaultValue = "World") String id) {
        System.out.println(roomPublicMap.get(id));
        return roomPublicMap.get(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getCharacters")
    public ResponseEntity<?> getCharacters(@RequestParam(value = "id", defaultValue = "World") String id) {
        System.out.println(roomPublicMap.get(id));
        return ResponseEntity.ok(idCharactersMap.get(id));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getCharacterPlayers")
    public ResponseEntity<?> getCharacterPlayers(@RequestParam(value = "id") String id,@RequestParam(value = "character") String character) {
        System.out.println("realtimeIdCharactersMap.get(id)");
        System.out.println(realtimeIdCharactersMap.get(id));
        return ResponseEntity.ok(realtimeIdCharactersMap.get(id).get(character));
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getACharacter")
    public String getACharacter(@RequestParam(value = "id") String id, @RequestParam(value = "name") String name ) {
        //remove the character from the list
        /*System.out.println("HALLO world");
        System.out.println(id);
        System.out.println(charactersRemainingMap);
        System.out.println(charactersRemainingMap.get(id));*/

        //check room full not
        if(charactersRemainingMap.get(id).size()==0){
            return "full";
        }
         
        //check name used not
        for ( Map.Entry<String,ArrayList<String> >set : realtimeIdCharactersMap.get(id).entrySet()) {
		    for(int i = 0 ;i<set.getValue().size();i++){
                System.out.println("HALLOWORLD");
                System.out.println(set.getValue().get(i));
                if(set.getValue().get(i).equals(name)) return "nameOccupied";
            }
		}/**
        boolean isNameOccupied = false;
        realtimeIdCharactersMap.get(id).forEach((character, nameArrays) -> {
            for(int i = 0 ;i<nameArrays.size();i++){
                System.out.println("HALLOWORLD");
                System.out.println(nameArrays.get(i));
                if(nameArrays.get(i).equals(name)){
                    isNameOccupied = true;
                };
            }
        });
        if(isNameOccupied == true){
            return "nameOccupied";
        }*/
        Random rand = new Random();
        int i = rand.nextInt(charactersRemainingMap.get(id).size());
        String returnCharacter = charactersRemainingMap.get(id).remove(i);
        //System.out.println("HBJNKO");
        System.out.println(charactersRemainingMap);
        //add the name to the character
        if(realtimeIdCharactersMap.get(id).get(returnCharacter)!=null) realtimeIdCharactersMap.get(id).get(returnCharacter).add(name);
        else{
            ArrayList<String> tempArray = new ArrayList<String> ();
            tempArray.add(name);
            realtimeIdCharactersMap.get(id).put(returnCharacter,tempArray);
        }
        return returnCharacter;
    }
    



}


