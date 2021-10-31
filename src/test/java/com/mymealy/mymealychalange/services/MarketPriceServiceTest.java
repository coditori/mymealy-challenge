package com.mymealy.mymealychalange.services;

import com.mymealy.mymealychalange.repository.MarketPriceRepository;
import com.mymealy.mymealychalange.service.MarketPriceServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.platform.runner.JUnitPlatform;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.Collections;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
@RunWith(JUnitPlatform.class)
public class MarketPriceServiceTest {
    @Mock
    private MarketPriceRepository marketPriceRepository;
    @InjectMocks
    private MarketPriceServiceImpl marketPriceService;


    @Test
    void getRates() {
        doReturn(Collections.emptyList())
                .when(marketPriceRepository)
                .findAll();
        marketPriceService.getRates();
        verify(marketPriceRepository).findAll();
    }

    @Test
    void getRateByCreationDateTimeBetween() {
        LocalDateTime startTime = LocalDateTime.now();
        LocalDateTime endTime = LocalDateTime.now().plusHours(3);
        doReturn(Collections.emptyList())
                .when(marketPriceRepository)
                .findAllByCreationDateTimeBetween(any(), any());
        marketPriceService.getRateByCreationDateTimeBetween(startTime, endTime);
        verify(marketPriceRepository).findAllByCreationDateTimeBetween(startTime, endTime);
    }
}
