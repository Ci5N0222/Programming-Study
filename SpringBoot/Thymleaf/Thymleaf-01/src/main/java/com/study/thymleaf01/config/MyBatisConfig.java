package com.study.thymleaf01.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.io.IOException;

@Configuration    // 설정용 클래스를 의미
@RequiredArgsConstructor
public class MyBatisConfig {

    // 커넥션 풀 및 Mybatis 필요 요소를 메모리에 할당 및 관리
    private final ApplicationContext applicationContext;

    // @Bean
    // Configuration 또는 @Component가 작성된 클래스의 메서드에 사용
    // 메서드의 실행결과를 스프링이 관리하도록 하는 어노테이션
    @Bean
    @ConfigurationProperties(prefix="spring.datasource.hikari")   // 상위경로 고정
    public HikariConfig hikariConfig() {
        // application.properties에 작성된 JDBC Driver + datasource 정보 설정
        return new HikariConfig();
    }

    @Bean
    public DataSource dataSource() {
        // DataSource 객체에 DBMS 정보 설정
        return new HikariDataSource(hikariConfig());
    }

    @Bean
    public SqlSessionFactory sqlSessionFactory() throws IOException {

        // 세션 팩토리 객체 생성
        SqlSessionFactoryBean sfb = new SqlSessionFactoryBean();

        // DataSource 객체를 세션 팩토리 설정에 전달
        sfb.setDataSource(dataSource());

        try {
            // Session Factory 생성
            SqlSessionFactory factory = sfb.getObject();

            // Camel 표기법 처리( DB는 대소문자가 없어 컬럼에 _를 넣는다 → Java에서는 Camel case로 변환 )
            // customer_age → customerAge
            factory.getConfiguration().setMapUnderscoreToCamelCase(true);

            return factory;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

}
