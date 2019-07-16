import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DataEntryModule } from './data-entry/data-entry.module';
import { DraftModule } from './draft/draft.module';
import { TiersModule } from './tiers/tiers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TiersModule,
    DraftModule,
    DataEntryModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
