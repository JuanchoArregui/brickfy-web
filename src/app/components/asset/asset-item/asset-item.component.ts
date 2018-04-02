import { AssetsService } from './../../../shared/services/assets.service';
import { Component, OnInit } from '@angular/core';
import { Asset } from '../../../shared/model/asset.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asset-item',
  templateUrl: './asset-item.component.html',
  styleUrls: ['./asset-item.component.css']
})
export class AssetItemComponent implements OnInit {
  asset: Asset = new Asset();
  error: Object;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private assetsService: AssetsService) { }

  ngOnInit() {
    this.routes
      .data
      .subscribe(data => {
        this.asset = data['asset'];
      });
  }

  onClickDelete() {
    if (window.confirm('Are you sure?')) {
      this.assetsService.delete(this.asset.id)
        .subscribe(() => {
          this.router.navigate(['/assets']);
        });
    }
  }

}
