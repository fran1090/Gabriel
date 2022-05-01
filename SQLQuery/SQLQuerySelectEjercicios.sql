if OBJECT_ID('Peliculas') is not null
drop table Peliculas;

create table Peliculas(
titulo varchar(20),
actor varchar(20),
duracion integer,
cantidadDeCopias integer
);

go

exec sp_columns Peliculas;

insert into Peliculas(titulo, actor, duracion, cantidadDeCopias) values('Mision imposible', 'Tom Cruise', 128, 3);

insert into Peliculas(titulo, actor, duracion, cantidadDeCopias) values('Mision imposible 2', 'Tom Cruise', 130, 2);

insert into Peliculas(titulo, actor, duracion, cantidadDeCopias) values('Mujer bonita', 'julia Roberts', 118, 3);

insert into Peliculas(titulo, actor, duracion, cantidadDeCopias) values('Elsa y Fred', 'China Zorilla', 110, 2);

select * from Peliculas;

select titulo, actor from Peliculas;

select titulo, duracion from Peliculas;

Select titulo, cantidadDeCopias from Peliculas;


