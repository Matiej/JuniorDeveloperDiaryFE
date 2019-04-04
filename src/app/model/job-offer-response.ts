import { Candidate } from "./candidate";
import { EmployerReply } from "./employerReply";

export interface JobOfferResponse {
  id: number;
  title: string;
  company: string;
  sentDate: string;
  offerSaveDate: Date;
  salary: string;
  seniorityLevel: string;
  mustHave: string;
  niceToHave: string;
  otherContent: string;
  sentMethod: string;
  candidate: Candidate;
  employerReplies: Array<EmployerReply>;
}
