if OBJECT_ID('libros') is not null
drop table libros;

create table libros(
codigo int identity,
titulo varchar(40) not null,
autor varchar(20) default 'Desconocido',
editorial varchar(20),
precio decimal(6,2),
cantidad tinyint default 0,
primary key(codigo)
);

go

insert into libros(titulo, autor, editorial, precio) values('El aleph', 'Borges', 'Emece', 25);

insert into libros values('Java en 10 minutos', 'Mario Molina', 'Siglo XXI', 50.40, 100);

insert into libros(titulo, autor, editorial, precio, cantidad) values('Alicia en el pais de las maravillas', 'Lewis Carroll', 'Emece', 15, 50);

--Mostramos solo los 12 primeros caracteres de los titulos de los libros y sus autores, empleando la funcion "substring()":
select SUBSTRING(titulo, 1, 12) as titulo from libros;

--Mostramos solo los 12 primeros caracteres de los titulos de los libros y sus autores, ahora empleando la funcion "left()":
select LEFT(titulo, 12) as titulo from libros;

--Mostramos los titulos de los libros y sus precios convirtiendo este ultimo a cadena de
--caracteres con un solo decimal, empleando la funcion "str":
select titulo, STR(precio, 6, 1) from libros;

--Mostramos los titulos de los libros y sus precios convirtiendo este ultimo a cadena de
--caracteres especificando un solo argumento:
select titulo, STR(precio) from libros;

--Mostramos los titulos, autores y editoriales de todos los libros,al ultimo
--campo lo queremos en mayusculas:
select titulo, autor, upper(editorial) from libros;