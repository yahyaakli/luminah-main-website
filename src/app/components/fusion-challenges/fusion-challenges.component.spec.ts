import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionChallengesComponent } from './fusion-challenges.component';

describe('FusionChallengesComponent', () => {
  let component: FusionChallengesComponent;
  let fixture: ComponentFixture<FusionChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FusionChallengesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FusionChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
