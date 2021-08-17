import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastMessagesService {
  messages: string[] = [];
  private savedMessages: string[] = [];
  resetTimer: any = '';

  constructor() {}

  add(message: string) {
    if (this.resetTimer) {
      clearTimeout(this.resetTimer);
    }
    
    this.messages = [...this.savedMessages, message];
    this.savedMessages = [...this.messages];
    console.log(this.messages, this.savedMessages)

    this.resetTimer = setTimeout(() => {
      this.hideMessages();
    }, 3000);
  }

  hideMessages() {
    this.messages.length = 0;
  }
  
  clear() {
    this.messages.length = 0;
    this.savedMessages.length = 0;
  }
}
