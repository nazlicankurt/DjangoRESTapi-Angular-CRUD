import {Component, EventEmitter, OnInit} from '@angular/core';
import {HomeService} from "../home.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {insertAfterLastOccurrence} from "@angular/cdk/schematics";
import {Card} from "../shared/card.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards: Card[];
  private arrayChangedSub: Subscription;

  constructor(private homeService: HomeService,private router: Router) {
  }

  ngOnInit(): void {
    this.cards=this.homeService.getCards();
    this.arrayChangedSub = this.homeService.arrayChanged.subscribe(
      (card: Card[]) => {
        this.cards = card;
      }
    )

  }

  onAddNewCard(){
    // this.router.navigate(['/edit','new'], {queryParams: 'isNew' });

  }

  onDelete(index: number){
    this.homeService.onDeleteCard(index);
  }
  onEdit(index: number){
    // this.homeService.editIndexEmit.emit(index);
    // this.router.navigate(['/edit', index])

  }

}
