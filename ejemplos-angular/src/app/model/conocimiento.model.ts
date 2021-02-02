export interface ConocimientoModelInterface{
  id: number;
  nombre:string;
  isLanguage:boolean;
  isDataBase:boolean;
  nivel: string;
  rutaImagen:string;
  descripciones:string[];
  descripcionAlterna: string;
}

export class ConocimientoModel {
  getConocimientoList=function():ConocimientoModelInterface[]
  {
    return this.conocimientoList;
  };

  private conocimientoList:ConocimientoModelInterface[]= [
          {
            id: 1,
            nombre:'Java',
            isLanguage:true,
            isDataBase:false,
            nivel: 'Avanzado',
            rutaImagen: 'assets/img/conocimientos/java.png',
            descripciones: ['Desarrollo de aplicaciones empresariales'],
            descripcionAlterna:'Experiencia trabajando con aplicaciones empresariales multicapa usando EJB, Spring y JSP'
          },
          {
            id: 2,
            nombre:'C, C++',
            isLanguage:true,
            isDataBase:false,
            nivel: 'Avanzado',
            rutaImagen: 'assets/img/conocimientos/c.png',
            descripciones: ['Uso de programacion de bajo nivel','Manejo de archivos, hilos, memoria y concurrencia'],
            descripcionAlterna:'Experiencia programando aplicaciones de bajo nivel desarrollando problemas como manipulacion '+
            'de ficheros, buffers, programas donde se utilicen multiples hilos y manejo de concurrencia usando flags o semaforos '+
            'implementacion de estructuras de datos etc.'
          },
          {
            id: 3,
            nombre:'Spring',
            isLanguage:false,
            isDataBase:false,
            nivel: 'Intermedio',
            rutaImagen: 'assets/img/conocimientos/spring.png',
            descripciones: ['Desarrollo de aplicaciones utilizando Spring Core, MVC, Data, AOP'],
            descripcionAlterna:'Experiencia trabajando con aplicaciones empresariales multicapa usando distintos componentes de Spring. '+
            'como  Core, MVC, Data, AOP y Security'
          },
          {
            id: 4,
            nombre:'Hibernate',
            isLanguage:false,
            isDataBase:false,
            nivel: 'Intermedio',
            rutaImagen: 'assets/img/conocimientos/hibernate.png',
            descripciones: ['Desarrollo de aplicaciones usando mapeos, HQL y Criteria Queries'],
            descripcionAlterna:'Desarrollo de aplicaciones usando mapeos, HQL y Criteria Queries'
          },
          {
            id: 5,
            nombre:'JavaScript',
            isLanguage:true,
            isDataBase:false,
            nivel: 'Intermedio',
            rutaImagen: 'assets/img/conocimientos/javaScript.png',
            descripciones: ['Uso de javaScript en el Frontend'],
            descripcionAlterna:'Experiencia trabajando con aplicaciones empresariales, implementando logica y estilos en la capa Front-end '+
            'de las aplicaciones, llamadas AJAX y del lado del Back-end desarrollo de servicios REST'
          },
          {
            id: 6,
            nombre:'Oracle',
            isLanguage:false,
            isDataBase:true,
            nivel: 'Avanzado',
            rutaImagen: 'assets/img/conocimientos/oracle.png',
            descripciones: ['Manejo general de SQL. Consultas, DML y DDL'],
            descripcionAlterna:'Experiencia trabajando con aplicaciones empresariales, realizando diversos tipos de operacion '+
            'tales como desarrollo de consultas complejas, manipulacion de tablas, desarrollo de vistas, paquetes y procedimientos etc.'
          },
          {
            id: 7,
            nombre:'PosgreSQL',
            isLanguage:false,
            isDataBase:true,
            nivel: 'Intermedio',
            rutaImagen: 'assets/img/conocimientos/postgres.png',
            descripciones: ['Manejo general de SQL. Consultas, DML y DDL'],
            descripcionAlterna:'Experiencia realizando diversos tipos de operacion '+
            'tales como desarrollo de consultas complejas, manipulacion de tablas, desarrollo de vistas, paquetes y procedimientos etc.'
          },
          {
            id: 8,
            nombre:'SqlServer',
            isLanguage:false,
            isDataBase:true,
            nivel: 'Basico',
            rutaImagen: 'assets/img/conocimientos/postgis.png',
            descripciones: ['Manejo general de SQL. Consultas, DML y DDL'],
            descripcionAlterna:'Experiencia realizando diversos tipos de operacion '+
            'tales como desarrollo de consultas complejas, manipulacion de tablas, desarrollo de vistas, paquetes y procedimientos etc.'
          },
          {
            id: 9,
            nombre:'HTML, CSS y Bootstrap',
            isLanguage:false,
            isDataBase:true,
            nivel: 'Basico',
            rutaImagen: 'assets/img/conocimientos/html.png',
            descripciones: ['Creacion de paginas web estilizadas'],
            descripcionAlterna:'Experiencia creando paginas web con diseño responsivo, funcionalidaes y estilizado'
          },
          {
            id: 10,
            nombre:'Angular/TypeScript',
            isLanguage:false,
            isDataBase:true,
            nivel: 'Intermedio',
            rutaImagen: 'assets/img/conocimientos/angular.png',
            descripciones: ['Desarrollo frontend utilizando Angular y TypeScript'],
            descripcionAlterna:'Experiencia creando paginas web utilizando los componentes de Angular y conexion con una API rest'
          },
          {
            id: 11,
            nombre:'Node.js',
            isLanguage:false,
            isDataBase:false,
            nivel: 'Basico',
            rutaImagen: 'assets/img/conocimientos/node.png',
            descripciones: ['Desarrollo de aplicaciones utilizando node.js como servidor'],
            descripcionAlterna:'Experiencia creando paginas servicios simples con llamada a base de datos'
          },
          {
            id: 12,
            nombre:'OpenCV',
            isLanguage:false,
            isDataBase:false,
            nivel: 'Basico',
            rutaImagen: 'assets/img/conocimientos/opencv.png',
            descripciones: ['Implementación de filtros y métodos de procesamiento de imágenes'],
            descripcionAlterna:'Experiencia implementando filtros y métodos de procesamiento a imagenes usando herramientas como '+
            'enmascaramiento, filtros de suavizado, agrupacion de objetos, implementacion de redes neuronales, etc.'
          }
        ];
}
