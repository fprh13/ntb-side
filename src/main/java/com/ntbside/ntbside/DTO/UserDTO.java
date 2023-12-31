package com.ntbside.ntbside.DTO;

import com.ntbside.ntbside.entity.UserEntity;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;


@Data
@NoArgsConstructor
public class UserDTO {

    private Long id;

    private int rank = 0;

    @NotBlank(message = "닉네임은 필수 입력값입니다.")
    private String username;

    private int score = 0;

    public UserEntity toEntity(){
        UserEntity build = UserEntity.builder()
                .username(username)
                .score(score)
                .build();  //build() 가 객체를 생성해 돌려준다.
        return build;
    }


    @Builder
    public UserDTO(Long id, String username, int score, int rank) {
        this.id = id;
        this.rank = rank;
        this.username = username;
        this.score = score;
    }
}
