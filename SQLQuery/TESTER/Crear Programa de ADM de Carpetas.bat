@echo off
title Administracion de carpetas
color b
:cero
echo 1.Crear Carpetas
echo 2.Ocultar Carpetas
echo 3.Mostrar Carpetas
echo 4.Salir
set/p a=Que desea hacer?=
if %a%==1 (goto :1)
if %a%==2 (goto :2)
if %a%==3 (goto :3)
if %a%==4 (exit)

:1
set/p carpeta=Que nombre desea para su carpeta?=
md %carpeta%
set/p esconder=Desea ocultar su carpeta ahora?=
if %esconder%==si (attrib +h %carpeta% & msg * carpeta oculta) else msg * carpeta No oculta
cls
goto cero
:2
set/p nombre=Nombre de la carpeta que desea ocultar=
attrib +h %nombre%
msg * Carpeta Oculta
:3
set/p recuperar=Nombre de la carpeta que desea recuperar?=
if exist %recuperar% (set/p pass= Cual es la contraseña) else msg * La carpeta No existe  goto cero
if %pass%==1234 ( attrib -h %recuperar% & msg * Carpeta recuperada) else msg * Carpeta No recuperada
cls
goto cero
