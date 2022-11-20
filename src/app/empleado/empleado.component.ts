
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
 //template:"<p>Aqui iria un Empleado"<p/>,,
 styleUrls: ['./empleado.component.css']
 //styles:["p{background-color:red;"]
})
export class EmpleadoComponent implements OnInit {
  nombre="Juan";
  apellido="Dias";
  edad= 28;
  empresa="Pildoras informaticas";

  //empresa="Pildoras Informaticas";
  /*getEdad(){
    return this.edad;
  }*/
  LlamaEmpresa(value:String){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
