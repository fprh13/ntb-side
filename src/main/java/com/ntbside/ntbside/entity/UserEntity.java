package com.ntbside.ntbside.entity;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "score")
    private int score;

    @Builder
    public UserEntity(String username, int score) {
        this.username = username;
        this.score = score;
    }
}
