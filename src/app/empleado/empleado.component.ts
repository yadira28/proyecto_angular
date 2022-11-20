
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

  empresa="Pildoras Informaticas";
  
  /*getEdad(){

    return this.edad;
  }*/
 
    habilitacionCuadro=false;
    usuRegistrado=false;

    textoDeRegistro="no hay nadie registrado"

    getRegistroUsuario(){
      this.usuRegistrado=false;


    }
    setusuarioRegistrado(event:Event){
    //alert ("El usuario se acaba de registrar");
   // this.textoDeRegistro="El usuario se acaba de registrar";
   if((<HTMLInputElement>event.target).value=="si"){
    this.textoDeRegistro ="El usuario se acaba de registrar";
   }else{
    this.textoDeRegistro="No hay nadie registrado";

   }

   }  

  constructor() { }

  ngOnInit(): void {
  }

}
