if OBJECT_ID('libros') is not null
drop table libros;

create table libros(
titulo varchar(80),
autor varchar(40),
editorial varchar(30),
precio float,
cantidad integer
);

exec sp_columns libros;

insert into libros(titulo, autor, editorial, precio, cantidad) values('ITs', 'Stephen King', 'Kobos', 150, 250);
select * from libros;

insert into libros(titulo, autor, editorial, precio, cantidad) values('Misery', 'Stephen King', 'Letter', 210.99, 120);
select * from libros;

insert into libros(titulo, autor, editorial, precio, cantidad) values('The Fog', 'Stephen King', 'Letter', 97.50, 28);
select * from libros;