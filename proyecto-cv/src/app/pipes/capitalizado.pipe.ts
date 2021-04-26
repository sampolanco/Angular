import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, parametroBoolean:boolean=true): string {
    let lowerCase=value.toLowerCase();
    let arreglo=lowerCase.split(' ');

    let arregloResult:string[]=arreglo.map(
      (elemento:string)=>{
        return elemento[0].toUpperCase()+elemento.substr(1);
      }
    )
    return arregloResult.join(' ');
  }

}
