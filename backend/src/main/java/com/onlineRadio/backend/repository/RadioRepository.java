package com.onlineRadio.backend.repository;

import com.onlineRadio.backend.model.Radio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RadioRepository extends JpaRepository<Radio, Integer> {

}
