import {Component, OnInit} from '@angular/core';

import {RealtorDto} from "../../../models/realtor-models/realtor.interface";
import {RealtorService} from "../../../services/realtor-service/realtor.service";

@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-realtor.component.html',
  styleUrls: ['./create-realtor.component.css']
})
export class CreateRealtorComponent implements OnInit {
  title = 'Create realtor';
  realtorDto = new RealtorDto();

  constructor(private userService : RealtorService) {}

  ngOnInit() {}

  addRealtor() {
    this.userService.createRealtor(this.realtorDto).subscribe();
  }
}

