import { Component } from '@angular/core'
import {ActivatedRoute} from "@angular/router";
import {RealtorService} from "../../../services/realtor-service/realtor.service";
import {RealtorDto} from "../../../models/realtor-models/realtor.interface";

@Component({
  selector: 'app-update-apartment',
  templateUrl: './update-apartment.component.html'
})
export class UpdateApartmentComponent {
  title = 'httpGet Example';
  realtor : RealtorDto | undefined;
  updatedRealtor = new RealtorDto();
  id : number | undefined;

  constructor(private realtorService : RealtorService,  private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.realtorService.getRealtorById(this.id).subscribe((data: RealtorDto) => this.realtor = { ...data });
  }

  editRealtor() {
    this.updatedRealtor.id = this.realtor?.id;
    this.realtorService.editRealtor(this.updatedRealtor).subscribe()
  }
}
