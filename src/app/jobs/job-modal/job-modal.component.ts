import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {JobService} from "../../services/job.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Job} from "../../models/job";

@Component({
  selector: 'app-job-modal',
  templateUrl: './job-modal.component.html',
  styleUrls: ['./job-modal.component.scss']
})
export class JobModalComponent implements OnInit {
  jobForm!: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<JobModalComponent>,
    private fb: FormBuilder,
    private jobService : JobService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data:Job
  ) { }

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      title: [ this.data?.title || '', Validators.required],
      description: this.data?.description || '',
      salary: [ this.data?.salary || '', Validators.pattern('[0-9]*')],
      sector: this.data?.sector || '',
      experience: this.data?.experience || '',
      company: this.data?.company || '',
      address: this.data?.address || ''
    });
  }
 addJob():void{
   this.jobService.addJob(this.jobForm.value)
     .subscribe((res : any) =>{
       this._snackBar.open(res|| 'Kaydedildi!', '', {
         duration: 4000,
       });
       this.dialogRef.close(true)
     });
 }

 updateJob(): void{
    this.jobService.updateJob(this.jobForm.value, this.data.id)
      .subscribe((res: any) => {
        this._snackBar.open(res|| 'Güncellendi!', '', {
          duration: 4000,
        });
        this.dialogRef.close(true)
      });
   window.location.reload()
 }

 deleteJob(): void{
    this.jobService.deleteJob(this.data.id)
      .subscribe((res:any) => {
        this._snackBar.open(res|| 'Güncellendi!', '', {
          duration: 4000,
        });
        this.dialogRef.close(true)
      });
    window.location.reload()
 }
}
