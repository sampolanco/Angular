import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miscelaneos',
  templateUrl: './miscelaneos.component.html',
  styleUrls: ['./miscelaneos.component.css']
})
export class MiscelaneosComponent implements OnInit {
  tamanoFuente=25;
  alertClass='alert-info';
  alertInfo=true;
  loading=false;
  condicionSwitch=1;

  constructor() { }

  ngOnInit(): void {
  }

  getTamanoFuente():string{
    return this.tamanoFuente+'px';
  }

  procesarTimeOut(){
    this.loading=true;
    setTimeout(
      ()=>{this.loading=false;},
      3000
    );
  }

  getCondicionSwitch(){
    this.condicionSwitch++;
    if(this.condicionSwitch==6)
      this.condicionSwitch=1;
  }

}
