package com.mymealy.challenge;

import com.mymealy.challenge.entity.RateHistoryEntity;
import com.mymealy.challenge.repository.RateHistoryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.util.Date;

@Configuration
public class ScheduledTask {
    private static final Logger log = LoggerFactory.getLogger(ScheduledTask.class);
    private RateHistoryRepository rateHistoryRepository;
    private RestTemplate restTemplate;

    @Value("${binance.api.url}")
    private String binanceApiUrl;
    @Value("${binance.api.symbol}")
    private String binanceApiSymbol;


    @Autowired
    public ScheduledTask(RateHistoryRepository rateHistoryRepository, RestTemplate restTemplate) {
        this.rateHistoryRepository = rateHistoryRepository;
        this.restTemplate = restTemplate;
    }

    @Scheduled(fixedDelayString = "${periodic.operation.delay}", initialDelay = 5000)
    public void getAvgPriceTask() throws IOException {
        try {
            UriComponentsBuilder uriComponentsBuilder = UriComponentsBuilder.fromHttpUrl(binanceApiUrl.concat("/api/v3/avgPrice")).queryParam("symbol", binanceApiSymbol);
            ResponseEntity<RateHistoryEntity> responseEntity = restTemplate.getForEntity(uriComponentsBuilder.toUriString(), RateHistoryEntity.class);
            RateHistoryEntity rateHistoryEntity = responseEntity.getBody();
            rateHistoryEntity.setSymbol(binanceApiSymbol);
            rateHistoryEntity.setCreatedDate(new Date());
            rateHistoryRepository.save(rateHistoryEntity);
            log.info(rateHistoryEntity.toString());
        } catch (RestClientException e) {
            log.error(e.getMessage());
        }
    }
}
