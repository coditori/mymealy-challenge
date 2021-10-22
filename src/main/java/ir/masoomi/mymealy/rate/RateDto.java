package ir.masoomi.mymealy.rate;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor(staticName = "of")
public class RateDto {

    @JsonIgnore
    private Long id;

    private Long time;
    private String symbol;
    private String price;

    public RateDto(String symbol, String price) {
        this.symbol = symbol;
        this.price = price;
    }
}