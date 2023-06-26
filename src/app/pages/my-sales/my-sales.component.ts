import { Component } from '@angular/core';
import {
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
} from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
}

@Component({
  selector: 'app-my-sales',
  templateUrl: './my-sales.component.html',
  styleUrls: ['./my-sales.component.scss'],
})
export class MySalesComponent {
  ventas = [
    {
      fecha: '2023-05-01',
      nombre: 'Lotería Navidad',
      precio: 20,
      cantidad: 2,
      vendedor: 'Juan',
    },
    {
      fecha: '2023-05-02',
      nombre: 'Lotería Nacional',
      precio: 10,
      cantidad: 5,
      vendedor: 'María',
    },
    {
      fecha: '2023-05-03',
      nombre: 'Lotería Primitiva',
      precio: 5,
      cantidad: 10,
      vendedor: 'Pedro',
    },
  ];
}
