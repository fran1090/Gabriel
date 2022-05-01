if OBJECT_ID('agenda') is not null
drop table agenda;

create table agenda(
apellido varchar(30),
nombre varchar(20),
domicilio varchar(30),
telefono varchar(11)
);

go

insert into agenda(apellido, nombre, domicilio, telefono) values('Alvarez','Alberto', 'Colon 123', 4234567);

insert into agenda(apellido, nombre, domicilio, telefono) values('Juarez','Juan', 'Avellaneda 135', 4458787);

insert into agenda(apellido, nombre, domicilio, telefono) values('Lopez','Maria', 'Urquiza 333', 4545454);

insert into agenda(apellido, nombre, domicilio, telefono) values('Lopez','Jose', 'Urquiza 333', 4545454);

insert into agenda(apellido, nombre, domicilio, telefono) values('Salas','Susana', 'Gral. Paz 1234', 4123456);

select * from usuarios;

--Eliminamos el registro cuyo nombre es 'Juan'
delete from agenda
where nombre = 'Juan';

select * from agenda;

--Eliminamos los registros cuyo numero telefonico sea igual a 4545454 (no se borra registro)
delete from agenda
where telefono = 4545454;

select * from agenda;

--Eliminamos todos los registros
delete from agenda;

select * from agenda;