if OBJECT_ID('Peliculas') is not null
drop table Peliculas;

create table Peliculas(
titulo varchar(20),
actor varchar(20),
duracion integer,
cantidad integer
);

go

exec sp_columns Peliculas;

insert into Peliculas(titulo, actor, duracion, cantidad) values('Mision Imposible', 'Tom Cruise', 120, 3);

insert into Peliculas(titulo, actor, duracion, cantidad) values('Mision Imposible 2', 'Tom Cruise', 180, 4);

insert into Peliculas(titulo, actor, duracion, cantidad) values('Mujer Bonita', 'Julia R.', 90, 1);

insert into Peliculas(titulo, actor, duracion, cantidad) values('Elsa y Fred', 'Cnina Zorilla', 80, 2);


--Seleccionamos las Peliculas cuya duracion no supere los 90 minutos (2 registros)
select * from Peliculas
where duracion <= 90;

--Seleccionamos el titulo de todas las peliculas en las que el actor NO sea 'Tom Cruise' (2 registros)
select * from Peliculas
where actor <> 'Tom Cruise';

--Mostramos todos los campos, excepto "duracion", de todas las peliculas de las que haya mas de copias (2 registros)
select titulo, actor, cantidad from Peliculas
where cantidad > 2 ;