if OBJECT_ID('libros') is not null
drop table libros;

create table libros(
codigo int identity,
titulo varchar(40) not null,
autor varchar(20) default 'Desconocido',
editorial varchar(20),
precio decimal(6, 2),
primary key(codigo)
);

go

insert into libros(titulo, autor, editorial, precio) values('El aleph', 'Borges', 'Emece', 25.33);

insert into libros values('Java en 10 minutos', 'Mario Molina', 'Siglo XXI', 50.65);

insert into libros(titulo, autor, editorial, precio) values('Alicia en el pais de las maravaillas', 'Lewis Carroll', 'Emece', 19.95);

--Vamos a mostrar los precios de los libros redondeando el valor hacia abajo y hacia arriba:
select titulo, autor,precio, FLOOR(precio) as abajo, CEILING(precio) as arriba from libros;