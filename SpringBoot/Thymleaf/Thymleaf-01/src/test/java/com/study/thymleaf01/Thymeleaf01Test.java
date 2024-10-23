package com.study.thymleaf01;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest // JUnit(Test)를 위한 클래스임을 알려주는 어노테이션
public class Thymeleaf01Test {

    @Autowired  // Spring에서 관리하는 객체를 가져오기 가져옴
    private Room room;

    @Test   // Test를 할 함수( 메서드 )
    public void test() {
        System.out.println("Room : " + room);
        System.out.println("Furniture : " + room.furniture);
    }


}
