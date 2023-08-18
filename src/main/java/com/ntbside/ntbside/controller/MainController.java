package com.ntbside.ntbside.controller;


import com.ntbside.ntbside.DTO.RankingResultDTO;
import com.ntbside.ntbside.DTO.UserDTO;
import com.ntbside.ntbside.entity.UserEntity;
import com.ntbside.ntbside.repository.UserRepository;
import com.ntbside.ntbside.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class MainController {


    private UserService userService;
    private UserRepository userRepository;


    @Autowired
    public MainController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }


    // 그냥 설문 저장 할거면 이거
    @PostMapping("/insert")
    public ResponseEntity<?> insert(
            @RequestBody UserDTO userDTO
    ) {
        if (userDTO != null) {
            UserEntity newUser = userDTO.toEntity();
            userRepository.save(newUser);
            return ResponseEntity.ok("insert score");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    // 사람들 내림 차순 리스트 이거 등수는 필요없겠지만
    @GetMapping("/list")
    public ResponseEntity<List<UserDTO>> test(
    ) {
        List<UserEntity> ranking = userService.getUsersByScoreDescending();
        List<UserDTO> rankedUsers = new ArrayList<>();
        int rank = 1;
        for (int i = 0; i < ranking.size(); i++) {
            UserEntity user = ranking.get(i);
            if (i > 0 && user.getScore() < ranking.get(i - 1).getScore()) {
                rank = i + 1;
            }
            rankedUsers.add(new UserDTO(user.getId(), user.getUsername(), user.getScore(), rank));
        }
        return ResponseEntity.ok(rankedUsers);
    }



    //저장과 동시에 등수 퍼센트 모두 알려줌
    //전국 순위에 퍼센트도 알려줌
    @PostMapping("/result")
    public ResponseEntity<RankingResultDTO> saveAndResult(
            @RequestBody UserDTO userDTO
    ) {
        UserEntity newUser = userDTO.toEntity();
        userRepository.save(newUser);
        List<UserEntity> users = userService.getUsersByScoreDescending();
        int rank = userService.calculateRank(users, newUser.getScore());
        double percentile = userService.calculatePercentile(users, rank);
        if (rank > 0) {
            RankingResultDTO resultDTO = new RankingResultDTO(rank, percentile);
            return ResponseEntity.ok(resultDTO);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
