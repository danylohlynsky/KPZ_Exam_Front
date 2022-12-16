import {Component, OnInit} from '@angular/core';

import {RealtorDto} from "../../../models/realtor-models/realtor.interface";
import {RealtorService} from "../../../services/realtor-service/realtor.service";

@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-apartment.component.html'
})
export class CreateApartmentComponent implements OnInit {
  title = 'Create realtor';
  realtorDto = new RealtorDto();

  constructor(private userService : RealtorService) {}

  ngOnInit() {}

  addRealtor() {
    this.userService.createRealtor(this.realtorDto).subscribe();
  }
}

