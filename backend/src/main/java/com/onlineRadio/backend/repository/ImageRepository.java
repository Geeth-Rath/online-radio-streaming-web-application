package com.onlineRadio.backend.repository;

import com.onlineRadio.backend.modal.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Integer> {
}