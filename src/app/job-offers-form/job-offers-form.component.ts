import { JobOfferResponse } from './../model/job-offer-response';
import { JobOfferService } from './../service/jobOffer.service';
import { JobOffer } from "./../model/job-offer";
import { JobOffersComponent } from "./../job-offers/job-offers.component";
import { MessageComponent } from "./../message/message.component";
import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Location } from '@angular/common';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: "app-job-offers-form",
  templateUrl: "./job-offers-form.component.html",
  styleUrls: ["./job-offers-form.component.scss"],
  providers: [

    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})

export class JobOffersFormComponent implements OnInit {
  public email: string = "";
  public password: string = "";
  matError: string = "I'm sorry dear candidate, name size must be min 2 chars here -> DO POPRAWY";
  @Input()
  offerForm: FormGroup;

  constructor(private location: Location, private formBuilder: FormBuilder, private jobOfferServ: JobOfferService) {
  
  }

  ngOnInit(): void {
   this.createForm();
  }

  private createForm() {
    // let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.offerForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(2)]],
      company: [null, [Validators.required, Validators.minLength(2)]],
      sentDate:  [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ] 
      ],
      salary: [null, [Validators.required, Validators.minLength(2)]],
      seniorityLevel: [null, Validators.required],
      mustHave: [null, Validators.required],
      niceToHave: [null, Validators.required],
      otherContent: [null, Validators.required],
      sentMethod: [null, Validators.required]
    });
  }

  public createOffer = (offerFromValue) => {
    console.log('TEST CREATEOFFER');
    console.log('title test-> ' + offerFromValue.title + 'date ' + offerFromValue.sentDate);
    this.saveOffer(offerFromValue);

  }

  private saveOffer(jobOfferForm: JobOffer) {
    console.log('saving jobOffer')
    this.jobOfferServ.postJobOffer(jobOfferForm).subscribe();
        // this.jobOfferServ.postJobOffer(jobOfferForm);
  }

  public onCancel = () => {
    console.log('cancel test')
    this.location.back();
  }

  private createJobOffer(): JobOffer {
    const offer1 = new JobOffer();
    offer1.company = 'conpany_ TWO';
    offer1.mustHave = 'must_haveTest';
    offer1.niceToHave = 'nice to have and a lot of stuff ';
    offer1.otherContent = 'other content. Nothing interested';
    offer1.seniorityLevel = "JUNIOR";
    offer1.sentDate = '2019-03-28';
    offer1.sentMethod = 'sent by EMAIL, better to create enum. Angular enum or ';
    offer1.title = 'my job title-> Java Junior Develeoper for free';
    offer1.salary = '103212';
    return offer1;
  }
}
