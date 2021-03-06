import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'No human is limited', 'Eliud Kipchoge',new Date(2020,3,14)),
    new Quote(2,'Great minds discuss ideas; average minds discuss events; small minds discuss people.','Eleanor Roosevelt',new Date(2019,6,9)),
    new Quote(3,'Do one thing every day that scares you','Eleanor Roosevelt',new Date(2022,1,12)),
    new Quote(4,'If you always do what interests you, at least one person is pleased','Katharine Hepburn',new Date(2019,0,18)),
    new Quote(5,'The difference between winning and losing is most often not quitting','Damn Math',new Date(2019,2,14)),
    new Quote(6,'Things work out best for those who make the best of how things work out','John Wooden',new Date(2030,3,14)),
  ];
  toggleDetails(index: string | number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  



  constructor() { }

  ngOnInit(): void {
  }

}
