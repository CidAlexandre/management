import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';

import { AmplifyService } from 'aws-amplify-angular';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AmplifyUIAngularModule],
  providers: [AmplifyService],
  exports: [AuthComponent],
})
export class AuthModule {}
