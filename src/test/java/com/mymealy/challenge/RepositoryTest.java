package com.mymealy.challenge;

import com.mymealy.challenge.entity.RateHistoryEntity;
import com.mymealy.challenge.repository.RateHistoryRepository;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Commit;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;
import org.assertj.core.api.Assertions;

import java.math.BigDecimal;
import java.util.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@ExtendWith(SpringExtension.class)
@DataJpaTest
@Transactional
public class RepositoryTest {

    @Value("${binance.api.url}")
    private String binanceApiUrl;
    @Value("${binance.api.symbol}")
    private String binanceApiSymbol;
    @Autowired
    private RateHistoryRepository rateHistoryRepository;

    @Test
    @Order(1)
    @Commit
    public void setup() {
        RateHistoryEntity entity = new RateHistoryEntity();
        entity.setSymbol(binanceApiSymbol);
        entity.setMins(5);
        entity.setPrice(new BigDecimal(61000));
        entity.setCreatedDate(new Date());
        rateHistoryRepository.save(entity);
    }

    @Test
    @Order(2)
    public void findAllBySymbol() {
        List<RateHistoryEntity> entities = rateHistoryRepository.findAllBySymbolIn(Arrays.asList(binanceApiSymbol));
        Assertions.assertThat(entities).isNotNull();
        Assertions.assertThat(entities).isNotEmpty();
    }

    @Test
    @Order(3)
    public void findAllByDates() {
        Calendar calendar = new GregorianCalendar();
        calendar.setTimeInMillis(new Date().getTime());
        calendar.add(Calendar.MINUTE,-5);
        Date beginDate = calendar.getTime();
        calendar.add(Calendar.MINUTE,10);
        Date endDate = calendar.getTime();
        List<RateHistoryEntity> entities = rateHistoryRepository.findAllBySymbolInAndCreatedDateBetween(Arrays.asList(binanceApiSymbol),beginDate,endDate);
        Assertions.assertThat(entities).isNotNull();
        Assertions.assertThat(entities).isNotEmpty();
    }
}
