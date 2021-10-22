package ir.masoomi.mymealy.rate.service;

import ir.masoomi.mymealy.rate.RateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RateServiceImpl implements RateService {

    private final RateRepository rateRepository;
    private final RateMapper rateMapper;

    @Override
    public RateDto saveRate(RateDto rateDto) {
        return rateMapper.model2Dto(rateRepository.save(rateMapper.dto2Model(rateDto)));
    }

    @Override
    public RateDto getRate(String symbol) {
        Rate rate = rateRepository.findDistinctTopByValueNotNullOrderByIdDesc(symbol);
        if(rate == null)
            return new RateDto("No data", "No data");
        return rateMapper.model2Dto(rate);
    }

    @Override
    public List<RateDto> getRateHistory(String symbol, Long startTime, Long endTime) {
        List<Rate> rates = rateRepository.findAllBetweenTimes(symbol, startTime, endTime);
        List<RateDto> ratesDto = new ArrayList<>();
        for(Rate rate : rates)
            ratesDto.add(rateMapper.model2Dto(rate));
        return ratesDto;
    }
}
