import { Component, OnInit } from '@angular/core';
import { ToastMessagesService } from '../toast-messages.service';

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.scss']
})
export class ToastMessagesComponent implements OnInit {

  constructor(public toastMessageService: ToastMessagesService) { }

  ngOnInit(): void {
  }

}
