package com.nandha.meow.dto;





import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Product {

    private int id;
    private String productname;
    private int quantity;
    private double price;
}
