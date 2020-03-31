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

es el 'OWNER' de la base da datos 'ERP'
Username:
ERPAdmin
Password:
ERPPassword

comandos del SQL shell:
\dt para mostrar las tablas existentes con su informacion
SELECT * FROM products;