import { JobOfferResponse } from './../model/job-offer-response';
import { Validators } from '@angular/forms';
import { JobOffer } from './../model/job-offer';
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { formatDate } from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: "root"
})
export class JobOfferService {
  private baseUrl = "//localhost:8088/jobs";
  private formatDate = 'yyyy-MM-dd';

  constructor(private httpServ: HttpClient) {}

  public getAllJobOffers(): Observable<Array<JobOffer>> {
    return this.httpServ.get<Array<JobOffer>>(this.baseUrl + '/findAll');
  }

  public getJobOfferById(jobOfferId: number): Observable<JobOffer> {
    const parm = new HttpParams().set('offerId', jobOfferId + '')
    return this.httpServ.get<JobOffer>(this.baseUrl+'/findOne', {params: parm});
  }

  public postJobOffer(jobOffer: JobOfferResponse): Observable<JobOffer> {
    const date = new Date(jobOffer.sentDate);
    const formattedDate = formatDate(date, this.formatDate, 'en-US', 'Europe/Warsaw');
    console.log('try date: ' + formattedDate);
    const jobOfferResponse: JobOfferResponse = {
      id: jobOffer.id,
      title: jobOffer.title,
      company: jobOffer.company,
      sentDate: formattedDate,
      offerSaveDate: jobOffer.offerSaveDate,
      salary: jobOffer.salary,
      seniorityLevel: jobOffer.seniorityLevel,
      mustHave: jobOffer.mustHave,
      niceToHave: jobOffer.niceToHave,
      otherContent: jobOffer.otherContent,
      sentMethod: jobOffer.sentMethod,
      candidate: jobOffer.candidate,
      employerReplies: jobOffer.employerReplies
    };
    return this.httpServ.post<JobOffer>(this.baseUrl+'/add', jobOfferResponse, httpOptions);
    // return new Observable;
  }
}
