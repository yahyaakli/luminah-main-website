import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionInnovationComponent } from './fusion-innovation.component';

describe('FusionInnovationComponent', () => {
  let component: FusionInnovationComponent;
  let fixture: ComponentFixture<FusionInnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FusionInnovationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FusionInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
