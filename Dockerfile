FROM openjdk:11-jre-slim
RUN mkdir /app
COPY ./target/mymealy.jar /app/mymealy.jar
WORKDIR /app
CMD "java" "-jar" "mymealy.jar"