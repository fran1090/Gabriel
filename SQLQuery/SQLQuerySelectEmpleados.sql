if OBJECT_ID('Empleados' ) is not null
drop table Empleados;

create table Empleados(
nombre varchar(20),
documento varchar(8),
sexo varchar(1),
domicilio varchar(30),
sueldoBasico float
);

go

exec sp_columns Empleados;

insert into Empleados(nombre, documento, sexo, domicilio, sueldoBasico) values('Pepe Novoa', 7123456, 'm', 'las heras 123', 5000);

insert into Empleados(nombre, documento, sexo, domicilio, sueldoBasico) values('Diego Diaz', 20234567, 'm', 'las hortigas 678', 2450.99);

insert into Empleados(nombre, documento, sexo, domicilio, sueldoBasico) values('Lorena Boby', 25456789, 'f', 'macarena 2341', 23000);

select * from Empleados;

select nombre, documento, domicilio from Empleados;

select documento, sexo, sueldoBasico from Empleados;
