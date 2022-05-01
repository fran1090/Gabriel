if OBJECT_ID('Empleados') is not null
drop table Empleados;

create table Empleados(
nombre varchar(50),
documento varchar(8),
sexo varchar(1),
domicilio varchar(40),
sueldoBasico float
);

exec sp_columns Empleados;

insert into Empleados(nombre, documento, sexo, domicilio, sueldoBasico) values('Juan Perez', 22333444, 'm', 'Sarmiento 123',500);
select * from Empleados;

insert into Empleados(nombre, documento, sexo, domicilio, sueldoBasico) values('Ana Acosta', 24555666, 'f', 'Colon 134', 650);
select * from Empleados;

insert into Empleados(nombre, documento, sexo, domicilio, sueldoBasico) values('Bartolome Barrios', 27888999, 'm', 'Urquiza 479', 800);
select * from Empleados;