import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlliancePartnerComponent } from './alliance-partner.component';

describe('AlliancePartnerComponent', () => {
  let component: AlliancePartnerComponent;
  let fixture: ComponentFixture<AlliancePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlliancePartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlliancePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
