import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgileComponent } from './progile.component';

describe('ProgileComponent', () => {
  let component: ProgileComponent;
  let fixture: ComponentFixture<ProgileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
