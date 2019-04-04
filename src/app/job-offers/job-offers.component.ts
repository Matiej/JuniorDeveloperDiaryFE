import { JobOfferService } from "./../service/jobOffer.service";
import { JobOffer } from "./../model/job-offer";
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import {
  trigger,
  state,
  transition,
  animate,
  style
} from "@angular/animations";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: "app-job-offers",
  templateUrl: "./job-offers.component.html",
  styleUrls: ["./job-offers.component.scss"],
  animations: [
    trigger("detailExpand", [
      state(
        "void",
        style({ height: "0px", minHeight: "0", visibility: "hidden" })
      ),
      state("*", style({ height: "*", visibility: "visible" })),
      transition("void <=> *", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
    ])
  ]
})
export class JobOffersComponent implements OnInit, AfterViewInit {
  isLoading: boolean = false;
  today: Date = new Date();
  allJobOffers: Array<JobOffer> = [];
  offer: JobOffer;
  isOffer: boolean = false;

  dataSource: MatTableDataSource<JobOffer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isExpansionDetailRow = (index, row) => row.hasOwnProperty("detailRow");

  constructor(private jobOfferServ: JobOfferService) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.getAllJobOffers();
  }

  getAllJobOffers() {
    this.jobOfferServ
      .getAllJobOffers()
      .subscribe((jobOffers: Array<JobOffer>) => {
        this.allJobOffers = jobOffers;
        this.dataSource = new MatTableDataSource(this.allJobOffers);
        this.isLoading = true;
      });
      
  }

  createDisplayedColumns(): Array<string> {
    const displayedCol: string[] = [];
    displayedCol.push("id");
    displayedCol.push("title");
    displayedCol.push("company");
    displayedCol.push("sentDate");
    // displayedCol.push("offerSaveDate");
    displayedCol.push("salary");
    // displayedCol.push("seniorityLevel");
    // displayedCol.push("mustHave");
    // displayedCol.push("niceToHave");
    // displayedCol.push("otherContent");
    // displayedCol.push("sentMethod");
    // displayedCol.push("candidate");
    displayedCol.push("employerReplies");
    return displayedCol;
  }

  ngAfterViewInit(): void {
    this.jobOfferServ
      .getAllJobOffers()
      .subscribe((jobOffers: Array<JobOffer>) => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

  getJobOfferById(offerId: number): void {
    this.jobOfferServ.getJobOfferById(offerId).subscribe((jobOffer: JobOffer) => {
      this.offer = jobOffer;
      this.isOffer = true;
    })
  }

}
