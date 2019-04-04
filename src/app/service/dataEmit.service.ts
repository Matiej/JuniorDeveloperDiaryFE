import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { JobOffer } from '../model/job-offer';

@Injectable({
  providedIn: "root"
})
export class DataEmitService {
  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();

  private jobOfferSource = new BehaviorSubject<JobOffer>(new JobOffer);
  currentJobOffer = this.jobOfferSource.asObservable();

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeJobOffer(jobOffer: JobOffer) {
    this.jobOfferSource.next(jobOffer);
  }
}
