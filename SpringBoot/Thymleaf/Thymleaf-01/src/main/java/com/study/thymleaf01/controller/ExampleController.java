package com.study.thymleaf01.controller;

import com.study.thymleaf01.bean.vo.ExampleVo;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;

@Controller
@RequestMapping("/ex/*")    // localhost:10000/xe 는 다 이 컨트롤러에서 처리
@Slf4j
public class ExampleController {
    
    // 이름이 Controller인 것은 아무 의미도 없음
    // 중요한 것은 이 클래스가 Controller라는 것을 표시하는 어노테이션
    // @Controller
    @RequestMapping("/01")
    public void example01() {
        //로그만 출력
        log.info("example01 called");
    }

    // @RequstMapping에서 method 속성을 주면 GET, POST 등 방식 지정 가능
    // 또는 @GetMapping, @PostMapping 이용
    @GetMapping("/02")
    public void example02() {
        // 로그만 출력
        log.info("example02 called");
    }

    // Post는 어떻게 테스트를 수행하는가?
    // Talend API Tester 설치
    @PostMapping("/02")
    public void example02Post() {
        log.info("example02(Post) called");
    }

    // Servlet을 활용한 예전 방식으로 데이터 수신
    // name과 age를 수신하는 예제
    @GetMapping("/03")
    public String example03(HttpServletRequest req) {
        String name = req.getParameter("name");
        int age = Integer.parseInt(req.getParameter("age"));

        ExampleVo vo = new ExampleVo();
        vo.setName(name);
        vo.setAge(age);

        log.info(vo.toString());

        return "index";
    }

    // Spring의 자동매핑 방식으로 수신 1
    @GetMapping("/04")
    public String example04(String name, int age) {
        ExampleVo vo = new ExampleVo();
        vo.setName(name);
        vo.setAge(age);

        log.info(vo.toString());

        return "index";
    }

    // Spring의 자동매핑 방식으로 수신 2
    @GetMapping("/05")
    public String example05(ExampleVo vo) {
        log.info(vo.toString());
        return "index";

        // VO가 무슨 역할을 하는가? 변수를 갖는 상자의 느낌
        // Spring은 상자를 유심히 보지 않는다.
        // 상자의 변수에 주목한다. 변수명과 파라미터명이 같다면 자동으로 매핑한다.
    }

    // 데이터 1묶음을 HTML에 보내는 방법( @ModelAttribute )
    @GetMapping("/06")
    public void example06(@ModelAttribute("MyModel") String name) {
        name = "James Bond";
    }

    // 2개를 보내야 한다면? → 상자로 싸서 보낸다.
    @GetMapping("/07")
    public void example07(@ModelAttribute("MyModel") ExampleVo vo) {
        vo.setName("James Bond");
        vo.setAge(50);
    }

    // 그런데, 보내야 하는 데이터의 종류가 너무 이질적인 여러 개
    // 상자를 만들려면 클래스를 선언해야 하는데, 재사용 가능성 X
    // 여러 묶음의 데이터를 HTML에 보내는 방법( @Model )
    @GetMapping("/08")
    public String example08(Model model) {
        ExampleVo vo = new ExampleVo();
        vo.setName("James Bond");
        vo.setAge(50);

        model.addAttribute("example", vo);
        model.addAttribute("todayFeel", "Good");
        model.addAttribute("nationality", "Korea");

        ArrayList list = new ArrayList();
        ExampleVo vo1 = new ExampleVo();
        ExampleVo vo2 = new ExampleVo();
        ExampleVo vo3 = new ExampleVo();

        vo1.setName("Merry");
        vo1.setAge(11);

        vo2.setName("Mr.President");
        vo2.setAge(60);

        vo3.setName("The King");
        vo3.setAge(1000);

        list.add(vo1);
        list.add(vo2);
        list.add(vo3);

        model.addAttribute("list", list);

        return "example08.html";
    }
}
