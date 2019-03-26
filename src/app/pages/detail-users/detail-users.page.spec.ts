import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUsersPage } from './detail-users.page';

describe('DetailUsersPage', () => {
  let component: DetailUsersPage;
  let fixture: ComponentFixture<DetailUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailUsersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
