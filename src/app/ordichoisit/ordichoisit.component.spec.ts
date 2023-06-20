import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdichoisitComponent } from './ordichoisit.component';

describe('OrdichoisitComponent', () => {
  let component: OrdichoisitComponent;
  let fixture: ComponentFixture<OrdichoisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdichoisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdichoisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
