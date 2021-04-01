#!/usr/bin/bash

#Mise a jour des dependances
apt-get -y update
apt-get -y upgrade
#Installation des paquets python necessaires pour virtualenv
apt-get install python3-pip
apt-get install python3-venv
#Mise en place de virtualenv
python3 -m venv venv
source /venv/bin/activate
#Installation d'Ansible et lancement du playbook
pip3 install wheel
pip3 install ansible
ansible-playbook -i inventory playbook.yaml
