package com.mymealy.mymealychalange.repository;

import com.mymealy.mymealychalange.repository.entity.MarketPrice;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface MarketPriceRepository extends CrudRepository<MarketPrice, Long> {
    List<MarketPrice> findAll();
    List<MarketPrice> findAllByCreationDateTimeBetween(LocalDateTime startDateTime, LocalDateTime endDateTime);
}
