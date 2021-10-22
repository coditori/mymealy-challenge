package ir.masoomi.mymealy.camel;

import lombok.RequiredArgsConstructor;
import org.apache.camel.builder.RouteBuilder;
import org.springframework.stereotype.Component;
import ir.masoomi.mymealy.exception.BusinessException;
import ir.masoomi.mymealy.exception.RateExceptionHandler;

@Component
@RequiredArgsConstructor
public class MainRoute extends RouteBuilder {

  private final RateExceptionHandler rateExceptionHandler;
  private final SaveRateProcessor saveRateProcessor;
  private final ReadRateProcessor readRateProcessor;

  @Override
  public void configure() {

    from("{{camel.from.scheduler}}")
            .doTry()
            .process(readRateProcessor)
            .process(saveRateProcessor)
            .doCatch(BusinessException.class).process(rateExceptionHandler);
  }
}