import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from 'src/app/services/portfolios.service';
import { Portfolio } from 'src/app/models/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  selectedPortfolio: any = {};
  portfolioItems:Portfolio[] = [];

  constructor(private portfoliosService: PortfoliosService) {
  }

  ngOnInit(): void {
    this.portfoliosService.getPortfolios().then((data: Portfolio[]) => {
      this.portfolioItems = data;
    });
  }

  onPortfolioSelect(item: any): void {
    this.selectedPortfolio = item;
  }
}
