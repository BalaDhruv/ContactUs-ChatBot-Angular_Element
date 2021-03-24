import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    ContactUsComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const el = createCustomElement(ContactUsComponent, { injector: this.injector });

    customElements.define('ce-cu', el);
  }
}
