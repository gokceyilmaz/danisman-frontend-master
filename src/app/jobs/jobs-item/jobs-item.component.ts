import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../../models/job";
import {MatDialog} from "@angular/material/dialog";
import {JobModalComponent} from "../job-modal/job-modal.component";
import {JobService} from "../../services/job.service";

@Component({
  selector: 'app-jobs-item',
  templateUrl: './jobs-item.component.html',
  styleUrls: ['./jobs-item.component.scss']
})
export class JobsItemComponent implements OnInit {

  @Input() jobsItem!: Job;

  constructor(
    private dialog: MatDialog,
    public jobService : JobService

  ) { }

  ngOnInit(): void {
  }

  openUpdateJobsModal(job:Job): void{
    const dialog = this.dialog.open(JobModalComponent,{
      width:'700px',
      data: job
    });
    dialog.afterClosed().subscribe(res => {
      if(res){
        this.jobService.getJobs();
      }
    })
  }
}
