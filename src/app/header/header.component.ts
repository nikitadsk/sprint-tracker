import { Component, OnInit } from '@angular/core';
import { IProject } from '../iproject';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public title: string = 'Sprint Tracker';
  public projects: IProject[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  	this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }
}
