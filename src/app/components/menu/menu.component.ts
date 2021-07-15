import { Component, OnInit } from '@angular/core';
import { VacationsService } from 'src/app/services/vacations.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public vacationService: VacationsService) { }

  ngOnInit(): void {
  }

}
