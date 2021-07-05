import { Injectable } from "@angular/core";
import { ElementoImagen } from '../../interfaces/elementoImagen.interface';

@Injectable()
export class AnuncioService{
    private _anuncios:ElementoImagen[]=[];

    constructor(){
        this.llenarAnuncios();
    }

    get anuncios():ElementoImagen[]{
        return this._anuncios;
    }

    private llenarAnuncios(){
        let urlhm="https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam";
        this._anuncios.push(
            this.crearElementoImaten(
            urlhm+"/ladies_s03/april_2021/1553a/1553A-3x2-the-new-neutrals.jpg]&scale=size[960]&sink=format[jpeg],quality[80]",
            "Nueva coleccion de verano",
            "Ver todas las ofertas de verano",
            "",
            "black")
        ); 
        this._anuncios.push(
            this.crearElementoImaten(
            urlhm+"/men_s03/april_2021/3113a/3113A-3x2-the-linen-edit.jpg]&scale=size[960]&sink=format[jpeg],quality[80]",
            "Ofertas de invierno",
            "Ver todas las ofertas de invierno",
            "",
            "white")
        ); 
        this._anuncios.push(
            this.crearElementoImaten(
            urlhm+"/hm/campaigns-generic/23j-take-care/23j-1x1-Teaser-9-takecare.jpg]&scale=size[795]&sink=format[jpeg],quality[80]",
            "Mezclilla",
            "Ver todas las ofertas de mezclilla",
            "",
            "white")
        ); 
        this._anuncios.push(
            this.crearElementoImaten(
            "https://cdn.shopify.com/s/files/1/0899/2262/articles/10-tiendas-de-trajes-de-bano-y-ropa-para-playa.jpg?v=1551830764",
            "Ropa de playa",
            "Ver todas las novedades para estas vacaciones en la playa con tu familia",
            "",
            "black")
        ); 
    }

    private crearElementoImaten(
        urlOrigen:string,
        textoPrincipalDentroImagen:string,
        textoSecundarioDentroImagen:string,
        urlClick:string,
        colorTextoDentroImagen:string):ElementoImagen{
        let elemento:ElementoImagen={
            urlOrigen:urlOrigen,
            textoDescripcion:"",
            textoPrincipalDentroImagen:textoPrincipalDentroImagen,
            textoSecundarioDentroImagen:textoSecundarioDentroImagen,
            colorTextoDentroImagen:colorTextoDentroImagen,
            urlClick:urlClick,
            porcentajeX:80,
            porcentajeY:10,
            precio:0,
            precioConDescuento:0
        };
        return elemento;
    }
}