import { Injectable } from '@angular/core';
import { IProject } from './iproject';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: IProject[] = [
    {
      projectId: 1,
      projectName: 'Project 1',
    },
    {
      projectId: 2,
      projectName: 'Project 2',
    },
    {
      projectId: 3,
      projectName: 'Project 3',
    },
  ];

  constructor() { }

  public getProjects(): Observable<IProject[]> {
    return of(this.projects);
  }
}
