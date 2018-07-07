import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FaInputComponent } from './lib/fa-input/fa-input.component';
import { InputRefDirective } from './lib/common/input-ref.directive';
import { DebugElement } from '../../node_modules/@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

    let component: AppComponent,
        fixture: ComponentFixture<AppComponent>,
        el: DebugElement,
        emailField: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent, FaInputComponent, InputRefDirective
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        emailField = el.query(By.css('#email-field'));
        fixture.detectChanges(); // to ensure all changes are detected for the running of tests
    });

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));

    it('should create an au-fa-input field with #email-field', async(() => {
        expect(emailField).toBeTruthy();
    }));
    
    it('should create the correct font awesome email icon input', async(() => {
        //console.log(emailField.nativeElement.outerHTML);
        expect(emailField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
    }));

    it('should content project an input field with the .test-class', async(() => {
        expect(emailField.query(By.css('input.test-class'))).toBeTruthy();
    }));





});
