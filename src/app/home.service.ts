import {Card} from "./shared/card.interface";
import {EventEmitter} from "@angular/core";

export class HomeService{
  isNew = false;
  arrayChanged = new EventEmitter<Card[]>();
  editIndexEmit = new EventEmitter<number>();


  private cards: Card[] = [
    {name:'Rafael', surname: 'Nadal',
      nation:'Spain',age: 35,
        image: 'https://images.daznservices.com/di/library/mackolik/e7/1d/rafael-nadal_pj18tg0kkvh01nyyfmmx7n2wq.jpg?t=466598837&quality=70&w=1280',
          WimbledonWins: this.random(),UsaOpenWins: this.random(),FrenchOpenWins: this.random()},
    {name:'Roger',surname:'Federer',nation:'Switzerland',age:36,
       image: 'https://d2me2qg8dfiw8u.cloudfront.net/content/uploads/2020/01/26150349/Roger-Federer-applauding-from-PA.jpg',
       WimbledonWins:this.random(),UsaOpenWins:this.random(),FrenchOpenWins:this.random()}
  ];

  getCards(){
    return this.cards.slice();
  }
  getSingleCard(index: number){
    return this.cards[index];
  }
  newCard(){
    this.isNew = true;
    return this.isNew;
  }

  onAddNewCard(card: Card){
    this.cards.push(card);
    this.arrayChanged.emit(this.cards)
  }
  onUpdateCard(card: Card, index: number){
    this.cards[index] = card;
    this.arrayChanged.emit(this.cards);
  }

  onDeleteCard(index: number){
    this.cards.splice(index,1);
    this.arrayChanged.emit(this.cards);
  }
  random(){
    return Math.floor(Math.random() * 10) + 1
  }

}
