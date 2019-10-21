import {Component, OnInit} from '@angular/core';
import {FormService} from '../form-service.service';
import {Cliente} from '../cliente';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  cliente: Cliente = {
    id: null,
    nombre: '',
    apellido: '',
    edad: 0
  };

  hasParams = false;

  constructor(private formService: FormService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((param: Cliente) => {
      console.log(param, Object.keys(param));
      if (Object.keys(param).length < 1) {
        this.hasParams = false;
      } else {
        this.hasParams = true;
        this.cliente.id = param.id;
        this.cliente.nombre = param.nombre;
        this.cliente.apellido = param.apellido;
        this.cliente.edad = param.edad;
      }
    });
  }

  saveCliente(): void {
    this.formService.save(this.cliente).subscribe(cliente => {
      this.router.navigate(['list']);
    }, (err) => {
      this.router.navigate(['list']);
    });
  }

  updateCliente(): void {
    this.formService.update(this.cliente).subscribe(cliente => {
      this.router.navigate(['list']);
    }, (err) => {
      this.router.navigate(['list']);
    });
  }

}
