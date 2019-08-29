import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.css']
})
export class ContentBlockComponent implements OnInit {

  public projectId: number;

  constructor(private userService: UserService, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params => this.projectId = Number(params.projectId));
  }

  ngOnInit() {
  }

}
