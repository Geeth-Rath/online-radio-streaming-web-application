package com.onlineRadio.backend.controller;

import com.onlineRadio.backend.modal.Radio;
import com.onlineRadio.backend.service.RadioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/radios")
public class RadioController {

    private final RadioService radioService;

    public RadioController(RadioService radioService) {
        this.radioService = radioService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Radio>> getAllRadios() {
        List<Radio> radios = radioService.getAllRadios();
        return ResponseEntity.ok(radios);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Radio> getRadioById(@PathVariable Integer id) {
        Optional<Radio> song = radioService.getRadioById(id);
        return song.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<Radio> createRadio(@RequestBody Radio radio) {
        Radio createdRadio = radioService.createRadio(radio);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRadio);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Radio> updateRadio(@PathVariable Integer id, @RequestBody Radio radio) {
        Radio updatedRadio = radioService.updateRadio(id, radio);
        return updatedRadio != null ? ResponseEntity.ok(updatedRadio) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSong(@PathVariable Integer id) {
        boolean deleted = radioService.deleteRadio(id);
        if (deleted) {
            return ResponseEntity.ok("Successfully deleted");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{id}/uploadImage")
    public ResponseEntity<Radio> uploadImage(@PathVariable Integer id, @RequestParam("file") MultipartFile file) {
        try {
            Radio radio = radioService.uploadImage(id, file);
            return ResponseEntity.ok(radio);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
