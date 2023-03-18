import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Job} from "../models/job";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    @Inject("apiUrl") private apiUrl: String,
    private http: HttpClient
  ) { }

  getJobs(): Observable<Job[]>{
      return this.http.get<Job[]>(this.apiUrl + "/job");
  }

  addJob(job:Job){
    return this.http.post(this.apiUrl+"/job",job,{responseType:'text'})
  }

  updateJob(job: Job, jobId: number | undefined){
    job.id= jobId
    return this.http.put(this.apiUrl+"/job",job,{responseType:'text'})
  }

  deleteJob(jobId: number | undefined){
    return this.http.delete(this.apiUrl+"/job/"+jobId,{responseType : 'text'})
  }
}
