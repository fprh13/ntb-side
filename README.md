# OX퀴즈 만들기

`OX퀴즈 만들기` 웹 애플리케이션 프로젝트 입니다. <br/><br/>
`2023.08.16 ~ 2022.08.18` 동안 `Spring Boot`를 사용해 구현했습니다.<br>
프론트엔드와의 협업과 클라우드배포를 배우는 것이 목적 입니다.<br>

# 프로젝트 구조

```
└── src
    ├── main
    │   ├── java
    │   │   └── com
    │   │       └── ntbside
    │   │           └── ntbside
    │   │               ├── DTO
    │   │               │   ├── RankingResultDTO.java
    │   │               │   └── UserDTO.java
    │   │               ├── NtbsideApplication.java
    │   │               ├── controller
    │   │               │   └── MainController.java
    │   │               ├── entity
    │   │               │   └── UserEntity.java
    │   │               ├── repository
    │   │               │   └── UserRepository.java
    │   │               └── service
    │   │                   └── UserService.java
    │   └── resources
    │       ├── application.properties
    │       ├── application.yml
    │       ├── static
    │       └── templates
    └── test
```

# 📚 목차

- [사용 기술](#-사용-기술-및-환경)
- [구현 기능](#-구현-기능)

# ⚒️ 사용 기술 및 환경

### ⚙️ Backend

| 기술 & 환경   | 버전    |
| ------------- | ------- |
| Spring Boot   | 2.7.11  |
| Gradle        | 8.1.1   |
| MySQL         | 8.0.33  |
| Java          | 11.0.18 |
| IntelliJ IDEA | 17.0.6  |

# ✨ 구현 기능

- SCORE
  - 점수 저장
  - 등수 반환
  - 등수를 퍼센트로 반환
