#!/usr/bin/bash

#Mise a jour des dependances
apt-get -y update
apt-get -y upgrade
#Installation des paquets python necessaires pour virtualenv
apt-get install -y python3-pip
apt-get install -y python3-venv
#Mise en place de virtualenv
python3 -m venv venv
source ./venv/bin/activate
#Installation d'Ansible et lancement du playbook
pip3 install wheel
pip3 install ansible
pip3 install flask_cors
ansible-galaxy install geerlingguy.pip
ansible-galaxy install geerlingguy.docker
ansible-galaxy install geerlingguy.nodejs
ansible-playbook -i inventory playbook.yaml
npm install -g @angular/cli
