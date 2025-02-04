import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuclearFusionImportanceComponent } from './nuclear-fusion-importance.component';

describe('NuclearFusionImportanceComponent', () => {
  let component: NuclearFusionImportanceComponent;
  let fixture: ComponentFixture<NuclearFusionImportanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuclearFusionImportanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuclearFusionImportanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
