import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router, RouterStateSnapshot} from "@angular/router";
import {HomeService} from "../home.service";
import {Observable, Subscription} from "rxjs";
import {CanComponentDeactivate, CanDeactivateGuard} from "./canDeactivateGuard.service";
import {Card} from "../shared/card.interface";
import {log} from "util";

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit, CanDeactivateGuard {
  editForm: FormGroup;
  parameter: string;
  card: Card;
  editCard: Card;
  index: number;
  ChangedSaves: boolean;
  htmlIsNew: boolean;
  isNew: string;
  buttonActive = false;
  defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

  constructor(private route: ActivatedRoute, private homeService: HomeService, private router: Router) {
  }

  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      if(this.ChangedSaves){
        return true;
      }
      else{
          if(!this.editForm.dirty && !this.htmlIsNew){
            return true;
          }
          else{
            return confirm('Do you want to discard changes?');
          }
      }

    }

  ngOnInit(): void {

    this.isNew = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.isNew = params['id'];
      }
    )


    if (this.isNew === 'new') {
      this.editForm = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'surname': new FormControl(null, Validators.required),
        'nation': new FormControl(null, Validators.required),
        'age': new FormControl(null, [Validators.required,Validators.min(1)]),
        'profileImage': new FormControl(null),
        'wimbledon': new FormControl(0),
        'usa': new FormControl(0),
        'french': new FormControl(0)

      })
      this.htmlIsNew = true;
      console.log(this.editForm);
      this.editForm.statusChanges.subscribe(
        (status) =>{
            if(status === 'VALID'){
              this.buttonActive= true;
            }
            else {
              this.buttonActive=false;
            }
        }
      )
    }

    else {
      this.index = +this.isNew;
      console.log(this.index);
      this.editCard = this.homeService.getSingleCard(this.index);
      this.defaultImage = this.editCard.image;
      this.editForm = new FormGroup({
        'name': new FormControl(this.editCard.name, Validators.required),
        'surname': new FormControl(this.editCard.surname, Validators.required),
        'nation': new FormControl(this.editCard.nation, Validators.required),
        'age': new FormControl(this.editCard.age, [Validators.required,Validators.min(1)]),
        'profileImage': new FormControl(''),
        'wimbledon': new FormControl(0),
        'usa': new FormControl(0),
        'french': new FormControl(0)

      })
      console.log(this.editForm);
      this.htmlIsNew = false;
      this.editForm.statusChanges.subscribe(
        (status) =>{
          if(status === 'VALID'){
            this.buttonActive= true;
          }
          else {
            this.buttonActive=false;
          }
        }
      )
    }


  }

  onSubmit() {
    if (this.htmlIsNew) {
      if (this.editForm.get('profileImage').value !== null) {
        this.defaultImage = this.editForm.get('profileImage').value;
      }

      this.card = {name: this.editForm.get('name').value, surname: this.editForm.get('surname').value,
        nation:this.editForm.get('nation').value,
        age: this.editForm.get('age').value,image: this.defaultImage,WimbledonWins:this.editForm.get('wimbledon').value,
        UsaOpenWins: this.editForm.get('usa').value, FrenchOpenWins: this.editForm.get('french').value};
      this.homeService.onAddNewCard(this.card)
      console.log(this.card);
      this.router.navigate(['/home']);
      this.ChangedSaves = true;
    }
    else {
      this.card = {name: this.editForm.get('name').value, surname: this.editForm.get('surname').value,
       nation: this.editForm.get('nation').value, age: this.editForm.get('age').value, image:this.defaultImage, WimbledonWins: this.editForm.get('wimbledon').value,
        UsaOpenWins: this.editForm.get('usa').value, FrenchOpenWins:this.editForm.get('french').value};
      this.homeService.onUpdateCard(this.card, this.index);
      this.router.navigate(['/home']);
    }
    this.ChangedSaves = true;
  }



}
