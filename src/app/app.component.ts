import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Srikanth';

  constructor() {
    // this.name = 'Hayagreeva';
    // this.changeName('Thirumala')
  }

  // changeName(name:string):void {
  //   this.name = name;
  // }

  ngOnInit() {
    
  }
}
