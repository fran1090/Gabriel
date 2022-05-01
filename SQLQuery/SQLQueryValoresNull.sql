if OBJECT_ID('libros') is not null
drop table libros;

create table libros(
titulo varchar(30) not null,
autor varchar(30) not null,
editorial varchar(15) null,
precio float
);

go

--Agregamos un registro a la tabla con valor nulo para el campo "precio":
insert into libros(titulo, autor, editorial, precio) values('El aleph', 'Borges', 'Emece', null);

--Ingresamos otro registro, con valor nulo para el campo "editorial":
insert into libros(titulo, autor, editorial, precio) values('Alicia en el pais', 'Lewis Carroll', null, 0);

--Veamos lo que sucede si intentamos ingresar el valor "null" en campos que no lo admiten, como "titulo":
--insert into libros(titulo, autor, editorial, precio) values(null, 'Borges', 'Siglo XXI', 25);

exec sp_columns libros;

--Dijimos que el valor "null" no es lo mismo que una cadena vacia, vamos a ingresar un registro con cadena
-- vacia para el campo "editorial":
insert into libros(titulo, autor, editorial, precio) values('Uno', 'Richard Bach', '', 18.50);

--Ingresamos otro registro, ahora cargamos una cadena vacia en el campo "titulo":
insert into libros(titulo, autor, editorial, precio) values('', 'Richard Bach', 'Planeta', 22);

select * from libros

--Recuperamos los registros que contengan el valor "null" en el campo "precio"
select * from libros
where precio is null;

--La sentencia anterior tendra una salida diferente a la siguiente:
select * from libros
where precio = 0;

--Recuperamos los libros cuyo nombre de editorial es "null":
select * from libros
where editorial is null;

--Ahora veamos los libros cuya editorial almacena una cadena vacia:
select * from libros
where editorial = '';