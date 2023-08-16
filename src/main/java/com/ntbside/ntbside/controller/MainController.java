package com.ntbside.ntbside.controller;


import com.ntbside.ntbside.DTO.RankingResultDTO;
import com.ntbside.ntbside.DTO.UserDTO;
import com.ntbside.ntbside.entity.UserEntity;
import com.ntbside.ntbside.repository.UserRepository;
import com.ntbside.ntbside.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(originPatterns="http://localhost:3000")
@RequestMapping("/user")
public class MainController {


    private UserService userService;
    private UserRepository userRepository;


    @Autowired
    public MainController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }


    @GetMapping("")
    public ResponseEntity<?> hello() {
        return ResponseEntity.ok("현상이 안녕 ?");
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
            return ResponseEntity.ok("no data");
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


        // 전국 순위를 나타내줌
        @GetMapping("/rank")
        public ResponseEntity<String> getRank ( @RequestParam("score") int score){
            List<UserEntity> users = userService.getUsersByScoreDescending();

            int rank = userService.calculateRank(users, score);
            String response;
            if (rank > 0) {
                response = "당신의 전국 순위는 " + rank + "등" + "입니다 !";
            } else {
                response = "등수를 찾을 수 없어요 ...";
            }

            return ResponseEntity.ok(response);
        }



    //전국 순위에 퍼센트도 알려줌
    @GetMapping("/result")
    public ResponseEntity<RankingResultDTO> getResult(@RequestParam("score") int score) {
        List<UserEntity> users = userService.getUsersByScoreDescending();

        int rank = userService.calculateRank(users, score);
        double percentile = userService.calculatePercentile(users, rank);

        String rankResponse;
        if (rank > 0) {
            rankResponse = "당신의 전국 순위는 " + rank + "등" + "입니다 !";
        } else {
            rankResponse = "등수를 찾을 수 없어요 ...";
        }

        RankingResultDTO resultDTO = new RankingResultDTO(rankResponse, percentile);
        return ResponseEntity.ok(resultDTO);
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
        String rankResponse;
        if (rank > 0) {
            rankResponse = "당신의 전국 순위는 " + rank + "등" + "입니다 !";
        } else {
            rankResponse = "등수를 찾을 수 없어요 ...";
        }
        RankingResultDTO resultDTO = new RankingResultDTO(rankResponse, percentile);
        return ResponseEntity.ok(resultDTO);
    }
}