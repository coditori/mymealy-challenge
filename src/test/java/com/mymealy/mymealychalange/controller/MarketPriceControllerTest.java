package com.mymealy.mymealychalange.controller;

import com.mymealy.mymealychalange.service.MarketPriceService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.platform.runner.JUnitPlatform;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDateTime;

import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@RunWith(JUnitPlatform.class)
public class MarketPriceControllerTest {

    private MockMvc mockMvc;
    @Mock
    private MarketPriceService marketPriceService;
    @InjectMocks
    private MarketPriceController marketPriceController;

    @BeforeEach
    void init() {
        mockMvc = MockMvcBuilders.standaloneSetup(marketPriceController)
                .build();
    }

    @Test
    void getRates() throws Exception {

        mockMvc
                .perform(
                        get("/api/v1/rates")
                                .contentType(MediaType.APPLICATION_JSON)
                                .accept("application/json")
                )
                .andExpect(status().isOk());

        verify(marketPriceService).getRates();
    }
    @Test
    void getRateByCreationDateTimeBetween() throws Exception {

        LocalDateTime startTime =  LocalDateTime.now();
        LocalDateTime endTime =  LocalDateTime.now().plusHours(3);
        mockMvc
                .perform(
                        get("/api/v1/rates/by-date-time")
                                .param("startTime", String.valueOf(startTime))
                                .param("endTime", String.valueOf(endTime))
                                .contentType(MediaType.APPLICATION_JSON)
                                .accept("application/json")
                )
                .andExpect(status().isOk());

        verify(marketPriceService).getRateByCreationDateTimeBetween(startTime,endTime);
    }
}
