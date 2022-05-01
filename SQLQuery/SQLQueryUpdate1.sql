if OBJECT_ID('agenda') is not null
drop table agenda;

create table agenda(
apellido varchar(30),
nombre varchar(20),
domicilio varchar(30),
telefono varchar(11)
);

go

insert into agenda(apellido, nombre, domicilio, telefono) values('Acosta','Alberto', 'Colon 123', 4234567);

insert into agenda(apellido, nombre, domicilio, telefono) values('Juarez','Juan', 'Avellaneda 135', 4458787);

insert into agenda(apellido, nombre, domicilio, telefono) values('Lopez','Maria', 'Urquiza 333', 4545454);

insert into agenda(apellido, nombre, domicilio, telefono) values('Lopez','Jose', 'Urquiza 333', 4545454);

insert into agenda(apellido, nombre, domicilio, telefono) values('Suarez','Susana', 'Gral. Paz 1234', 4123456);

select * from agenda;

--Modifique el registro cuyo nombre sea 'Juan' por 'Juan Jose' (1 registro afectado)
update agenda set nombre = 'Juan Jose'
where nombre = 'Juan';

select * from agenda;

--Actualice los registros cuyo numero telefonico sea igual a 4545454 por 4445566 (2 registros afectados)
update agenda set telefono = 4445566 
where telefono = 4545454;

select * from agenda;

--Actualice los registros que tengan en el campo 'nombre' el valor 'Juan' por 'Juan Jose'(ningun registro afectado porque ninguno 
--cumple con la condicion del 'where')
update agenda set nombre = 'Juan Jose'
where nombre = 'Juan';

select * from agenda;


--Luego de cada actualizacion ejecute un select que muestre todos los registros de la tabla
