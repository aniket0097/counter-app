import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-app';
  Count: number = 0;

  handIncrease() {

    if(this.Count<10)
    { 
        this.Count = this.Count + 1;
    }
 
   
  };

  handDecrease() {
   if(this.Count>=1)
    {

    this.Count = this.Count - 1;
  }
    
  };

  handReset(){
  this.Count = 0;
  };
}
