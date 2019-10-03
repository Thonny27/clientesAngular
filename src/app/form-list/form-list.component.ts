import { Component, OnInit } from '@angular/core';
import { FormService } from '../form-service.service';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html'
})
export class FormListComponent implements OnInit {
  private cliente:Cliente = new Cliente();
  clientes=[];

  constructor(private clienteService:FormService,private router:Router) { }

  ngOnInit() {
      this.listAll();
  }

  listAll():void{
    this.clienteService.getList().subscribe(
      (cliente:any)=> this.clientes = cliente)
  }

  delete(cliente):void{
    this.clienteService.delete(cliente).subscribe(
      Response =>{
        this.listAll();
      },(err)=>{
        this.listAll();
      this.router.navigate(['list']);
    });
  }

}
