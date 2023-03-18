import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {JobModalComponent} from "./job-modal/job-modal.component";
import {JobService} from "../services/job.service";
import {Job} from "../models/job";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobs!: Job[];
  constructor(
    public jobService : JobService,
    public dialog:MatDialog
  ){
  }

  ngOnInit(): void {
    this.getJobs();
  }
  openJobModal(): void{
    const dialog = this.dialog.open(JobModalComponent, {
      width:'700px'
    });
    dialog.afterClosed().subscribe(res => {
      if (res){
        this.getJobs()
      }
    })
  }

  getJobs(): void{
    this.jobService.getJobs()
      .subscribe((res:any[]) => {
      this.jobs = res.sort(function(a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    });
  }
}
