package com.mymealy.mymealychalange.config;

import com.mymealy.mymealychalange.service.MarketPriceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;

@Slf4j
@Configuration
@EnableScheduling
@RequiredArgsConstructor
public class SchedulingConfig {


    private static final int THREADS_COUNT = 1;
    private final MarketPriceService marketPriceService;

    @Scheduled(fixedDelayString = "${schedule.fixed-delay}")
    public void retryFailedSubmissionsForTrades() {
        try {
            this.marketPriceService.getPricesAndSaveInDb();
        } catch (Exception exception) {
            log.error(exception.getMessage());
        }
    }


    @Bean
    public ThreadPoolTaskScheduler threadPoolTaskScheduler() {
        ThreadPoolTaskScheduler threadPoolTaskScheduler = new ThreadPoolTaskScheduler();
        threadPoolTaskScheduler.setPoolSize(THREADS_COUNT);
        return threadPoolTaskScheduler;
    }

}
