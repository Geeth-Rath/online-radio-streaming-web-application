package com.onlineRadio.backend.controller;

import com.onlineRadio.backend.model.Radio;
import com.onlineRadio.backend.service.RadioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/radios")
public class RadioController {
    @Autowired
    private final RadioService radioService;

    public RadioController(RadioService radioService) {
        this.radioService = radioService;
    }


    //    @PostMapping("/create")
//    public ResponseEntity<Radio> createRadio(@RequestBody Radio radio) {
//        System.out.println("radio********************************************");
//        System.out.println(radio);
//        Radio createdRadio = radioService.createRadio(radio);
//        return ResponseEntity.status(HttpStatus.CREATED).body(createdRadio);
//    }

    @PostMapping("/{userId}/create")
    public ResponseEntity<Radio> createRadio(@PathVariable Integer userId, @RequestBody Radio radio) {
        Radio createdRadio = radioService.createRadio(userId, radio);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRadio);
    }

//    @GetMapping("{id}/all")
//    public ResponseEntity<List<Radio>> getAllRadios() {
//        List<Radio> radios = radioService.getAllRadios();
//        return ResponseEntity.ok(radios);
//    }

//    @GetMapping("/all")
//    public ResponseEntity<List<Radio>> getAllRadios() {
//        List<Radio> radios = radioService.getAllRadiosWithUserDetails();
//        return ResponseEntity.ok(radios);
//    }

    @GetMapping("/{user_id}/all")
    public ResponseEntity<List<Radio>> getAllRadiosByUserId(@PathVariable("user_id") Integer userId) {
        List<Radio> radios = radioService.getAllRadiosByUserId(userId);
        return ResponseEntity.ok(radios);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Radio> getRadioById(@PathVariable Integer id) {
        Optional<Radio> song = radioService.getRadioById(id);
        return song.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }




    @PutMapping("/{id}")
    public ResponseEntity<Radio> updateRadio(@PathVariable Integer id, @RequestBody Radio radio) {
        System.out.println("REBody:"+ radio.toString());
        Radio updatedRadio = radioService.updateRadio(id, radio);
        return updatedRadio != null ? ResponseEntity.ok(updatedRadio) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRadio(@PathVariable Integer id) {
        boolean deleted = radioService.deleteRadio(id);
        if (deleted) {
            return ResponseEntity.ok("Successfully deleted");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/{id}/uploadImage")
    public ResponseEntity<Radio> uploadImage(@PathVariable Integer id, @RequestParam("file") MultipartFile file) {
        // Check the file type
        String fileType = file.getContentType();
        if (fileType == null ||
                !(fileType.equals(MediaType.IMAGE_JPEG_VALUE) ||
                        fileType.equals(MediaType.IMAGE_PNG_VALUE) ||
                        fileType.equals("image/jpg"))) {
            return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE).body(null);
        }

        try {
            Radio radio = radioService.uploadImage(id, file);
            return ResponseEntity.ok(radio);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}/updateImage")
    public ResponseEntity<Radio> updateImage(@PathVariable Integer id, @RequestParam("file") MultipartFile file) {
        // Check the file type
        String fileType = file.getContentType();
        if (fileType == null ||
                !(fileType.equals(MediaType.IMAGE_JPEG_VALUE) ||
                        fileType.equals(MediaType.IMAGE_PNG_VALUE) ||
                        fileType.equals("image/jpg"))) {
            return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE).body(null);
        }

        try {
            Radio radio = radioService.updateImage(id, file);
            return ResponseEntity.ok(radio);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }



}
