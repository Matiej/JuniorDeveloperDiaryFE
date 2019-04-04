import { JobOfferResponse } from './../model/job-offer-response';
import { Validators } from '@angular/forms';
import { JobOffer } from './../model/job-offer';
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: "root"
})
export class JobOfferService {
  private baseUrl = "//localhost:8088/jobs";

  constructor(private httpServ: HttpClient) {}

  getAllJobOffers(): Observable<Array<JobOffer>> {
    return this.httpServ.get<Array<JobOffer>>(this.baseUrl + '/findAll');
  }

  getJobOfferById(jobOfferId: number): Observable<JobOffer> {
    const parm = new HttpParams().set('offerId', jobOfferId + '')
    return this.httpServ.get<JobOffer>(this.baseUrl+'/findOne', {params: parm});
  }

  postJobOffer(jobOffer: JobOfferResponse): Observable<JobOffer> {
    const jobOfferResponse: JobOfferResponse = {
      id: jobOffer.id,
      title: jobOffer.title,
      company: jobOffer.company,
      sentDate: jobOffer.sentDate,
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
  }
}
