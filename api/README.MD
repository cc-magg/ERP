## INSTALACION DE MONGODB

# 1
Primero debes instalar mongodb desde su pag oficial.
# 2
Debes crear una carpeta (Nota: no debe de ser en el disco local C ya que ese disco es solo de lectura) por ej: D:\var\lib\mongodb
# 3
Ahora debes abrir una ventana de CMD y accedes a la direccion en la que se creo el mongodb en tu equipo, en mi caso:
 ``` js
C:\Program Files\MongoDB\Server\4.2\bin
```
# 4
Ahora lo que haremos es muy sencillo y sera:
1) Iniciamos el servidor de **_mongod_** de manera que no verifique autenticacion.
2) Iniciamos **_mongo_** y creamos un usuario root (es el que tiene todos los permisos)
3) Tumbamos el servidor de mongod y lo volvemos a iniciar pero con autenticacion de usuarios activada
4) Cerramos la sesion de mongo que abrimos en el punto 2 y la volvemos a abrir pero con los credenciales del usuario root que ya creamos en el mismo punto 2

1) Verifica que creaste las direcciones de carpetas del punto #2 anterior ya que lo usaremos aqui.
Una vez verifiques, abre una nueva ventana de cmd y la llamaremos **_la ventana #1 de CMD_**, ingresa el codigo:
 ``` js
 > cd C:\Program Files\MongoDB\Server\4.2\bin
```
 ``` js
 > mongod --port 27017 --dbpath "D:\var\lib\mongodb"
```
Con la primera linea accedimos a la carpeta en la que esta el programa **_mongod_** para despues con la linea 2 ponemos a funcionar ese programa.
Espera a que carge (no demora casi nada).

2) Ahora sin cerrar **_la ventana #1 de CMD_** que creamos en el punto anterior, abre una nueva ventana CMD a la que llamaremos **_la ventana #2 de CMD_** e ingresa el codigo siguiente:
 ``` js
 > mongo
```
 ``` js
 > use admin
```
 ``` js
 > db.system.users.find()
```
Con la primera linea accedimos a la base de datos llamada "admin" que se crea por default en la instalacion de mongodb, en la segunda linea le estamos pidiendo que encuentre e imprima a todos los usuarios existentes, Aqui no deberia imprimir nada o no deberia encontrar ningun usuario.
 ``` js
 > show dbs
```
 ``` js
 > use admin
```
 ``` js
 > show collections
```
Aqui debe de imprimirte algo asi:
 ``` js
 > show collections
system.version
```
Y ahora ingresa:
 ``` js
 > db.createUser(
    {
        user: "superuser",
        pwd: "changeMeToAStrongPassword",
        roles: [ "root" ]
    }
)
```
Con eso te debe de imprimir de resultado:
 ``` js
Successfully added user: { "user" : "superuser", "roles" : [ "root" ] }
```
Ahora verificamos que si se halla creado ese usuario:
 ``` js
 > show collections
```
Como podras notar, la anterior vez que pusimos show collections solo nos arrojo 1 respuesta "system.version", pero ahora nos debe arrojar 2 como vemos a continuacion:
 ``` js
 > show collections
system.users
system.version
```
Ahora continuamos verificando que el usuario que cremaos is exista:
 ``` js
 > db.system.users.find()
```
Con esa linea debe mostrarnos un resultado asi:
 ``` js
 > db.system.users.find()
{ "_id" : "admin.superuser", "userId" : UUID("c199bba3-a28d-42c5-91d0-71b3f14817aa"), "user" : "superuser", "db" : "admin", "credentials" : { "SCRAM-SHA-1" : { "iterationCount" : 10000, "salt" : "EwT0oBKVTPC5IMTgdCw5fQ==", "storedKey" : "lp26lQftiTb8jX9NH9JfN/aaHSo=", "serverKey" : "P8J8WHzEMvMqaRRipMg1IkcV/p4=" }, "SCRAM-SHA-256" : { "iterationCount" : 15000, "salt" : "HSpu9RnGFP4k9g2T91ZPQVdUMtkZqvg1ibXNBA==", "storedKey" : "IegqC3xU6jTLA16w00w1uOsh7lvlEYvI7gHFcOzdXko=", "serverKey" : "cN0RiOQuD5B/ATBTTGIBmKCWC8vWP5z7lkAA04rDops=" } }, "roles" : [ { "role" : "root", "db" : "admin" } ] }
```
Y ya con eso sabemos que el usuario existe.

3) Ahora vamos a **_la ventana #1 de CMD_** que abirmos hace rato y que todabia debe de estar abierta y le ingresamos:
 ``` js
 ctrl+c
```
Con eso deberia de tumbar el servidor que estaba manteniendo.
Ahora volvemos a prender ese servidor PERO con la autenticacion funcionando (es el mismo codigo del punto 1 pero con un detalle al final):
 ``` js
 > mongod --port 27017 --dbpath "D:\var\lib\mongodb" --auth
```
Espera a que carge (no demora casi nada).


4) Ahora sin cerrar nada vamos a la **_la ventana #2 de CMD_** y le ingresamos:
 ``` js
 > ctrl+c
```
Con eso deberia de tumbar la sesion que teniamos abierta y ahora iniciaremos otra sesion pero esta vez sera una sesion con credenciales y sera con el usuario y contraseña del usuario que creamos en el punto 2:
 ``` js
 > mongo localhost:27017 -u "superuser" -p "changeMeToAStrongPassword" --authenticationDatabase "admin"
```
Y listo ya con eso deberias de estar logeado con el nuevo usuario en mongodb, para verificarlo puedes ir a **_la ventana #1 de CMD_** y al final debe de decir algo como:
 ``` js
Successfully authenticated as principal superuser on admin from client 127.0.0.1:58703
```
Ya con esto debes de dejar **_la ventana #1 de CMD_** siempre abierta y funcionando con --auth y cada que alguien quiera acceder a mongodb siempre debera ser un usuario existente de lo contrario no le permitira ni ver las bases de datos con el comando "show dbs", si alguien entra en lo que seria **_la ventana #2 de CMD_** y unicamente inicia con el comando **_mongo_** (osea sin credenciales) le permite entrar pero sin poder ver o acceder a nada, pero si entra con el comando **_mongo localhost:27017 -u "superuser" -p "changeMeToAStrongPassword" --authenticationDatabase "admin"_**.


// Se crea un nuevo usuario para hacer pruebas que usara la api:
Creamos al usuario de la db que usara la api en mongodb
use exampleUsers
db.createUser(
  {
    user: "example",
    pwd: "macasu123fuckyouja",
    roles: [
       { role: "readWrite", db: "exampleUsers" }
    ]
  }
)
db.createCollection("customusers", null);

1) creamos la db y la colleccion que contendra los usuarios de la api con:
use exampleUsers
db.customusers.insert({
  name: "arturo",
  password: "macasu123fuckyouja",
  isAdmin: true,
  age: 25,
  email: "carlos13arturo09@gmail.com"
})
2) corremos npm run seed-users para crear mas usuarios en esa collection
3) con los otros usuarios creados, procedemos a borrar el anterior usuario con db.customusers.remove({name: "arturo"})
