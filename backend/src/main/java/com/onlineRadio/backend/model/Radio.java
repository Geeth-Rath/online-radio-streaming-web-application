package com.onlineRadio.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "radio")
@Data
@NoArgsConstructor
public class Radio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "programme", nullable = false)
    private String programme;

    @Column(name = "radio_station", nullable = false)
    private String radioStation;

    @Column(name = "radio_url", nullable = false, length = 255)
    private String radioUrl;

    @Column(name = "isFavorite", nullable = false)
    private boolean isFavorite;

    @Column(name = "rate")
    private Integer rate;

    @Column(name = "image_url", nullable = false, length = 255)
    private String imageUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

}


