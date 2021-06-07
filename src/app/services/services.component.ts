import { Component, OnInit } from '@angular/core';
import { SERVER_LOCATION } from 'src/global';
import { Services } from '../shared/service-service/service.model';
import { ServicesService } from '../shared/service-service/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: []
})

export class ServicesComponent implements OnInit {

  service: Services[] | null | undefined;
  server = SERVER_LOCATION;
  constructor(private serviceService: ServicesService){}

  ngOnInit(): void {
    this.serviceService.findAll().subscribe(servResponse => this.service = servResponse.body)
  }

}
