import { Component, OnInit } from '@angular/core';

import { AngularMaterialModule } from '../../modules/angular-material.module';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  standalone: true,
  imports: [
    AngularMaterialModule,
    HttpClientModule,
    NgIf,
    AsyncPipe
  ],
})
export class CoursesComponent implements OnInit{

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService){
    // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list();
  }

  ngOnInit(): void {
  }

}
