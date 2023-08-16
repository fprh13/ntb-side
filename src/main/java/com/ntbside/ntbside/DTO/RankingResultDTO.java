package com.ntbside.ntbside.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RankingResultDTO {

    private int rankResponse;

    private double percentile;
}
