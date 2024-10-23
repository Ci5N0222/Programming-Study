package com.study.thymleaf01;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Room {

    @Autowired
    public Furniture furniture;


}
