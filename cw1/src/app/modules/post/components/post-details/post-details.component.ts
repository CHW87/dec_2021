import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails:any;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
      this.postDetails=history.state
       // this.router.getCurrentNavigation()?.extras.state
    })
  }

  ngOnInit(): void {
  }

}
