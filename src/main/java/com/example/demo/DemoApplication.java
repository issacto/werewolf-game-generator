package com.example.demo;

 import org.springframework.boot.SpringApplication;
 import org.springframework.boot.autoconfigure.SpringBootApplication;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.RequestParam;
 import org.springframework.web.bind.annotation.RestController;
 import java.util.Base64;
 import java.time.LocalDateTime;  
 import java.text.SimpleDateFormat;  
 import java.util.Date;    
 import java.util.ArrayList;
 import java.util.HashMap; 
 import org.springframework.web.bind.annotation.CrossOrigin;

 
 @SpringBootApplication
 @RestController
 public class DemoApplication {
    private static int counter = 0;
    private static  ArrayList<String> idList = new ArrayList<String>();
    private static HashMap<String, String> roomSizeMap = new HashMap<String, String>();
    private static HashMap<String, String> roomPublicMap = new HashMap<String, String>();
    private static HashMap<String, ArrayList<String>> idCharactersMap = new HashMap<String, ArrayList<String>>();

    public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
    }

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
        idCharactersMap.put(encodedString,initilizeStringArray);
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
    public void putRoom(@RequestParam(value = "id") String id, @RequestParam(value = "character") String character) {
        ArrayList<String> initialStringArray = idCharactersMap.get(id);
        initialStringArray.add(character);
        idCharactersMap.put(id,initialStringArray);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getPublicRoom")
    public String getPublicRoom(@RequestParam(value = "id", defaultValue = "World") String id) {
        System.out.println(roomPublicMap.get(id));
        return roomPublicMap.get(id);
    }


}




