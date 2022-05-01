if OBJECT_ID('usuarios') is not null
drop table usuarios;

create table usuarios(
nombre varchar(30),
clave varchar(10)
);

go

insert into usuarios(nombre, clave) values('Marcelo','Colorado');

insert into usuarios(nombre, clave) values('Susana','Chapita');

insert into usuarios(nombre, clave) values('Carlos','Loco');

insert into usuarios(nombre, clave) values('Ruben','Loco');

select * from usuarios;

--Eliminamos el registro cuyo nombre de usuario es 'Marcelo'
delete from usuarios
where nombre = 'Marcelo';

select * from usuarios;

--Intentamos eliminarlo nuevamente (no se borra registro)
delete from usuarios
where nombre = 'Marcelo';

select * from usuarios;

--Eliminamos todos los registros cuya clave es 'Loco'
delete from usuarios
where clave = 'Loco';

select * from usuarios;

--Eliminamos todos los registros
delete from usuarios;

select * from usuarios;
