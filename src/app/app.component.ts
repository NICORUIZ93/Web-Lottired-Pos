import {Component} from '@angular/core';
import {NbGlobalLogicalPosition, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService,} from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Web-Lottired-Pos';
  physicalPositions = NbGlobalPhysicalPosition;
  logicalPositions = NbGlobalLogicalPosition;
  private index: number = 0;

  constructor(private toastrService: NbToastrService) {
  }

  showToast(position: NbGlobalPosition) {
    this.toastrService.show(
      'This is super toast message',
      `This is toast number: ${++this.index}`,
      {position}
    );
  }
}
