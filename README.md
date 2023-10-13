#Desarrollo de aplicacion en React 18.2.0 y Springboot para los endpoints y backend.
Version Nodejs:18.16.1
Version de Posgresql: 15 y pgAdmin 4.-
Ide para Intefaz Gráfica:Visual Studio Code.
Ide para Backend y Springboot : IntellijIdea 2023.

Librerias y servicios utilizados:
-CSS = Tailwindcss 3. 3. 3
-Gestion y manejos de peticiones a la  api = axios 1.5.1
-Rutas React = React router Dom 6.16
-Json server para pruebas iniciales con datos.
-Postman
-Model Mapper para las respuestas DTO de springboot.

//FrontEnd
-Creamos la app a traves de VITE : "npm create vite@latest" 
-Instalamos TailwindCSS para los estilos.
La aplicacion se compone de  un layout principal la cual anida rutas hijas para el resto de componentes,existen dos entidades clientes y medidores .Por su parte es posible listar todos los clientes ingresados,editarlos,eliminarlos y por supuesto crear clientes,los campos se encuentran validados para no ingresar campos en blanco.
En el listado de clientes es posible acceder a la asignacion de medidores donde se despliega el listado completo de los medidores creados los cuales se acceden desde el menu que dice Medidores que igual que la entidad clientes se pueden crear,editar,eliminar y listar todos los medidores creados.
Al acceder y asignar un medidor a un cliente este se guarda y actualiza su data,se encuentra validado para que no se puedan ingresar mas de 3 medidores por cliente,desactivando en la interfaz los checkbox disponibles.
Tambien si se desea volver a asignar un medidor nos muestra una alerta donde se menciona que ya a sido agregado dicho medidor manteniendo el estado.
Para esta aplicación se utilizó lo recomendado por React Router, utilizar funciones para cargar datos cuando se acceden a las rutas precargados y  que son llamados "loader" y funciones "action" que permiten enviar los datos sin tener que acceder a crear estados adicionales.

//BackEnd
En el lado del backend se utilizó springboot 3.x.x donde se crearon los controladores,entidades,DTOS,repositorios y Servicios.
El proyecto backend se estructura con llamadas a los Repositorios donde accedemos a los metodos principales de JPA ya sea para actualizar,crear,eliminar,listar.
A través de interfaces en los services se crean los métodos necesarios para luego ser implementados en la capa de servicesimplement.
El rut del cliente se valida solo en springboot para no insertar un valor ya creado arrojando una excepcion que deberia ser mostrada al usuario,solo para pruebas.


#Documentacion Api Swagger,prueba de endpoints.
http://localhost:8080/api/swagger-ui/index.html

