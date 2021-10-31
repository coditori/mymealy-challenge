package com.mymealy.mymealychalange.config;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;
import java.time.temporal.ChronoUnit;

@Configuration
public class RestTemplateConfig {

    @Bean("binance-client")
    public RestTemplate createBinanceRestClient() {

        return new RestTemplateBuilder()
                .rootUri("https://api.binance.com")
                .setConnectTimeout(Duration.of(30, ChronoUnit.SECONDS))
                .setReadTimeout(Duration.of(10, ChronoUnit.SECONDS))
                .build();
    }
}
