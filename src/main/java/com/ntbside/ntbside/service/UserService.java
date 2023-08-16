package com.ntbside.ntbside.service;

import com.ntbside.ntbside.DTO.UserDTO;
import com.ntbside.ntbside.entity.UserEntity;
import com.ntbside.ntbside.repository.UserRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserEntity> getUsersByScoreDescending() {
        return userRepository.findAllByOrderByScoreDesc();
    }

    public void save(UserDTO userDTO) {
        userRepository.save(userDTO.toEntity());
    }

}
