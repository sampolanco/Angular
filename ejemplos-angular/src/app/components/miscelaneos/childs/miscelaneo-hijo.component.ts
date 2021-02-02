import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-miscelaneo-hijo',
  template: `
    <p>
      miscelaneo-hijo works!
    </p>
  `,
  styles: [
  ]
})
export class MiscelaneoHijoComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.parent.params.subscribe(
      parametros=>{
        console.log('Parametros del padre');
        console.log(parametros);
      }
    );
  }

}
