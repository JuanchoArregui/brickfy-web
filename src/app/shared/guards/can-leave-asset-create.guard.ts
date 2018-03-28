import { AssetCreateComponent } from './../../components/asset/asset-create/asset-create.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CanLeaveAssetCreateGuard implements CanDeactivate<AssetCreateComponent> {

  canDeactivate(component: AssetCreateComponent): Observable<boolean> | Promise<boolean> | boolean {
    return component.canLeaveTheComponent();
  }
}
