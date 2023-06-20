import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  randomNumbers: number[] = [];
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
      numeroLoteria: ['', Validators.required],
    });
  }

  validarPaso1() {
    return this.ventaForm.get('numeroTicket').invalid ||
      this.ventaForm.get('fechaVenta').invalid ||
      this.ventaForm.get('monto').invalid
      ? true
      : false;
  }

  validarPaso2() {
    return this.ventaForm.get('numeroLoteria').invalid ? true : false;
  }

  completarCompra(): void {
    this.loading = true;

    setTimeout(() => {
      console.log('hola');
      console.log(this.ventaForm.value);
      this.ventaForm.reset();
      this.router.navigate(['/auth/login']);
    }, 1000);
  }

  generateRandomNumbers() {
    this.randomNumbers = Array.from(
      { length: 4 },
      () => +Math.floor(Math.random() * 10)
    );
    this.ventaForm.get('numeroLoteria').setValue(this.randomNumbers.join(''));
  }
}
