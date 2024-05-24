-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database ProjetoIndividual;

use ProjetoIndividual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(60),
email varchar(50),
senha varchar(20),
fkIdolo int,
foreign key (fkIdolo) references idolo (idIdolo));

create table idolo (
idIdolo int primary key auto_increment,
nomeIdolo varchar(50),
nacionalidade varchar(40),
periodo varchar(45));

create table quiz (
idQuiz int primary key auto_increment,
tentativas int,
corretas int,
erradas int,
pontuacao varchar(45),
fkUsuario int,
foreign key (fkUsuario) references usuario (idUsuario)); 

insert into idolo values
(null, 'Cássio', 'Brasil', '2012-2024'),
(null, 'Sócrates', 'Brasil', '1978-1984'),
(null, 'Marcelinho Carioca', 'Brasil', '1994-2001'),
(null, 'Neto', 'Brasil', '1989-1993 e 1996-1997');