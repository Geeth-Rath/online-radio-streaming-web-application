package com.onlineRadio.backend.service;

import com.onlineRadio.backend.modal.Image;
import com.onlineRadio.backend.modal.Radio;
import com.onlineRadio.backend.repository.ImageRepository;
import com.onlineRadio.backend.repository.RadioRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class RadioService {

    private final RadioRepository radioRepository;
    private final ImageRepository imageRepository;

    public RadioService(RadioRepository radioRepository, ImageRepository imageRepository) {
        this.radioRepository = radioRepository;
        this.imageRepository = imageRepository;
    }

    public List<Radio> getAllRadios() {
        return radioRepository.findAll();
    }

    public Optional<Radio> getRadioById(Integer id) {
        return radioRepository.findById(id);
    }

    public Radio createRadio(Radio radio) {
        return radioRepository.save(radio);
    }

    public Radio updateRadio(Integer id, Radio radio) {
        Radio existingRadio = radioRepository.findById(id).orElse(null);
        if (existingRadio != null) {
            existingRadio.setProgramme(radio.getProgramme());
            existingRadio.setRadioStation(radio.getRadioStation());
            existingRadio.setRadioUrl(radio.getRadioUrl());
            existingRadio.setRate(radio.getRate());
            existingRadio.setFavorite(radio.isFavorite());
            return radioRepository.save(existingRadio);
        }
        return null;
    }

    public boolean deleteRadio(Integer id) {
        if (radioRepository.existsById(id)) {
            radioRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Radio uploadImage(Integer radioId, MultipartFile file) throws IOException {
        Radio radio = radioRepository.findById(radioId).orElseThrow(() -> new RuntimeException("Song not found"));
        Image image = new Image();
        image.setFileName(file.getOriginalFilename());
        image.setFileType(file.getContentType());
        image.setData(file.getBytes());
        imageRepository.save(image);

        radio.setImage(image);
        return radioRepository.save(radio);
    }
}
