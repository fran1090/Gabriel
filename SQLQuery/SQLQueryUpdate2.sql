if OBJECT_ID('libros') is not null
drop table libros;

create table libros(
titulo varchar(30),
autor varchar(20),
editorial varchar(15),
precio float
);

insert into libros(titulo, autor, editorial, precio) values('El aleph', 'Borges', 'Emece', 25.00);

insert into libros(titulo, autor, editorial, precio) values('Martin Fierro', 'Jose Hernandez', 'Planeta', 35.50);

insert into libros(titulo, autor, editorial, precio) values('Aprenda PHP', 'Mario Molina', 'Emece', 45.50);

insert into libros(titulo, autor, editorial, precio) values('Cervantes y el Quijote', 'Borges', 'Emece', 25);

insert into libros(titulo, autor, editorial, precio) values('Matematica estas ahi', 'Paenza', 'Siglo XXI', 15);

--Muestre todos los registros (5 registros)
select * from libros;

--Modifique los registros cuyo autor sea igual a 'Paenza', por 'Adrian Paenza' (1 registro afectado)
update libros set autor = 'Adrian Paenza'
where autor = 'Paenza';

select * from libros;

--Nuevamente los registros cuyo autor sea igual a 'Paenza', por 'Adrian Paenza' (mingun registro afectado porque ninguno
--cumple la condicion)
update libros set autor = 'Adrian Paenza'
where autor = 'Paenza';

select * from libros;

--Actualice el precio del libro de 'Mario Molina' a 27 pesos (1 registro afectado)
update libros set precio = 27
where autor = 'Mario Molina';

select * from libros;

--Actualice el valor del campo editorial por 'Emece S.A', para todos los registros cuyo editorial sea igual a 'Emece'
--(3 registros afectados)
update libros set editorial = 'Emece S.A'
where editorial = 'Emece';

select * from libros;

--Luego de cada actualizacion ejecute un select que muestre todos los registros de la tabla



