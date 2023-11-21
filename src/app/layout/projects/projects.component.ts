import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  selectedProject: any = {};

  projects = [
    { title: 'Project 1', description: 'Description 1', img: 'assets/img/portfolio/cabin.png' },
    { title: 'Project 2', description: 'Description 2', img: 'assets/img/portfolio/cabin.png' },
    { title: 'Project 3', description: 'Description 3', img: 'assets/img/portfolio/cabin.png' },
    { title: 'Project 4', description: 'Description 4', img: 'assets/img/portfolio/cabin.png' },
    { title: 'Project 5', description: 'Description 5', img: 'assets/img/portfolio/cabin.png' },
  ];


  constructor() {
  }

  onProjectSelect(item: any): void {
    this.selectedProject = item;
  }
}
