import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPokedexComponent } from './about-pokedex.component';

describe('AboutPokedexComponent', () => {
  let component: AboutPokedexComponent;
  let fixture: ComponentFixture<AboutPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPokedexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
