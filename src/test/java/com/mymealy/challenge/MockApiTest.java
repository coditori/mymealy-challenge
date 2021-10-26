package com.mymealy.challenge;

import com.mymealy.challenge.entity.RateHistoryEntity;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.math.BigDecimal;

@ExtendWith(SpringExtension.class)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest
public class MockApiTest {
    @Value("${binance.api.url}")
    private String binanceApiUrl;
    @Value("${binance.api.symbol}")
    private String binanceApiSymbol;
    @Mock
    private RestTemplate restTemplate;

    public void setup(){
        Mockito.when(restTemplate.getForEntity(binanceApiUrl.concat("/api/v3/ping"), String.class)).thenReturn(new ResponseEntity("", HttpStatus.OK));
        UriComponentsBuilder uriComponentsBuilder = UriComponentsBuilder.fromHttpUrl(binanceApiUrl.concat("/api/v3/avgPrice")).queryParam("symbol", binanceApiSymbol);
        Mockito.when(restTemplate.getForEntity(uriComponentsBuilder.toUriString(), RateHistoryEntity.class)).thenReturn(new ResponseEntity(new RateHistoryEntity(){{setPrice(new BigDecimal(60000));}}, HttpStatus.OK));
    }

    @Test
    @Order(1)
    public void ping() {
        setup();
        ResponseEntity<String> response = restTemplate.getForEntity(binanceApiUrl.concat("/api/v3/ping"), String.class);
        Assertions.assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    @Order(2)
    public void priceAvg(){
        setup();
        UriComponentsBuilder uriComponentsBuilder = UriComponentsBuilder.fromHttpUrl(binanceApiUrl.concat("/api/v3/avgPrice")).queryParam("symbol", binanceApiSymbol);
        ResponseEntity<RateHistoryEntity> responseEntity = restTemplate.getForEntity(uriComponentsBuilder.toUriString(), RateHistoryEntity.class);
        Assertions.assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        Assertions.assertThat(responseEntity.getBody().getPrice()).isEqualTo(new BigDecimal(60000));
    }
}
