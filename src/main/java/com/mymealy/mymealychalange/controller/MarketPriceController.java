package com.mymealy.mymealychalange.controller;

import com.mymealy.mymealychalange.repository.entity.MarketPrice;
import com.mymealy.mymealychalange.service.MarketPriceService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class MarketPriceController {
    private final MarketPriceService marketPriceService;

    @GetMapping("/rates")
    public ResponseEntity<List<MarketPrice>> getRates() {
        List<MarketPrice> response = marketPriceService.getRates();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/rates/by-date-time")
    public ResponseEntity<List<MarketPrice>> getRateByCreationDateTimeBetween(
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startTime,
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endTime) {
        List<MarketPrice> response = marketPriceService.getRateByCreationDateTimeBetween(startTime, endTime);
        return ResponseEntity.ok(response);
    }
}
