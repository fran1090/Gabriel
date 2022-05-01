if OBJECT_ID('libros') is not null
drop table libros;

create table libros(
titulo varchar(20),
autor varchar(30),
editorial varchar(25),
precio float
);

go

exec sp_columns libros;

insert into libros(titulo, autor, editorial, precio) values('El aleph','Borges', 'Emece', 24.5);

insert into libros(titulo, autor, editorial, precio) values('Martin Fierro','Jose Hernandez', 'Emece', 16);

insert into libros(titulo, autor, editorial, precio) values('Martin Fierro','Jose Hernandez', 'Planeta', 35.4);

insert into libros(titulo, autor, editorial, precio) values('Aprenda PHP','Mario Molina', 'Siglo XXI', 50.9);

--Seleccionamos los registros cuyo autor sea diferente de 'Jose Hernandez'
select * from libros
where autor <> 'Jose Hernandez';

--Seleccionamos los registros cuyo precio supere los 20 pesos, solo el titulo y precio
select titulo, precio from libros
where precio > 20;

--Recuperamos aquellos libros cuyo precio es menor o igual a 30
select * from libros
where precio <= 30 ;
