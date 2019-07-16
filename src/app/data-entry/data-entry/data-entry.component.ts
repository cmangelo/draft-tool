import { Component, OnInit } from '@angular/core';

import { DataEntryService } from '../data-entry.service';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.less']
})
export class DataEntryComponent implements OnInit {
  csv: string;

  constructor(private service: DataEntryService) { }

  ngOnInit() {
  }

  saveCSV() {
    this.service.saveCSV(this.csv);
  }
}
