package com.mymealy.mymealychalange.service;

import com.mymealy.mymealychalange.config.RestTemplateConfig;
import com.mymealy.mymealychalange.repository.MarketPriceRepository;
import com.mymealy.mymealychalange.repository.entity.MarketPrice;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MarketPriceServiceImpl implements MarketPriceService {

    private final MarketPriceRepository marketPriceRepository;
    @Qualifier("binance-client")
    private final RestTemplate restTemplate;


    @Override
    public List<MarketPrice> getRates() {
        return marketPriceRepository.findAll();
    }

    @Override
    public List<MarketPrice> getRateByCreationDateTimeBetween(LocalDateTime startDateTime, LocalDateTime endDateTime) {
        return marketPriceRepository.findAllByCreationDateTimeBetween(startDateTime, endDateTime);
    }

    @Override
    public void getPricesAndSaveInDb() throws Exception {

        MarketPrice marketPrice = restTemplate.getForEntity("/api/v3/ticker/price?symbol=BTCUSDT", MarketPrice.class).getBody();
        marketPriceRepository.save(marketPrice);

    }
}
