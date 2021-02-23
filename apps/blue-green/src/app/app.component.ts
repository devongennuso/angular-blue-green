import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aws-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blue-green';

  public isOpen: boolean = false;

  ngOnInit() {
    this.toggleMenu();
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
