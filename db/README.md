## Para ponerlo a funcionar

`npm run setup` to restart the database
`npm run setup-y` to restart the database without the question
`npm run seed-provider` to create providers
`npm run seed-provider-debug` to create providers with debuger
`npm run seed-products` to create products
`npm run seed-products-debug` to create products with debuger
`npm run seed-all` to create providers and products
`npm run seed-all-debug` to create prpoviders and products with debuger

## INSTALACION DE POSTGRESQL

se debe instalar postgresql de su pagina oficial:
https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

ponerle una contraseña en la instalacion que no olvides
asignarle un puerto o dejarle el que viene por default, en mi caso:
5432

Aqui te abrira un programa llamado: Stack Builder
debes seleccionar el postgres que descargastes ( solo te debe de aparecer una version)
Luego te mostrara una lista:
Categories-->
	Addons, tools and utilities
	...
	...
	Database Server-->
		PostgreSQL (64 bit) vxxx (installed)

Asegurate de seleccionar la que ya tienes instalada y dale a next

luego te pedira instalar denuevo postgresql, aceptas todo y te dara la opcion de abrir denuevo el programa builder, lo deseleccionas y le das en terminar, te pedira reiniciar tu equipo, le das en reiniciar ahora y listo.

Ahora debes abrir el programa 'pgAdmin 4', te pedira contraseña(cada q te pida la contraseña ponle la que pusiste al instalar postgresql que te dije q no olvidaras), doble click a 'Servers' (esta al lado izquierdo) y doble click a 'PostgreSQL 12', listo ahora haremos dos cosas:
1) crearemos un usuario:
Username:
ERPAdmin
Password:
ERPPassword

2) creamos una DB:
Nombre: 'ERP'
ERPAdmin como 'OWNER' de la base da datos 'ERP'

Y listo ahora vamos a shell y en ERP/db ponemos `npm run setup-y` y luego `npm run seed-all` y listo.

**NOTA:** No olvides que siempre que hagas pull debes hacer `npm i` en cada folder que contenga un archivo 'package.json' y en el caso de ssr_server ademas debes actualizar la apikeyToken

comandos del SQL shell:
\dt para mostrar las tablas existentes con su informacion
SELECT * FROM products;