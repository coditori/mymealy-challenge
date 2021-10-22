package ir.masoomi.mymealy.camel;

import ir.masoomi.mymealy.rate.RateDto;
import ir.masoomi.mymealy.rate.service.RateService;
import lombok.RequiredArgsConstructor;
import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SaveRateProcessor implements Processor {

    private final RateService rateService;

    @Override
    public void process(Exchange exchange) {
        System.out.println(rateService.saveRate(exchange.getMessage().getBody(RateDto.class)));
    }
}