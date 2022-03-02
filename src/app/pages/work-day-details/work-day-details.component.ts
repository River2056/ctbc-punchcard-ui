import { Component, OnInit } from '@angular/core';
import { WorkDayDetail } from 'src/app/models/WorkDayDetail';
import { WorkDayDetailsService } from 'src/app/services/work-day-details.service';

@Component({
  selector: 'app-work-day-details',
  templateUrl: './work-day-details.component.html',
  styleUrls: ['./work-day-details.component.css'],
})
export class WorkDayDetailsComponent implements OnInit {
  workDayDetailsData: WorkDayDetail[] = [];
  tableColumns: string[] = ['start_time', 'end_time', 'details'];
  dateStr: string = '';

  constructor(private workDayDetailsService: WorkDayDetailsService) {}

  ngOnInit(): void {
    this.load();
  }

  load = async (): Promise<void> => {
    await this.pageInit();
  };

  pageInit = async (): Promise<void> => {
    const date = new Date();
    const year = date.getFullYear().toString();
    const month =
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : (date.getMonth() + 1).toString();

    this.dateStr = `${year}-${month}`;
    this.workDayDetailsData = await this.workDayDetailsService
      .getWorkDayDetails(year, month)
      .toPromise();
  };
}
