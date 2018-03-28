import { AssetsService } from './../services/assets.service';
import { Observable } from 'rxjs/Rx';
import { Asset } from './../model/asset.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class AssetDetailsResolverGuard implements Resolve<Asset> {

  constructor(
    private router: Router,
    private assetsService: AssetsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Asset> {
    return this.assetsService
      .get(route.params['id'])
      .catch(error => {
        this.router.navigate(['/assets']);
        return Observable.of(error);
      });
  }
}
