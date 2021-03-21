#! /usr/bin/python3
# coding: utf-8

from sqlalchemy import create_engine
from sqlalchemy import Column, Integer, Text
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    nom = Column(Text)
    prenom = Column(Text)
    email = Column(Text)
    telephone = Column(Text)

    def __init__(self, id=0, fname='Axel', lname='Bleuse', mail='axel.bleuse@test.com', tel='63517356'):
        self.id = id
        self.nom = lname
        self.prenom = fname
        self.email = mail
        self.telephone = tel

    def __str__(self):
        return self.id + " : " + self.nom + " " + self.prenom + " " + self.email + " " + self.telephone


if __name__ == '__main__':
    engine = create_engine('mysql+pymysql://root:root@localhost/db', echo=False)
    Base.metadata.create_all(engine)

