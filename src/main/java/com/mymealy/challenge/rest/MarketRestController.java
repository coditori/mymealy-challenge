package com.mymealy.challenge.rest;

import com.mymealy.challenge.repository.RateHistoryRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@Tag(name = "Market")
@PropertySource("classpath:messages.properties")
@RequestMapping(value = "/api/v1")
public class MarketRestController {

    @Autowired
    private RateHistoryRepository rateHistoryRepository;

    @GetMapping(value = {"/avgPrice"})
    @Operation(summary = "${exchangeInfo.avgPrice.summary}", description = "${exchangeInfo.avgPrice.description}")
    public ResponseEntity avgPrice(@RequestParam List<String> symbols) {
        return new ResponseEntity(rateHistoryRepository.findAllBySymbolIn(symbols), HttpStatus.OK);
    }

    @GetMapping(value = {"/avgPriceBetweenDates"})
    @Operation(summary = "${exchangeInfo.avgPriceBetweenDates.summary}", description = "${exchangeInfo.avgPriceBetweenDates.description}")
    public ResponseEntity avgPriceBetweenDates(@RequestParam List<String> symbols, @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") Date beginDate,
                                               @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") Date endDate) {
        return new ResponseEntity(rateHistoryRepository.findAllBySymbolInAndCreatedDateBetween(symbols, beginDate, endDate), HttpStatus.OK);
    }
}
