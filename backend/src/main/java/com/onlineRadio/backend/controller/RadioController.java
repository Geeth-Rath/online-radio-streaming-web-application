    package com.onlineRadio.backend.controller;

    import com.onlineRadio.backend.model.Radio;
    import com.onlineRadio.backend.service.RadioService;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

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

        @PostMapping("/{userId}/create")
        public ResponseEntity<Radio> createRadio(@PathVariable Integer userId, @RequestBody Radio radio) {
            Radio createdRadio = radioService.createRadio(userId, radio);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdRadio);
        }

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
    }
