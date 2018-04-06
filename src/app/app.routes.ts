// Import Guards:
import { CanLeaveAssetCreateGuard } from './shared/guards/can-leave-asset-create.guard';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';

// Import Resolvers:
import { AssetDetailsResolverGuard } from './shared/resolvers/asset-details-resolver.guard';

// Import my own Components:
// index
import { IndexComponent } from './components/index/index.component';
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



import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: IndexComponent},
    { path: 'participants', canActivate: [IsAuthenticatedGuard], component: ParticipantListComponent},
    {
        path: 'participants',
        canActivate: [IsAuthenticatedGuard],
        component: ParticipantBaseComponent,
        children: [
            {
                path: ':id',
                canActivate: [IsAuthenticatedGuard],
                component: ParticipantProfileComponent
            }
        ]
    },
    { path: 'assets', canActivate: [IsAuthenticatedGuard], component: AssetListComponent},
    {
        path: 'assets',
        canActivate: [IsAuthenticatedGuard],
        component: AssetBaseComponent,
        children: [
            {
                path: 'new',
                canActivate: [IsAuthenticatedGuard],
                canDeactivate: [CanLeaveAssetCreateGuard],
                component: AssetCreateComponent
            },
            {
                path: ':id',
                canActivate: [IsAuthenticatedGuard],
                resolve: {
                    asset: AssetDetailsResolverGuard
                },
                component: AssetItemComponent
            }
        ]
    },
    { path: 'transactions', canActivate: [IsAuthenticatedGuard], component: TransactionListComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
];
