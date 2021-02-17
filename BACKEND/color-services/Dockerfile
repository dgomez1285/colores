FROM fabric8/java-alpine-openjdk11-jdk
RUN apk add curl
ADD /target/colors-services-0.0.1-SNAPSHOT.jar //
ENTRYPOINT ["java", "-jar", "/colors-services-0.0.1-SNAPSHOT.jar"]
