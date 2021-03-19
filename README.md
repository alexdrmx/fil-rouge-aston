# FIL ROUGE ASTON

**MISE EN PLACE DES UTILISATEURS ET GROUPES**
```shell
sudo addgroup devs  #Permet la création du groupe
sudo useradd -m -p azerty1 alexandre #Permet la création des utilisateurs avec l'identifiant et le mot de passe
sudo useradd -m -p azerty2 melanie
sudo useradd -m -p azerty3 axel
sudo adduser alexandre devs #Permet l'ajout d'un utilisateur dans le groupe "devs"
sudo adduser alexandre sudo #Permet l'ajout de l'utilisateur au groupe sudo , octroyant les permissions sudo
sudo adduser melanie devs
sudo adduser melanie sudo
sudo adduser axel devs
sudo adduser axel sudo
```
**MISE EN PLACE DE L'ENVIRONNEMENT**
```shell
sudo apt -y update  #Mise à jour des applications existantes
sudo apt -y install git wget #Installation git
sudo apt -y install htop iotop iftop #Installation de htop
sudo apt -y install python3 #Installation de Python3
sudo apt-get update #Mise à jour de apt-get
sudo apt-get remove docker docker-engine docker.io #Suppresion de l'ancienne version de docker si existante
sudo apt install docker.io  #Installation de la dernière version de docker
sudo systemctl start docker #Mise en route du service docker
sudo systemctl enable docker
```
```shell
ng serve
```

