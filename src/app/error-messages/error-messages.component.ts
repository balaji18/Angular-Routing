import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent implements OnInit {
  errorMessages: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.errorMessages = data['messages'];
    });
  }

}
