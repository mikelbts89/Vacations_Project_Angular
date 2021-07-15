import { Component, Input, OnInit } from '@angular/core';
import { UsersServices } from 'src/app/services/user-services.service';
import { VacationsService } from 'src/app/services/vacations.service';
import { Vacation } from '../Model/VacationModel';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css'],
})
export class VacationComponent implements OnInit {
  @Input() data: Vacation = new Vacation();
  constructor(
    public vacationService: VacationsService,
    public userService: UsersServices
  ) {}

  ngOnInit(): void {}
  delete() {
    console.log(this.data.id);
    let indexTodelete = this.vacationService.vacations.findIndex((vacation) => {
      return vacation.id == this.data.id;
    });

    this.vacationService.vacations.splice(indexTodelete, 1);
  }
}
