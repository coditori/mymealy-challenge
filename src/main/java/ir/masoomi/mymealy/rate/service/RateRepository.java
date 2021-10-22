package ir.masoomi.mymealy.rate.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RateRepository extends JpaRepository<Rate, Long> {

    @Query(value = "select * from rate where symbol = ?1 and rate.price is not null order by id desc limit 1", nativeQuery = true)
    Rate findDistinctTopByValueNotNullOrderByIdDesc(@Param("symbol") String symbol);

    @Query("select rate from Rate rate where rate.time >= :startTime and rate.time <= :endTime and rate.symbol = :symbol and rate.price is not null order by rate.id")
    List<Rate> findAllBetweenTimes(@Param("symbol") String symbol,
                                   @Param("startTime") Long startTime,
                                   @Param("endTime") Long endTime);
}
