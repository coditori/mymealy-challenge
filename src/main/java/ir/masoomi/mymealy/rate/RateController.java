package ir.masoomi.mymealy.rate;

import ir.masoomi.mymealy.exception.BusinessException;
import ir.masoomi.mymealy.rate.service.Rate;
import ir.masoomi.mymealy.rate.service.RateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping("/api/rates")
@RequiredArgsConstructor
public class RateController {

    private final RateService rateService;

    @GetMapping
    public Mono<RateDto> getRate(@RequestParam(value = "symbol", required = false) String symbol) {
        if (symbol == null)
            symbol = "BTCUSDT";

        return Mono.just(rateService.getRate(symbol)).onErrorReturn(new RateDto("No Data", "There is no data"));
    }

    @GetMapping(value = "/history", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
    public Flux<List<RateDto>> getRateHistory(@RequestParam(value = "symbol", required = false) String symbol,
                                              @RequestParam(value = "startTime") Long startTime,
                                              @RequestParam(value = "endTime") Long endTime) {

        if(symbol == null)
            symbol = "BTCUSDT";

        return Flux.just(rateService.getRateHistory(symbol, startTime, endTime));
    }
}
