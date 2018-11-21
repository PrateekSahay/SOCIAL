import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  level: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', level: 3},
  {position: 2, name: 'Helium', level: 2},
  {position: 3, name: 'Lithium', level: 7},
  {position: 4, name: 'Beryllium', level: 9},
  {position: 5, name: 'Boron', level: 6},
];

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'level'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
