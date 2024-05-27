package com.onlineRadio.backend.modal;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

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

    @Column(name = "rate", nullable = false)
    private Integer rate;

    @Column(name = "isFavorite", nullable = false)
    private boolean isFavorite;

    @ManyToMany(mappedBy = "radios")
    private Set<User> users;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id", referencedColumnName = "id")
    @JsonManagedReference
    private Image image;


}
