import { Component, OnInit } from '@angular/core';
import { SERVER_LOCATION } from 'src/global';
import { Realisations } from '../shared/portfolio-service/realisation.model';
import { RealisationService } from '../shared/portfolio-service/realisation.service';





@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: []
})
export class PortfolioComponent implements OnInit {

  realisation: Realisations[] | null | undefined;
  server=SERVER_LOCATION;
  constructor(private realisationService: RealisationService){}

  ngOnInit(): void {
    this.realisationService.findAll().subscribe(reaResponse => this.realisation = reaResponse.body)
  }

}
