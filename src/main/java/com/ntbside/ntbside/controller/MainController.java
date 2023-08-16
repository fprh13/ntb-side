package com.ntbside.ntbside.controller;


import com.ntbside.ntbside.DTO.UserDTO;
import com.ntbside.ntbside.repository.UserRepository;
import com.ntbside.ntbside.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class MainController {

    private UserService userService;
    private UserRepository userRepository;

    @GetMapping("")
    public ResponseEntity<?> hello() {
        return ResponseEntity.ok("현상이 안녕 ?");
    }

    @GetMapping("/insert")
    public ResponseEntity<?> insert(
            @RequestBody UserDTO userDTO
    ) {
        if (userDTO != null) {
            userService.save(userDTO);
            return ResponseEntity.ok("insert score");
        } else {
            return ResponseEntity.ok("no data");
        }
    }


    @GetMapping("/list")
    public ResponseEntity<?> test(
    ) {
        return (ResponseEntity<?>) userService.getUsersByScoreDescending();
    }
}
