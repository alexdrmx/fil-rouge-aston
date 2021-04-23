#!/usr/bin/bash

#Mise a jour des dependances
apt-get -y update
apt-get -y upgrade
#Installation des paquets python necessaires pour virtualenv
apt-get install -y python3-pip
apt-get install -y python3-venv
apt install -y apache2
a2enmod rewrite
a2enmod proxy
a2enmod proxy_http
a2enmod ssl
touch /etc/apache2/sites-available/test.conf
echo "<VirtualHost *:80>" >> /etc/apache2/sites-available/test.conf
echo "ProxyPass / http://localhost:5000/" >> /etc/apache2/sites-available/test.conf
echo "ProxyPassReverse / http://localhost:5000/" >> /etc/apache2/sites-available/test.conf
echo "ProxyRequests On" >> /etc/apache2/sites-available/test.conf
echo "</VirtualHost>" >> /etc/apache2/sites-available/test.conf
a2ensite test
a2dissite 000-default
systemctl reload apache2
systemctl restart apache2
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
