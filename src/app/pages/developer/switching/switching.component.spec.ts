import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchingComponent } from './switching.component';

describe('SwitchingComponent', () => {
  let component: SwitchingComponent;
  let fixture: ComponentFixture<SwitchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
