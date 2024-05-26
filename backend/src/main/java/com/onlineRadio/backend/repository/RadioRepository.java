package com.onlineRadio.backend.repository;

import com.onlineRadio.backend.modal.Radio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RadioRepository extends JpaRepository<Radio, Integer> {

}
