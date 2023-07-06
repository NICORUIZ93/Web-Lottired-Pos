import { Component } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-my-sales',
  templateUrl: './my-sales.component.html',
  styleUrls: ['./my-sales.component.scss'],
})
export class MySalesComponent {
  ventas = [];
  pages: number = 1;
  pageSize = 10;
  pageToLoadNext = 1;
  loading = false;

  constructor(private salesData: SalesService) {}
  ngOnInit() {
    this.getSales();
  }

  getSales() {
    this.salesData.getSalesData().subscribe((data) => {
      this.ventas = data;
    });
  }
}
