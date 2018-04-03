import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';
import { CanLeaveAssetCreateGuard } from './shared/guards/can-leave-asset-create.guard';
import { AssetDetailsResolverGuard } from './shared/resolvers/asset-details-resolver.guard';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import './rxjs.operators';

import { AppComponent } from './app.component';
import { AssetListComponent } from './components/asset/asset-list/asset-list.component';
import { AssetsService } from './shared/services/assets.service';
import { SessionService } from './shared/services/session.service';
import { routes } from './app.routes';
import { AssetItemComponent } from './components/asset/asset-item/asset-item.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { ParticipantsService } from './shared/services/participants.service';
import { AssetCreateComponent } from './components/asset/asset-create/asset-create.component';
import { AssetBaseComponent } from './components/asset/asset-base/asset-base.component';
import { IndexComponent } from './components/index/index.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ParticipantProfileComponent } from './components/participant/participant-profile/participant-profile.component';
import { ParticipantListComponent } from './components/participant/participant-list/participant-list.component';
import { ParticipantBaseComponent } from './components/participant/participant-base/participant-base.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetListComponent,
    AssetItemComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    AssetCreateComponent,
    AssetBaseComponent,
    IndexComponent,
    SidebarComponent,
    ParticipantProfileComponent,
    ParticipantListComponent,
    ParticipantBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AssetsService,
    SessionService,
    ParticipantsService,
    IsAuthenticatedGuard,
    AssetDetailsResolverGuard,
    CanLeaveAssetCreateGuard,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
