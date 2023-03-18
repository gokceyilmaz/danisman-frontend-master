import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import {MatCardModule} from '@angular/material/card';
import { JobsItemComponent } from './jobs-item/jobs-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { JobModalComponent } from './job-modal/job-modal.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    JobsComponent,
    JobsItemComponent,
    JobModalComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class JobsModule { }
