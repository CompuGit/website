import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPageNavigationComponent } from './on-page-navigation.component';

describe('OnPageNavigationComponent', () => {
  let component: OnPageNavigationComponent;
  let fixture: ComponentFixture<OnPageNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnPageNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnPageNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
