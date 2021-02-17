# colores

Este proyecto se creo para ayudar a tener un solo logar donde obtener los colores a usar en la empresa.

Herramientas usadas

- Spring boot
- Angular
- MySql
- Dockers


Instalación

Clonar el proyecto.

Dentro del proyecto java ejecutar mvn install para compilar

Dentro del proyecto angular ejecutar ng build --prod

Luego en la raiz del repositorio, donde se encuentra el docker-compose ejecutar udo docker-compose up --build -d

Finalamente abrir el archivo datos.sql y conectarse por un cliente a la bd mysql llamda bd_color y ejecutarlo.

el proyecto se podra ver en http://localhost:8082/

De forma adicional, la respuestas del backend por defecto se exponen en json, pero si fuera el caso tambien podrian se expuestas en xml cambiando en el header lo siguiente

Accept:application/json a Accept:application/xml

