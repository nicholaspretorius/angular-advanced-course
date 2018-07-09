import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AuTabComponent } from './au-tab/au-tab.component';
import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';
import { DebugElement } from '../../node_modules/@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let component: AppComponent,
      fixture: ComponentFixture<AppComponent>,
      el: DebugElement,
      tabPanel: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AuTabComponent, AuTabPanelComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async(()=> {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement,
    tabPanel = el.query(By.css('#tab-panel'));

    fixture.detectChanges();

  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should display only one tab inside the tab container', async(() => {
    const tabsList = tabPanel.queryAll(By.css('.tab'));
    console.log("Tabs List: ", tabsList);
    expect(tabsList).toBeTruthy();
    expect(tabsList.length).toBe(1);
  }));

  it('should find the contact tab button market as active', async(()=>{
    const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    console.log("Selected: ", selectedButton.textContent);
    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent.trim()).toBe('Contact');
  }));

  it('should display the Contact tab', async(() => {
    const contactEmail = tabPanel.query(By.css('.contact-email'));
    expect(contactEmail).toBeTruthy();
  }));

  it('should switch to the login tab', async(() => {
    const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));
    tabButtons[0].nativeElement.click();
    fixture.detectChanges();
    const loginEmail = tabPanel.query(By.css('.login-email'));

    expect(loginEmail).toBeTruthy();

    const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected')).nativeElement;
    expect(selectedButton).toBeTruthy();
    expect(selectedButton.textContent.trim()).toBe('Login');

  }));



  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
