if OBJECT_ID('usuarios') is not null
drop table usuarios;

create table usuarios(
nombre varchar(30),
clave varchar(10)
);

go

exec sp_columns usuarios;

insert into usuarios(nombre, clave) values('Pedro', 'Chueco');

insert into usuarios(nombre, clave) values('Maria', 'Flaca');

insert into usuarios(nombre, clave) values('Lorena', 'Mulata');

insert into usuarios(nombre, clave) values('Morena', 'Flaca');

--Recuperamos el usuario cuyo nombre el "Pedro"
select * from usuarios
where nombre = 'Pedro';

--Recuperamos el nombre de los usuarios cuya clave es "Flaca"
select nombre from usuarios
where clave = 'Flaca';

--Recuperamos el nombre de los usuarios cuya clave es "Loky"

select nombre from usuarios
where clave = 'Loky'