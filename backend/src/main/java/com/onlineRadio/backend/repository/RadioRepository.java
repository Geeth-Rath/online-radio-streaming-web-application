package com.onlineRadio.backend.repository;

import com.onlineRadio.backend.model.Radio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RadioRepository extends JpaRepository<Radio, Integer> {

    @Query("SELECT r FROM Radio r JOIN FETCH r.user u WHERE u.id = :userId")
    List<Radio> findAllByUserId(@Param("userId") Integer userId);
}
