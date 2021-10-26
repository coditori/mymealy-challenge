package com.mymealy.challenge.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

@Data
@Entity
@Table
public class RateHistoryEntity implements Serializable {
    @Id
    @SequenceGenerator(name="SEQ_RateHistory",sequenceName="SEQ_RateHistory",allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_RateHistory")
    public Long id;


    @NotNull
    private String symbol;

    @NotNull
    private Integer mins;

    @NotNull
    private BigDecimal price;

    @NotNull
    protected Date createdDate;

}
