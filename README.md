# FIL ROUGE ASTON
###Présentation du projet

"README" est un site **e-commerce** basé sur la vente de livres.  
La partie front est développé par l'intermédiaire de *Angular* (TypeScript / HTML / CSS).  
La partie Back est développée avec *Python Flask*.

### Execution du script d'installation de la machine

````shell
on se met en root
chmod +x install.sh
./install.sh
````
Le script installe donc tous les composants essentiels à la mise en marche de l'application.


### Execution du docker-compose pour le back

````shell
cd api-flask  
docker-compose up -d --build
````
Le docker compose s'occupe donc de télécharger toutes les dépendances nécessaires et de lancer les différents services


### Lancement de l'api Angular
````shell
cd api-angular
npm install
ng serve --host 0.0.0.0 (ou ng serve --open si en local)
````

