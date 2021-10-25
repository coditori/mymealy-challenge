package com.mymealy.challenge.repository;

import com.mymealy.challenge.entity.RateHistoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

@Repository
public interface RateHistoryRepository extends JpaRepository<RateHistoryEntity, Long> {
    List<RateHistoryEntity> findAllBySymbolIn(List<String> symbols);
    List<RateHistoryEntity> findAllBySymbolInAndCreatedDateBetween(List<String> symbols,Date beginDate, Date endDate);
}
