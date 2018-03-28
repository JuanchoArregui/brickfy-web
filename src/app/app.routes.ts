import { CanLeaveAssetCreateGuard } from './shared/guards/can-leave-asset-create.guard';
import { AssetBaseComponent } from './components/asset/asset-base/asset-base.component';
import { AssetCreateComponent } from './components/asset/asset-create/asset-create.component';
import { AssetDetailsResolverGuard } from './shared/resolvers/asset-details-resolver.guard';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { IndexComponent } from './components/misc/index/index.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { LoginComponent } from './components/misc/login/login.component';
import { AssetItemComponent } from './components/asset/asset-item/asset-item.component';
import { AssetListComponent } from './components/asset/asset-list/asset-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: IndexComponent},
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
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
];
