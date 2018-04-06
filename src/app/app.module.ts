import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';
import { CanLeaveAssetCreateGuard } from './shared/guards/can-leave-asset-create.guard';
import { AssetDetailsResolverGuard } from './shared/resolvers/asset-details-resolver.guard';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import './rxjs.operators';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

// Import my own Services:
import { AssetsService } from './shared/services/assets.service';
import { SessionService } from './shared/services/session.service';
import { ParticipantsService } from './shared/services/participants.service';

// Import my own Components:
// index and nav
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// login-signup
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
// Assets
import { AssetItemComponent } from './components/asset/asset-item/asset-item.component';
import { AssetListComponent } from './components/asset/asset-list/asset-list.component';
import { AssetCreateComponent } from './components/asset/asset-create/asset-create.component';
import { AssetBaseComponent } from './components/asset/asset-base/asset-base.component';
// Participants
import { ParticipantProfileComponent } from './components/participant/participant-profile/participant-profile.component';
import { ParticipantListComponent } from './components/participant/participant-list/participant-list.component';
import { ParticipantBaseComponent } from './components/participant/participant-base/participant-base.component';
// Transactions
import { TransactionListComponent } from './components/transaction/transaction-list/transaction-list.component';


// Import Material Components:
// Check more info at: https://material.angular.io/components/categories
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';



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
    ParticipantBaseComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    // Import Material Components:
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
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
