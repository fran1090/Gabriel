if OBJECT_ID ('usuarios') is not null
drop table usuarios;

create table usuarios(
nombre varchar(30),
clave varchar(10)
);

insert into usuarios(nombre, clave) values('ANA','Ana1090')
select * from usuarios;
insert into usuarios (nombre, clave) values('FRAN', 'Fran1981')
select * from usuarios;