import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RealtorService} from "../../../services/realtor-service/realtor.service";

@Component({
  selector: 'app-delete-apartment',
  templateUrl: './delete-apartment.component.html'
})
export class DeleteApartmentComponent implements OnInit {

  id : number | undefined;

  constructor(private realtorService: RealtorService, private route: ActivatedRoute, private router : Router) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.realtorService.deleteRealtor(this.id).subscribe();
  }

}
