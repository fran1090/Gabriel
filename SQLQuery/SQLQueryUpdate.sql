if OBJECT_ID('usuarios') is not null
drop table usuarios;

create table usuarios(
nombre varchar(20),
clave varchar(10)
);

go

insert into usuarios (nombre, clave) values ('Marcelo','River');

insert into usuarios (nombre, clave) values ('Susana','Chapita');

insert into usuarios (nombre, clave) values ('CarlosFuentes','Boca');

insert into usuarios (nombre, clave) values ('FedericoLopez','Boca');


select * from usuarios;

update usuarios set clave = 'RealMadrid';

select * from usuarios;


update usuarios set clave = 'Boca'
where nombre = 'FedericoLopez';

select * from usuarios;


update usuarios set clave = 'Payaso'
where nombre = 'JuanaJuarez';

select * from usuarios;


update usuarios set nombre = 'MarceloDuarte', clave = 'Marce'
where nombre = 'Marcelo';

select * from usuarios;