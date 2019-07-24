import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { StateModule } from './+state/state.module';
import { AppComponent } from './app.component';
import { DraftDashboardModule } from './draft-dashboard/draft-dashboard.module';
import { DraftModule } from './draft/draft.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { TiersModule } from './tiers/tiers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DraftModule,
    DraftDashboardModule,
    FileUploadModule,
    RouterModule.forRoot([]),
    StateModule,
    TiersModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
