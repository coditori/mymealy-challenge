package ir.masoomi.mymealy.rate.service;

import ir.masoomi.mymealy.rate.RateDto;
import ir.masoomi.mymealy.rate.service.Rate;

import java.util.List;

public interface RateService {

    RateDto saveRate(RateDto rateDto);

    RateDto getRate(String symbol);

    List<RateDto> getRateHistory(String symbol, Long startTime, Long endTime);
}
