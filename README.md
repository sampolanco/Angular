# Angular
Proyectos de angular

#Crear proyecto
	ng new ejemplosBasicos

#Correr proyecto
	ng serve -o

#Crear componente
	ng generate component header (crea todos los archivos dentro de una carpeta)		
		automaticamente se agrega miComponente a app.module.ts			
		en caso de haber módulo, lo agrega al módulo	
	ng generate component header --skipTests -is (No crea el archivo de pruebas ni el css)
	ng generate module moduloHeader (crea un archivo de tipo módulo para empaquetar varios componentes)			
	ng generate class header							
	ng generate service cliente	 .--flat	No crer dentro de carpeta		
	ng generate pipe myPipe							
	ng generate appRouting --routing

#Crear archivo produccion
	ng build --prod
#Servicios
	Se tiene que agregar en los providers




