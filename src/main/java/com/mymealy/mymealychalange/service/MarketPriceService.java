package com.mymealy.mymealychalange.service;

import com.mymealy.mymealychalange.repository.entity.MarketPrice;

import java.time.LocalDateTime;
import java.util.List;

public interface MarketPriceService {
    List<MarketPrice> getRates();
    List<MarketPrice> getRateByCreationDateTimeBetween(LocalDateTime startDateTime, LocalDateTime endDateTime);

    void getPricesAndSaveInDb() throws Exception;
}
