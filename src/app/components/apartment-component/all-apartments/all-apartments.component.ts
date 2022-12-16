import {Component, OnInit} from '@angular/core';

import {RealtorDto} from "../../../models/realtor-models/realtor.interface";
import {RealtorService} from "../../../services/realtor-service/realtor.service";

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-all-apartments',
  templateUrl: './all-apartments.component.html'
})
export class AllApartmentsComponent implements OnInit {
  public realtors: RealtorDto[] = [];

  private name : string | undefined;

  constructor(private realtorService: RealtorService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });

    this.realtorService.getAllRealtors().subscribe(data => this.realtors = data);
  }
}
