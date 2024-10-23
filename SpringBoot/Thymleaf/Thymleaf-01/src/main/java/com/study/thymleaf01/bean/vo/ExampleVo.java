package com.study.thymleaf01.bean.vo;

import lombok.Data;

@Data   // 모든 SET/GET 메서드를 모두 생성해주며, 데이터를 보여주는 toString()도 자동 생성
public class ExampleVo {
    private String name;
    private int age;
}
