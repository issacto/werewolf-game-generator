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
 
 @SpringBootApplication
 @RestController
 public class DemoApplication {
    private static int counter = 0;

    public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
    }

    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }
    
    @GetMapping("/getRoom")
    public String getRoom(@RequestParam(value = "name", defaultValue = "World") String name) {
        counter+=1;
        //get Time
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");  
        Date date = new Date();  
        String time = formatter.format(date);  
        String finalInput = Integer.toString(counter) +time;
        System.out.println("Time now"+"   "+finalInput);
        //encode
        String encodedString = Base64.getEncoder().encodeToString(finalInput.getBytes());
        return String.format("Hello %s!", encodedString);
    }

}


