package com.depadel.depadelback;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class DepadelBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(DepadelBackApplication.class, args);
	}


	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/jugador/**")
						.allowedOrigins("http://127.0.0.1:5500")
						.allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
						.maxAge(3600);

				registry.addMapping("/auth/**")
						.allowedOrigins("http://127.0.0.1:5500")
						.allowedMethods("GET","POST", "PUT", "DELETE", "PATCH")
						.maxAge(3600);

			}

		};
	}

}
