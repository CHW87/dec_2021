import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @Input()
  user = {login:'',password:''}

  constructor() { }

  ngOnInit(): void {
  }

  submit(myform: NgForm) {
    console.log(myform)
  }
}
