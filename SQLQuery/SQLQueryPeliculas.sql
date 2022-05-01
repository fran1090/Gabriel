if OBJECT_ID('Peliculas') is not null
drop table Peliculas;

create table Peliculas(
nombre varchar(50),
actor varchar(50),
duracion integer,
cantidadDeCopias integer
);

exec sp_columns Peliculas;

insert into Peliculas(nombre, actor, duracion, cantidadDeCopias) values('Mision imposible', 'Tom Cruise', 128, 3);
select * from Peliculas;

insert into Peliculas(nombre, actor, duracion, cantidadDeCopias) values('Mision imposible 2', 'Tom Cruise', 130, 2);
select * from Peliculas;

insert into Peliculas(nombre, actor, duracion, cantidadDeCopias) values('Mujer bonita', 'julia Roberts', 118, 3);
select * from Peliculas;

insert into Peliculas(nombre, actor, duracion, cantidadDeCopias) values('Elsa y Fred', 'China Zorilla ', 110, 2);
select * from Peliculas;