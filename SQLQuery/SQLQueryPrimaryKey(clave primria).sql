if OBJECT_ID('usuarios') is not null
drop table usuarios;

create table usuarios(
nombre varchar(20),
clave varchar(10),
primary key(nombre)
);

go

exec sp_columns usuarios;

insert into usuarios(nombre, clave) values('JuanPerez', 'Boca');

insert into usuarios(nombre, clave) values('RaulGarcia', 'River');

--Intentamos ingresar un valor de clave primaria existente (genera error):
--insert into usuarios(nombre, clave) values('JuanPerez', 'Payaso');

--Intentamos ingresar el valor "null" en el campo clave primaria (genera error):
--insert into usuarios(nombre, clave) values(null, 'Payaso');

--Intentamos actualizar el nombre de un usuario colocando un nombre existente (genera error):
--update usuarios set nombre = 'JuanPerez'
--where nombre = 'RaulGarcia';

select * from usuarios;