import { Candidate } from "./candidate";
import { EmployerReply } from "./employerReply";
import { JobOfferResponse } from './job-offer-response';
export class JobOffer implements JobOfferResponse {
  // id: number;
  // title: string;
  // company: string;
  // sentDate: string;
  //  offerSaveDate: Date;
  //  salary: string;;
  //  seniorityLevel: string;
  //  mustHave: string;
  //  niceToHave: string;
  //  otherContent: string;
  //  sentMethod: string;
  //  candidate: Candidate;
  //  employerReplies: Array<EmployerReply>;

  private _id: number;
  private _title: string;
  private _company: string;
  private _sentDate: string;
  private _offerSaveDate: Date;
  private _salary: string;
  private _seniorityLevel: string;
  private _mustHave: string;
  private _niceToHave: string;
  private _otherContent: string;
  private _sentMethod: string;
  private _candidate: Candidate;
  private _employerReplies: Array<EmployerReply>;

	public get id(): number {
		return this._id;
    }
    
	public get title(): string {
		return this._title;
	}

	public get company(): string {
		return this._company;
	}

	public get sentDate(): string {
		return this._sentDate;
	}

	public get offerSaveDate(): Date {
		return this._offerSaveDate;
	}

	public get salary(): string {
		return this._salary;
    }
    
	public get seniorityLevel(): string {
		return this._seniorityLevel;
	}

	public get mustHave(): string {
		return this._mustHave;
	}

	public get niceToHave(): string {
		return this._niceToHave;
	}

	public get otherContent(): string {
		return this._otherContent;
	}

	public get sentMethod(): string {
		return this._sentMethod;
	}

	public get candidate(): Candidate {
		return this._candidate;
    }
    
	public get employerReplies(): Array<EmployerReply> {
		return this._employerReplies;
    }
    
	public set id(value: number) {
		this._id = value;
    }
    
	public set title(value: string) {
		this._title = value;
    }
    
	public set company(value: string) {
		this._company = value;
	}

	public set sentDate(value: string) {
		this._sentDate = value;
	}

	public set offerSaveDate(value: Date) {
		this._offerSaveDate = value;
    }
    
	public set salary(value: string) {
		this._salary = value;
	}

	public set seniorityLevel(value: string) {
		this._seniorityLevel = value;
	}

	public set mustHave(value: string) {
		this._mustHave = value;
	}

	public set niceToHave(value: string) {
		this._niceToHave = value;
	}

	public set otherContent(value: string) {
		this._otherContent = value;
	}

	public set sentMethod(value: string) {
		this._sentMethod = value;
	}

	public set candidate(value: Candidate) {
		this._candidate = value;
	}

	public set employerReplies(value: Array<EmployerReply>) {
		this._employerReplies = value;
	}


}
