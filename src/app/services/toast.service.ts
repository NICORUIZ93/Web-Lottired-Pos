import { Injectable } from '@angular/core';
import {
  NbGlobalPhysicalPosition,
  NbGlobalLogicalPosition,
  NbToastrService,
} from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastrService: NbToastrService) {}

  physicalPositions = NbGlobalPhysicalPosition;
  logicalPositions = NbGlobalLogicalPosition;

  showToast(titulo: string, mensaje: string) {
    this.toastrService.show(mensaje, titulo, {
      position: this.physicalPositions.TOP_RIGHT,
      status: 'success',
    });
  }
}
