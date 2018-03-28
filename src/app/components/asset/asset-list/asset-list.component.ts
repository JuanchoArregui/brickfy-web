import { SessionService } from './../../../shared/services/session.service';
import { AssetsService } from './../../../shared/services/assets.service';
import { Asset } from './../../../shared/model/asset.model';
import { Component, OnInit } from '@angular/core';
import { Participant } from '../../../shared/model/participant.model';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  assets: Array<Asset> = [];

  constructor(private assetsService: AssetsService) { }

  ngOnInit() {
    this.assetsService.list()
      .subscribe((asset) => this.asset = asset);
  }

}
