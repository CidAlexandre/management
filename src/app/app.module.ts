import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AboutModule } from './about/about.module';
import { DashKitModule } from './dashkit/dashkit.module';

import { AmplifyService } from 'aws-amplify-angular';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
    AmplifyUIAngularModule,
    AuthModule,
    FormsModule,
    UserModule,
    AboutModule,
    DashKitModule,
  ],
  declarations: [AppComponent],
  providers: [AmplifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
