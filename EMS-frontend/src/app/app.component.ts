import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  template: `
    <mat-toolbar color="primary">Employee Management System</mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  private previousClass: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const route = event.urlAfterRedirects;
        const newClass = this.getRouteClass(route);

        // Remove the previous class from body
        if (this.previousClass) {
          document.body.classList.remove(this.previousClass);
        }

        // Add the new class to body
        if (newClass) {
          document.body.classList.add(newClass);
          this.previousClass = newClass;
        }
      }
    });
  }

  ngOnDestroy(): void {
    // Remove class on component destroy
    if (this.previousClass) {
      document.body.classList.remove(this.previousClass);
    }
  }

  getRouteClass(route: string): string {
    if (route.includes('/home')) return 'home-background';
    if (route.includes('/employees')) return 'employees-background';
    if (route.includes('/add-employee')) return 'add-employee-background';
    return 'default-background';
  }
}