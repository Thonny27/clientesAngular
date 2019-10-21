import {Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__} from '@angular/core';
import {Cliente} from '../../cliente';
import {FormService} from '../../form-service.service';
import {ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  cliente: Cliente;
  private imageSelection: File;

  constructor(private clienteService: FormService,
     private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      let id: number = +params.get('id');
      if (id) {
        this.clienteService.getById(id).subscribe(cliente => {
          this.cliente = cliente;
        });
      }
    });
  }

  setImage(event){

    this.imageSelection = event.target.files[0];
    console.log(this.imageSelection);
    if(this.imageSelection.type.indexOf('image')<0){
      Swal.fire('Eror: ','El archivo debe ser de tipo imagen',"error")
      this.imageSelection = null;
    }

  }

  upImage(){

    if(!this.imageSelection){
      Swal.fire('Eror: ','Debe seleccionar una foto',"error")
    }else{

    }

    this.clienteService.upImage(this.imageSelection,this.cliente.id)
    .subscribe((cliente: Cliente)=>{
      this.cliente = cliente;
      Swal.fire("La imagen ha sido subida",`La foto se subio con exito: ${this.cliente.image}`,"success");
      console.log(this.cliente);
      
    });
  }

}
