package ir.masoomi.mymealy;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.reactive.config.EnableWebFlux;

@EnableWebFlux
@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "MyMealy Application", version = "1.0.0", description = "Reach fresh data about currencies!", license = @License(name = "The MIT License")))
public class MyMeallyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyMeallyApplication.class, args);
    }

}
