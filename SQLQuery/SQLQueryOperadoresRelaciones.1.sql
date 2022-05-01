if OBJECT_ID('Articulos') is not null
drop table Articulos;

create table Articulos(
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

--Seleccionamos los datos de las impresoras (2 registros)
select * from Articulos
where nombre = 'Impresora';

--Seleccionamos los articulos cuyo precio sea mayor o igual a 400 (3 registros)
select * from Articulos
where precio >= 400;

--Seleccionamos el codigo y nombre de los articulos cuyo cantidad sea menor a 30 (2 registros)
select codigo, nombre from Articulos
where cantidad < 30 ;

--Seleccionamos el nombre y descripcion de los articulos que NO cuesten 100 (4 registros)
select nombre, descripcion from Articulos
where precio <> 100;
