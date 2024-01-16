import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from './modules/angular-material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    AngularMaterialModule
  ],
})
export class AppComponent { }
