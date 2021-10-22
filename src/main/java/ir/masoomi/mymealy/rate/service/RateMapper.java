package ir.masoomi.mymealy.rate.service;

import ir.masoomi.mymealy.rate.RateDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RateMapper  {

    Rate dto2Model(RateDto rateDto);
    RateDto model2Dto(Rate rate);
}
