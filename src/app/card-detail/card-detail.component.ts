import {Component, Input, OnInit} from '@angular/core';
import {Cards} from "../shared/card.interface";
import {HomeService} from "../home.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  card: Cards;
  index: number;

  constructor(private homeService: HomeService, private  route:ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params.id;
    this.card = this.homeService.getSingleCard(this.index);

  }

}
