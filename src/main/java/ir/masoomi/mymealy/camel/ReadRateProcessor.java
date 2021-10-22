package ir.masoomi.mymealy.camel;

import ir.masoomi.mymealy.rate.RateDto;
import ir.masoomi.mymealy.exception.BusinessException;
import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class ReadRateProcessor implements Processor {

    private  RestTemplate restTemplate = new RestTemplate();

    @Value("${services.rate.url}")
    private String rateServiceUrl;

    @Override
    public void process(Exchange exchange) throws BusinessException {

        RateDto result = getRate();
        result.setTime(exchange.getMessage().getMessageTimestamp());
        exchange.getMessage().setBody(result);
    }

    private RateDto getRate() throws BusinessException {
        try {
            return restTemplate.getForObject(rateServiceUrl, RateDto.class);
        } catch(Exception e) {
            throw new BusinessException("Can't connect to Bainance!");
        }
    }
}
