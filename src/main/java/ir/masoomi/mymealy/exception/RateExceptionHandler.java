package ir.masoomi.mymealy.exception;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.springframework.stereotype.Component;

@Component
public class RateExceptionHandler implements Processor {

    @Override
    public void process(Exchange exchange) throws Exception {
        System.out.println("Exception > Can't connect Bainance!");
    }
}