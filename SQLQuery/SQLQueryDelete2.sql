if OBJECT_ID('agenda') is not null
drop table agenda;

create table agenda(
codigo integer,
nombre varchar(20),
descripcion varchar(30),
precio float,
cantidad integer
);

go

exec sp_columns Articulos;

insert into Articulos(codigo, nombre, descripcion, precio, cantidad) values(1,'Impresora', 'Epson Stylus C45', 400.8, 20);

insert into Articulos(codigo, nombre, descripcion, precio, cantidad) values(2,'Impresora', 'Epson Stylus C85', 500, 30);

insert into Articulos(codigo, nombre, descripcion, precio, cantidad) values(3,'Monitor', 'Samsung 14', 800, 10);

insert into Articulos(codigo, nombre, descripcion, precio, cantidad) values(4,'Teclado', 'Ingles Biswal', 100, 50);

insert into Articulos(codigo, nombre, descripcion, precio, cantidad) values(5,'Teclado', 'Español Biswal', 90, 50);

--Elimine los articulos cuyo precio sea mayor o igual a 500 (2 registros)
delete from Articulos
where precio >= 500;

select * from Articulos;

--Elimine todas las impresoras (1 registro)
delete from Articulos
where nombre = 'Impresora';

select * from Articulos;

--Elimine todos los articulos cuyo codigo sea diferente a 4 (1 registro)
delete from Articulos
where codigo <> 4 ;

select * from Articulos;

--Mostrar la tabla despues que borrar cada registro
delete from Articulos;

select * from Articulos;

