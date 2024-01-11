import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from "./shared/contact/contact.component";
import { PortfolioModel, TabBlockModel } from './core/app.models';
import { LABELS, PORTFOLIO_LIST, TAB_BLOCK } from './core/app.constant';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, ContactComponent]
})
export class AppComponent {
  title = 'my-portfolio';
  noDataFound: string = LABELS.noDataFound;
  tabBlock: TabBlockModel = TAB_BLOCK;

  onTab(i: number) {
    this.tabBlock.tabs.forEach(ele => {
      ele.active = false;
    });
    this.tabBlock.tabs[i].active = true;
    this.updateTabContent(i);
  }

  updateTabContent(i: number) {
    this.tabBlock.tabContent.forEach(ele => {
      ele.active = false;
    });
    this.tabBlock.tabContent[i].active = true;
  }
}
