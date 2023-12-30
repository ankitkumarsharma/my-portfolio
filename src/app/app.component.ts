import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from "./shared/contact/contact.component";
import { PortfolioModel } from './core/app.models';
import { LABELS, PORTFOLIO_LIST } from './core/app.constant';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, ContactComponent]
})
export class AppComponent {
  title = 'my-portfolio';
  noDataFound:string = LABELS.noDataFound;
  portfolioList:PortfolioModel[] = PORTFOLIO_LIST;
}
