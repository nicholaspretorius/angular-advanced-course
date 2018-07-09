import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { AuTabComponent } from '../au-tab/au-tab.component';

@Component({
  selector: 'au-tab-panel',
  templateUrl: './au-tab-panel.component.html',
  styleUrls: ['./au-tab-panel.component.scss']
})
export class AuTabPanelComponent implements AfterContentInit {

  @ContentChildren(AuTabComponent)
  tabs: QueryList<AuTabComponent>;

  @Input()
  headerTemplate: TemplateRef<any>;

  //constructor() { }

  ngAfterContentInit() {
    console.log('Tabs: ', this.tabs);
    const selectedTab = this.tabs.find(tab => tab.selected);
    console.log('Selected Tab: ', selectedTab);

    if(!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: AuTabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    }
  }

}
