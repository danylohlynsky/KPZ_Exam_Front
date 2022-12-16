import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RealtorService} from "../../../services/realtor-service/realtor.service";
import {RealtorDto} from "../../../models/realtor-models/realtor.interface";

@Component({
  selector: 'app-realtor-component',
  templateUrl: './apartment-details.component.html'
})
export class ApartmentDetailsComponent implements OnInit {

  public realtor : RealtorDto | undefined;
  private id : number;

  constructor(private realtorService: RealtorService, private route: ActivatedRoute) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.realtorService.getRealtorById(this.id).subscribe((data: RealtorDto) => this.realtor = { ...data });
  }
}
