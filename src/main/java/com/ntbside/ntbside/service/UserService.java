package com.ntbside.ntbside.service;

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

    // 그냥 리스트 뽑는거
    public List<UserEntity> getUsersByScoreDescending() {
        return userRepository.findAllByOrderByScoreDesc();
    }

    // 등수 알려주는거
    public int calculateRank(List<UserEntity> users, int score) {
        int rank = 1;
        for (UserEntity user : users) {
            if (user.getScore() == score) {
                return rank;
            }
            rank++;
        }
        return -1;
    }

    // 페센트 뽑는거
    public double calculatePercentile(List<UserEntity> users, int rank) {
        if (rank <= 0) {
            return 0.0;
        }
        int totalUsers = users.size();
        return ((totalUsers - rank + 1) * 100.0) / totalUsers;
    }
}
