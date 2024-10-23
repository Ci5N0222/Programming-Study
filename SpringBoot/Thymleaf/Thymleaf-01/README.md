### Thymeleaf

#### application.properties 생성 후 작성
``` bash
 # JDBC Driver + datasource
spring.datasource.hikari.driver-class-name=org.mariadb.jdbc.Driver
spring.datasource.hikari.jdbc-url=jdbc:mariadb://[ip]:[port]/[database]
spring.datasource.hikari.username=[id]
spring.datasource.hikari.password=[password]
```