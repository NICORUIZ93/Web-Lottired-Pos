import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbGlobalPhysicalPosition } from '@nebular/theme';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent {
  ventaForm: FormGroup;

  loading = false;

  private index: number = 0;
  positions = NbGlobalPhysicalPosition;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.ventaForm = this.fb.group({
      numeroTicket: ['', Validators.required],
      fechaVenta: ['', Validators.required],
      monto: ['', [Validators.required, Validators.min(0)]],
      nombreComprador: ['', Validators.required],
      cedulaComprador: ['', Validators.required],
      telefonoComprador: ['', Validators.required],
    });
  }

  validarPaso1() {
    return this.ventaForm.get('numeroTicket').invalid ||
      this.ventaForm.get('fechaVenta').invalid ||
      this.ventaForm.get('monto').invalid
      ? true
      : false;
  }

  completarCompra(): void {
    this.loading = true;
    this.index += 1;

    setTimeout(() => {
      console.log('hola');
      console.log(this.ventaForm.value);
      this.ventaForm.reset();
      this.router.navigate(['/login']);
    }, 1000);
  }
}
