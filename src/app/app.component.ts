import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LABELS, TAB_BLOCK } from './core/app.constant';
import { TabBlockModel } from './core/app.models';
import { ContactComponent } from "./shared/contact/contact.component";

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
