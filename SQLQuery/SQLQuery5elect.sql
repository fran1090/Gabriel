--Recuperar algunos campos (select)

--borramos la tabla libros si ya existe
if OBJECT_ID('libros') is not null
drop table libros;

--creamos la tabla libros
create table libros(
titulo varchar(80),
autor varchar(40),
editorial varchar(30),
precio float,
cantidad integer
);

go

--llamamos al procedimiento almacenado sp_ columns(store procedure "Procedimiento Almacenado") para conocer los campos
--de la tabla libros

exec sp_columns libros;

--insertamos varias filas en la tabla libros

insert into libros(titulo, autor, editorial, precio, cantidad) values('ITs', 'Stephen King', 'Kobos', 150, 250);

insert into libros(titulo, autor, editorial, precio, cantidad) values('Misery', 'Stephen King', 'Letter', 210.99, 120);

insert into libros(titulo, autor, editorial, precio, cantidad) values('The Fog', 'Stephen King', 'Letter', 97.50, 28);

--recuperamos todos los datos de la tabla libros
select * from libros;

--recuperamos el titulo, autor, editorial de la tabla libros
select titulo, autor, editorial from libros;

--recuperamos el titulo y el precio
select titulo, precio from libros;

--recuperamos la editorial y la cantidad
select editorial, cantidad from libros;