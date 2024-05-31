package com.onlineRadio.backend.service;

import com.onlineRadio.backend.errorHandling.ResourceNotFoundException;
import com.onlineRadio.backend.model.Radio;
import com.onlineRadio.backend.model.User;
import com.onlineRadio.backend.repository.RadioRepository;
import com.onlineRadio.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RadioService {

    private final RadioRepository radioRepository;
    private  final UserRepository userRepository;

    public RadioService(RadioRepository radioRepository,
                        UserRepository userRepository) {
        this.radioRepository = radioRepository;
        this.userRepository = userRepository;
    }


    public Optional<Radio> getRadioById(Integer id) {
        return radioRepository.findById(id);
    }


    public List<Radio> getAllRadiosByUserId(Integer userId) {
        return radioRepository.findAllByUserId(userId);
    }

    public Radio createRadio(Integer userId, Radio radio) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        radio.setUser(user);
        return radioRepository.save(radio);
    }

    public Radio updateRadio(Integer id, Radio radio) {
        Radio existingRadio = radioRepository.findById(id).orElse(null);
        if (existingRadio != null) {
            existingRadio.setProgramme(radio.getProgramme());
            existingRadio.setRadioStation(radio.getRadioStation());
            existingRadio.setRadioUrl(radio.getRadioUrl());
            existingRadio.setRate(radio.getRate());
            existingRadio.setImageUrl(radio.getImageUrl());
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

}