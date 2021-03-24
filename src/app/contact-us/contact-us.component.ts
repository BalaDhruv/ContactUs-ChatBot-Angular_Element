import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactUsMessage } from '../models/message';
import { ContactUsConstants } from '../utils/constants';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ce-cu',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ContactUsComponent implements OnInit {

  fxLeftAlign = 'start end';
  fxRightAlign = 'end end';
  message = '';
  showError = false;
  messages: ContactUsMessage[] = ContactUsConstants.defaultMessages;
  disableWidget = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSendClick(): void {
    if (this.message.length < 4) {
      return;
    }
    if (this.messages.length === 2) {
      this.messages.push(this.getGenerateMessage());
      this.addAskEmailMessage();
      this.message = '';
      return;
    }
    if (this.messages.length === 4) {
      this.messages.push(this.getGenerateMessage());
      this.addAskInfoMessage();
      this.message = '';
      return;
    }
    if (this.messages.length === 6) {
      this.messages.push(this.getGenerateMessage());
      this.addThankYouMessage();
      this.message = '';
      this.disableWidget = true;
      return;
    }
  }

  getGenerateMessage(): ContactUsMessage {
    return { name: 'You', message: this.message, isMine: false };
  }

  addAskEmailMessage(): void {
    this.messages.push(ContactUsConstants.askEmailMessage);
  }

  addAskInfoMessage(): void {
    this.messages.push(ContactUsConstants.askInfoMessage);
  }

  addThankYouMessage(): void {
    this.messages.push(ContactUsConstants.thankYouMessage);
  }

  updateError(shouldShow: boolean): void {
    this.showError = shouldShow;
  }

}
