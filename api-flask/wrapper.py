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

    MYSQL_HOST = "db"
    MYSQL_PORT = 3306
    MYSQL_USER = "root"
    MYSQL_PWD = "root"
    MYSQL_DB = "users"

    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://{}:{}@{}:{}/{}".format(MYSQL_USER,
                                                                      MYSQL_PWD,
                                                                      MYSQL_HOST,
                                                                      MYSQL_PORT,
                                                                      MYSQL_DB)

    engine = create_engine(SQLALCHEMY_DATABASE_URI, echo=False)
    Base.metadata.create_all(engine)

