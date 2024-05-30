import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightnavsectionComponent } from './rightnavsection.component';

describe('RightnavsectionComponent', () => {
  let component: RightnavsectionComponent;
  let fixture: ComponentFixture<RightnavsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightnavsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightnavsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
