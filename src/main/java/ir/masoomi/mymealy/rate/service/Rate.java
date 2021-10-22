package ir.masoomi.mymealy.rate.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor(staticName = "of")
@Entity
public class Rate {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private Long time;
    private String symbol;
    private String price;
}
