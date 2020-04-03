import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote(1, 'No human is limited', 'Eliud Kipchoge',new Date(2020,3,14)),
    new Quote(2,'Great minds discuss ideas; average minds discuss events; small minds discuss people.','Eleanor Roosevelt',new Date(2019,6,9)),
    new Quote(3,'Do one thing every day that scares you','Eleanor Roosevelt',new Date(2022,1,12)),
    new Quote(4,'If you always do what interests you, at least one person is pleased','Katharine Hepburn',new Date(2019,0,18)),
    new Quote(5,'The difference between winning and losing is most often not quitting','Damn Math',new Date(2019,2,14)),
    new Quote(6,'Things work out best for those who make the best of how things work out','John Wooden',new Date(2030,3,14)),
  ];  
}

