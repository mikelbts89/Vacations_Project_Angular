import { Component, OnInit } from '@angular/core';
import { VacationsService } from 'src/app/services/vacations.service';
import { Vacation } from '../Model/VacationModel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(public vacationService: VacationsService) {}

  ngOnInit(): void {
    let getAllVacationsObservable = this.vacationService.getAllVacations();
    getAllVacationsObservable.subscribe(
      (vacations: Vacation[]) => {
        console.log(vacations);
        this.vacationService.vacations = vacations;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
