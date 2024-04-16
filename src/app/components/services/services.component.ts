import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  showPanel1: boolean = false;
  showPanel2: boolean = false;
  showPanel3: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

    togglePanel(panelNumber: number): void {
    if (panelNumber === 1) {
      this.showPanel1 = !this.showPanel1;
    } else if (panelNumber === 2) {
      this.showPanel2 = !this.showPanel2;
    } else if (panelNumber === 3) {
      this.showPanel3 = !this.showPanel3;
    }
  }
}
