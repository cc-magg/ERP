#Instalacion de GIT
Instala Git como en el tutorial de Platzi [Instalando Git y GitBash en Windows](https://platzi.com/clases/1557-git-github/19933-instalando-gitbash-en-windows/).

#GITBASH
Abre **_Gitbash.exe_**
##Comandos Basicos
`$  cd /<direccion>` es para acceder a una carpeta, ejemplo: `$  cd /c/wamp64/www/ERP`

`$  ls` es para ver que archivos se encuentran en una direccion (suplanta al dir de windows)

- `$  ls -a` muestra **absolutamente** todos los archivos, incluso los que estan ocultos
- `$  ls -l` muestra los archivos pero en lista, no en linea
- `$ ls -al` suplanta al dir de windows
    

##Comandos Git
-  `$  git init` es para inicilizar un repositorio local, se debe usar en la carpeta principal del proyecto ejemplo: `$  cd /c/wamp64/www/ERP` y luego si `$  git init`.

Si hicieramos un commit ahora mismo, y procedieramos a ver el log de los [commits](https://github.com/pandao/editor.md "commits"), nos mostraria que el usuario que hizo el commit con un correo default de windows, para corregir esto debemos **configurar git** de la sigueinte manera:	

- `$  git config --global user.name "<nombre del programador de este equipo>"`
ejemplo: ` $  git config --global user.name "Carlos Arturo Galvan Grajales"`
- `$  git config --global user.email "<email del programador de este equipo>"`
ejemplo: ` $  git config --global user.email "carlos13arturo09@gmail.com"`
**Nota**: el email debe de ser el mismo email que tenemos registrado en nuestra cuenta de la pag de Github.

Y listo ya con eso queda configurado el Git, y si llegas a necesitar camabiar esa configuracion, unicamente debes poner los mismo comandos pero con las variables que necesitas.

Ahora ya podemos continuar aprendiendo todos los otros comandos:

- `$  git status` es para ver el estado de git conforme a ese proyecto.

- `$  git add <archivo a agregar al staging>` es para agregar archivos al <abbr title="Espacio en memoria temporal en el que se guarda la informacion pendiente a hacer commit">Staging</abbr>, ejemplo: `$  git add archivo.txt`.

- `$  git rm --cached <archivo>` ejemplo: `$  git rm --cached historia.txt` es para remover de la lista de pendientes a agregar al respositorio (<abbr title="Espacio en memoria temporal en el que se guarda la informacion pendiente a hacer commit">Staging</abbr>), ya con esto podemos darle a `$  git status` para ver que denuevo esta en rojo y ya habremos quitado el git add que le hicimos a ese archivo antes.

- `$  git rm --force <archivo>` elimina los archivos de Git (respositorio y Staging) y del disco duro. Git siempre guarda todo, por lo que podemos acceder al registro de la existencia de los archivos, de modo que podremos recuperarlos si es necesario (pero debemos usar comandos más avanzados).

- `$  git commit -m "<mensaje>"` es para guardar los cambios de staging en el repositorio local (tu computadora, pero en git se llama repositorio local).


####Para guardar un archivo que fue modificado o creado:
1. `$  git status`
2. `$  git add .` es para guardar **TODOS** los archivos en staging (ram).
2.1 `$  git add <archivo>` es para guardar unicamente un archivo en staging.
3. `$  git commit -m "<mensaje>"` es para guardar todos los archivos a los que le hicimos add en el repositorio.
3.1 `$  git commit -am "<mensaje>"` es para guardar sin la necesidad de hacer el `$  git add` **pero** este comando unicamente funciona si al archivo ya se le hizo al inicio un add, osea si apenas creaste el archivo, debes hacerle `$  git add <archivo>` y ya cuando lo edites, ahi si puedes usar este comando sin el add.
4.  `$  git log` es para ver todos los commits que se han hecho.
4.1 `$  git log --stat` para ver los archivos que se modificaron o agregaron en cada commit que se haya creado, para salir de esta opcion presiona la tecla Q.
4.2 `$  git log <archivo>` es para ver todos los commits sobre un unico archivo ejemplo: `$  git log README.md`.
4.3 `$  git log -s "<palabra>"` retorna todos los commits en los que la `<palabra>` tenga algo que ver, se puede usar para buscar todos los commits que modificaran el `footer` o algo asi.

- `$  git show` es los mismo que `$  git log`  pero muestra unicamente la informacion del ultimo commit creado. Tambien muestra mas detalles  que el git log al punto de mostrar que lineas de codigo se modificaron o crearon en ese commit con colores, las lineas en color blanco son las que no se cambiaron, las de color rojo son las que se cambiaron por las de color verde.

- `$  git show <codigo de commit>` es lo mismo que `$  git log <archivo>` pero mostrando mas detalle como `$  git show`.

- `$  git diff <codigo de commit mas viejo> <codigo de commit mas nuevo>` es para ver la diferencia entre 2 commits.

- `$  git diff` es para comparar lo que tenemos en memoria ram (Staging) contra lo que tenemos en el disco duro.

####RESET
Para volver a un commit anterior del proyecto:
- `$  git reset --soft` Borramos todo el historial y los registros de Git pero guardamos los cambios que tengamos en Staging, así podemos aplicar las últimas actualizaciones a un nuevo commit.
Entonces en el **caso** de que tenemos todo bien hasta el commit X pero todos commits que estan despues del commit X estan mal (todos esos commits tienen errores) aun que ya lo note y arregle todo el codigo, ahora para borrar todos los commits que quedaron mal (los commits desde el commit X hasta el ultimo) procedo a:
1. `$  git add .` Agrego todo el codigo bueno (el que acabe de corregir) a Staging
2. `$  git reflog` este nos lanza una lista de todos los commits que se han hecho, aqui buscamos el commit X y copiamos su codigo
3. `$  git reset <codigo del commit X>` con este paso ya borramos todos los commits que habian despues del commit X **SIN** borrar lo que tenemos en Staging (en Staging tenemos agregado el codigo que arreglamos y le hizimos `$  git add .` en el paso 1), este tambien se conoce como `git reset --soft`
4. `$  git commit -m "<mensaje>"` y listo con esto quedaron borrados todos los commits malos y dejamos unicamente los commits que nos sirven.

- `$  git reset --hard` Borra todo. Todo todito, absolutamente todo. Toda la información de los commits y del área de staging se borra del historial.
`$  git reset <codigo de commit al que queremos volver> --hard` es para que borre todo lo que esta despues de ese codigo de commit que estamos ingresando (borra incluso lo que tengamos en git add (Staging).

- `$  git reset HEAD` Este es el comando para sacar archivos del área de Staging. No para borrarlos ni nada de eso, solo para que los últimos cambios de estos archivos no se envíen al último commit, a menos que cambiemos de opinión y los incluyamos de nuevo en staging con git add, por supuesto.
`$  git reset HEAD <archivo>` lo que hace es quitarlo del estado de preparado, es decir cuando hace un "git add index.php" se queda en verde (preparado para el commit), esta comando lo deja en el estado anterior al “git add” es decir, se le esta haciendo el seguimiento esta modificado pero no preparado para el commit…
A diferencia del `$  git rm <archivo>` que explicamos antes, el git rm remueve el archivo del Staging y ademas lo remueve del seguimiento de Git osea dejamos el archivo como si fuera nuevo o recien lo hubieramos creado para la vista de Git, pero `$  git reset HEAD <archivo>` remueve el archivo del Staging sin quitarle el seguimiento que Git le esta haciendo (lo deja como si existiera desde hace rato pero lo quita de Staging)

####Para ver un archivo que teniamos en un commit anterior:
primero verificamos que no tengamos nada para agregar y si tenemos lo guardamos con git add y git commit...

1. `$  git checkout <codigo del commit anterior> <archivo>` con esto volvemos a la version anterior unicamente el archivo seleccionado.
2. `$  git status` me muestra que el archivo que volvimos a la version anterior esta listo para ser guardado con un commit, pero como no queremos guardarlo sino unicamente ver que contenia antes.
3. `$  git checkout master <archivo>` y ya con esto volvemos a actualizar el archivo al que teniamos en el ultimo commit en master.
4. `$  git status`

Y ya verificamos que no tenemos nada mas para agregar.

####Para ver un archivo que teniamos en un commit anterior y dejarlo guardado en el commmit actual de master:
Es como el anterior pero hacemos commit apenas tengamos el checkou listo:
1. `$  git checkout <codigo del commit anterior> <archivo>`
2. `$  git status`
3. `$  git add .`
4. `$  git commit -m "<mensaje>"`

####PARA CREAR OTRA RAMA:
1. verifica que no haya nada en staging con `$  git status` (si hay algo y aun asi hacemos el chekout a otra rama, se perderia lo que tenemos sin agregar a commit).
2. `$  git branch <nombre de rama>` ejemplo: `$  git branch developer` para crear la nueva rama.
3. `$  git checkout <nombre de la rama a usar>` ejemplo: `$  git checkout developer` con esto nos movemos a la rama nueva para usarla, al hacer esto, cambia todo lo que tenemos en el directorio de trabajo y el repositorio local.
4. `$  git branch` es para verificar que ramas existen.
4.1 `$  git branch -a`  es para ver absolutamente todas las ramasexistentes, incluso las del servidor remoto (Github).
4.2 `$  git branch -r` es para ver unicamente todas las ramas del github).

Para borrar alguna rama es:
- `$  git branch -D <nombre de la rama a borrar>`


####PARA UNIR LAS 2 RAMAS, DEVELOPER Y MASTER:
Primero debemos asegurarnos que no haya ningun cambio pendiente por guardar con `$  git status` en ambas ramas y luego:
1.  debemos posicionarnos en la rama master con `$  git checkout master`.
2. `$  git merge <rama>` es para fucionar dos ramas, ejemplo: `$  git merge developer`
con ese comando nos pedira que le agregemos un mensaje, escribimos el mensaje y presionamos esc+shif+z+z
3. verificamos con `$  git log` para ver los commits y listo, ahora si volvemos a la rama developer con...
4. `$  git checkout developer` con esto podemos ver que no esta actualizada la rama developer con lo que tiene la rama master ya que lo unico que hicimos fue agregarle a la rama master lo que tenia la rama developer, ahora nos falta actualizar lar rama developer entonces necesitamos agregar lo que tenga la rama master a la rama developer, esto lo hacemos con el mismo merge que hicimos en el punto 2 pero invertido, osea desde la rama developer ponemos...
5. `$  git merge master`
6. Si hay errores de conflicto, los debemos de resolver y luego dar `$  git status` y hacer el proceso de `$  git add .` y `$  git commit`.

##Cuenta de  github
Ahora creamos una cuenta de GITHUB y la conectamos con el computador que tenemos segun el tutorial de platzi [Uso de GitHub](https://platzi.com/clases/1557-git-github/19942-uso-de-github/).

####PARA CREAR UNA CLAVE SSH (en tu equipo con Gitbash):
**NOTA**: Debe ser una llave ssh por computador, si tienes 3 portatiles pues debes tener 3 diferentes llaves ssh.
en git nos vamos a la carpeta en la que esta instalado git con los comandos:
- `$  cd ..`
- `$  cd /c`

luego ponemos:
- `$  ssh-keygen -t rsa -b 4096 -C "<tu email de github>"` ejemplo: `$  ssh-keygen -t rsa -b 4096 -C "cagalvangrajales@gmail.com"`.

Luego nos pide una direccion pero le dejamos la que pone por default en: `c/users/<nombre de usuario de tu equipo>/.ssh/id_rsa` ej: en mi caso fue: `/c/users/HP/.ssh/id_rsa`.

Luego nos pedira una contraseña, ponle una y **dejala guardada**, no la pierdas!, yo puse una que siempre pongo.

Ahora vamos a la direccion donde creo las llaves, en mi caso fue: `C:\Users\HP\.ssh` y abrimos la llave publica(la que termina en .pub) con _visual studio code_, copiamos la llave publica y vamos a _Github_.
En mi caso mi llave publica fue: 

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCYJINB8cdIDc6/9OHPxS/vaodmqZVcN9wKeAVVpg1F7PXEBn9ko0Xs/DQRGHaQna8R2A9YrIUUEZC+3KkOpJpEQoBh5xi2r/jZ7zs1W4i9hjVTl62ojWapSsEA+WapD/Ye7qVt4Kl+n1hSt+CWI9G9pW0WJ6kADLogd7IOTX1bJAcCQE96xMRPfiBQftWy9gSqQ37UN+60HCmhEq7qltrNksjXdMcXo0/bCEzt25ZExTL1UF5T9m+K6LF6tZ6gjcaMSI1n80Cxzqu1rhPLG4fULOZJK5535w8cgvauyfJezGRVnDr9flKxS6tG7vYx7CUfQi6+aNEXbYihQpn2xUJNZeGD7frzgMnDd6s2AQLA1yq2Jx8/2Fp18KqG0IYyXmekpozf67fRFQJfAEELm7TPdnNWbYdT1hf9kIlgDkWsc6oNb1zWTUQhxdeAzp7HICHuRqLDLKg0wf4O84UZcWyg/ftPtATSrS9UJyX/QQUIG82mGsX1O2XE+o+ADVF5w4d26jxDZs16iKv4eiWABz0jxCV6znrU+FS4MwwkI9W5PjA+YQ+MSXRvxmJjM3I/9AIFZjTgfPlVloZx60qJmNCurTzj39idmPKXibwUZ+ob8GH6i2BolE6IeOdgD/0Ayb4wrLRES0NNWnkIm6rLK0OGmEIzrl1RoxsdlIRkB8VUsw== cagalvangrajales@gmail.com

AHORA en **windows**:
Debemos verificar que windows tenga el programa que hace funcionar las llaves de nuestro computador, en el Gitbash ponemos: 
- `$  eval $(ssh-agent -s)`
Esto nos debe de retornar algo como: Agent pid 1874 lo que quiere decir que el proceso de las llaves ssh si esta funcionando.

Ahora vamos a decirle a windows que la llave que creamos existe, desde Gitbash:
- `$  cd ~` es para ingresar al directorio del usuario del disco local C, para ver que direccion contiene `~` unicamente ponemos: `$ ~` en gitbash y eso imprimira que direccion significa.
- `$  ls -al`
- `$  ssh-add ~/.ssh/id_rsa` es para informarle a windows donde esta la llave ssh que ya creamos con el video de Platzi de mas arriba. Nos va a pedir la contraseña que te dije que guardaras, la pones y listo ya procedemos a guardar la llave publica en tu cuenta de Github.

####Para conectar tu Git a tu cuenta de Github una vez ya tienes la llave publica SSH en tu equipo:
Para poner la llave publica en tu perfil de github, sigue el tutorial de platzi [Conexión a GitHub con SSH](https://platzi.com/clases/1557-git-github/19951-conexion-a-github-con-ssh/).
####Creacion de la conexion entre Git y Github despues de poner llave SSH en Github
Ahora para conectarnos el repositorio local con el de github debemos seguir el tutorial de platzi [Uso de GitHub](https://platzi.com/clases/1557-git-github/19942-uso-de-github/).
Ahora una vez tengamos copiada la llave HTTPS del proyecto de Github (en mi caso: **https://github.com/cc-magg/ERP.git**) y vamos a Gitbash:
- Primero nos aseguramos de estar en la url del proyecto (en mi caso: **/c/wamp64/www/ERP**) y en la rama master e ingresamos..
- `$  git remote add origin <llave https>` ejemplo: `$  git remote add origin https://github.com/cc-magg/ERP.git` ahora podemos verificar que se creo con...
- `$  git remote` y debe de estar origin creado
- `$  git remote -v` y deben haber 2 creados, el fech y el push con la url de la llave https.
- Ahora despues de copiar la SSH (no la HTTPS sino la SSH) del proyecto desde github (en mi caso es: **git@github.com:cc-magg/ERP.git**) ponemos en gitbash en mi caso con mi llave ssh de github...
- `$  git remote set-url origin git@github.com:cc-magg/ERP.git`
Ahora para verificar ponemos...
- `$  git remote -v` y eso nos debe de mostrar los dos fech y push pero ahora no tienen una url de la llave http de antes sino que deben de tener la llave ssh.

Y listo ya deberiamos tener todo conectado para proceder a relizar pull y push.

##Push y Pull
Ahora debemos hacer pull antes de hacer push al origin que recien creamos, pero antes de eso verificamos que tengamos en github asi sea un README.md (para crear un README.md bonito, entra a esta pag para crearlo: https://pandao.github.io/editor.md/en.html), si no lo tienes pues lo creas para que el proyecto no este vacio y poder hacer pull, una vez que tengas algun archivo en github hacemos el pull:
- `$  git push origin master`
si es la primera vez nos preguntara si estamos seguros, le escribes `$  yes` y ahora nos tirara un error asi:
`fatal: refusing to merge unrelated histories`
para solucionar esto ingresamos....
- `$  git pull origin master --allow-unrelated-histories`, esto es unicamente por ser la priemra vez.

##Graficos y Alias para los commits
- `$  git log --all --graph --decorate --oneline` Para ver el historial de commits (normalmente es con `$  git log`) de manera decorada y mas entendible:

Pero el comando es muy largo, entonces para evitar escribir esto tan largo cada que queramos ver el historial de commits, lo guardamos en un alias:
- `$  alias arbol="git log --all --graph --decorate --oneline" >> .bashrc` asi unicamente escribes en Gitbash...
- `$  arbol` y ya tienes el comando abreviado.
- O tambien puedes poner gitk para ver todos los commits mejor acomodados graficamente
- O tambien con esta pag: https://www.sourcetreeapp.com/ que se puede conectar con github online o tambien descargado en windows o mac

##Tags para manejar las versiones del proyecto
1. Debemos ver todos los commits con `$  git logs` o  `$  arbol` (el alias que cremaos arriba) en Gitbash.
2. buscamos cual de los comits se podrian considerar la primera version o v0.1.0 y copiamos su codigo de commit
3. le asignamos el tag de version 0.1.0 al commit que encontramos con: `$  git tag -a <nombre del tag> -m "<mensaje>" <codigo del commit>` ejemplo: `$  git tag -a v0.1.0 -m "api-server y ssr-server con autenticacion jwt y google-oauth" bea614a`.

Para saber que tags existen:
- `$  git tag`
- `$  git show-ref --tags` esto mostrara una referencia al codigo de commit al que esta atado ese tag mas no es igual al codigo de commit.

##Tags en Github
Ahora queremos mandar ese tag a github para que todos lo vean:
- `$  git status`
- `$  git pull origin master`
- `$  git push origin --tags` es para enviar unicamente los tags al repositorio remoto origin.

y ya con esto en github, en el proyecto donde pone las ramas para cambiarlas tambien esta la opcion de tags, lo abrimos y muestra los tags que le hayamos mandado, y si le damos click nos mostrara esa version del proyecto.

Si queremos borrar un tag, se borra asi en gitbash:
- `$  git status`
- `$  git tag` para ver el nombre del tag y escribirlo bien en el proximo comando
- `$  git tag -d <nombre del tag a borrar>`
- `$  git pull origin master`
- `$  git push origin --tags` con esto ya se borra pero el queda aun asi en Github por lo que tenemos que poner otra linea en Gitbash.
- `$  git push origin :refs/tags/<nombre del tag a borrar>`

Para ver los tags y los commits mas graficamente puedes usar el alias `$  arbol` que creamos antes o en Gitbash tambn puedes poner `$  gitk` para ver los commits en una interfaz grafica.

##Trabajando con mas personas:
Para trabajar con mas personas ellos deben perimero ser aceptados como con **colaboradores** o ser dueños en el proyecto, y luego si:

- En Gitbash en el directorio en el que tienes tu proyecto ya avanzado y quieres unirlo con lo que ellos tienen en github pones...
- `$  git clone <url>` en mi caso: `$  git clone https://github.com/cc-magg/ERP.git` al hacer esto se crearia una carpeta llamada ERP dentro de tu proyecto con todo dentro de ella.

####Manejo de bugs:
SI llegaramos a encontrar un bug lo resolveriamos creando una nueva rama en el repositorio local para solucionar el bug.

Pero si no queremos que las personas del origin sepan o se enteren que fue un bug lo que se arreglo (la unica manera de saberlo sin leer codigo es viendo como se llama la rama que realizo el commit que corregia el error) entonces tenemos que hacer un `rebase`, para mas informacion en el tutorial de platzi [Git Rebase: Reorganizando el trabajo realizado](https://platzi.com/clases/1557-git-github/19975-git-rebase-reorganizando-el-trabajo-realizado/).


####Stash
Si por ejemplo estas trabajando en un experimento pero si o si debes rivisar como tenias el codigo en el ultimo commit (antes de comenzar el experimento) pero ya llevas muy avanzado el codigo y aun no lo has terminado como para hacer commit y devolverte a mirar como lo tenias, entonces debes usar:
- `$  git stash` este codigo te creara como un tipo de commit temporal de lo que has hecho desde el ultimo commit y te devolvera el codigo a como lo tenias en el ultimo commit asi ya puedes revisar el codigo que necesitabas revisar (incluso si necesitabas revisar codigo de otra rama).
- `$  git stash list` para listar los stash temporales guardados
aqui podemos ir a otras ramas con `$  git checkout <nombre de rama>` o ver cualquier otro codigo.
- `$  git stash pop` para volver a poner el codigo del experimento.

**si el codigo del experimento resulto exitoso** podemos incluso ponerlo en una nueva rama para luego hacerle commit a la nueva rama asi:
- `$  git stash`
- `$  git stash list`
- `$  git stash branch <nombre de la rama nueva que tendra todo el codigo del experimento>`  y listo.
- `$  git branch` aqui podemos ver que todo ese codigo esta unicamente en la nueva rama, faltaria en esa nueva rama hacer el `$  git add .` y `$  git commit` para que ya quede guardado como commit.

**si el codigo del experimento fuese un fracaso**, entonces queremos es borrarlo, para esto:
- `$  git stash`
- `$  git stash list`
- `$  git stash drop`
- `$  git status`

Y listo vemos que ya borramos todo y quedamos en el ultimo commit que realizamos.

####Amend
Para los casos en los que localmente hacemos un commit y luego vemos que nos falto hacer algo en ese commit O tambien para los casos en los que querramos correguir el nombre del ultimo commit, usamos:
- `$  git commit --amend`

Obviamente antes de poner el comando debemos hacer los cambios que nos haya faltado por hacer o en caso de unicamente querar cambiar el nombre, unicamente ponemos el comando y de inmediato nos pedira que pongamos el nombre o mensaje del commit, esto pegara todos los cambio del commit amend al commit anterior y no dejara 2 commits ni rastro de que fueron 2 commits.

####Blame
- `$  blame <archivo>` ejemplo: `$  blame README.md`, es para ver quien edito o creo que parte de ese archivo linea a linea de codigo.

##Reset
**EN CASO DE QUE HALLA UN ERROR y que tengamos si o si volver todo a un commit que sepamos que todo funcionaba** debemos usar:
- `$  git reflog` este nos lanza una lista de todos los commits que se han hecho, aqui debemos elegir el commit que sepamos que funcionaba y copiar su codigo de commit.
- `$  git reset --HARD <codigo de commit al que queremos volver>` con esto volvemos al commit que hallamos seleccionado, incluso creando denuevo ramas que hayamos borrado o cualquier cosa, literalmente cualquier cosa, aqui entra el dicho, git nunca olvida.
