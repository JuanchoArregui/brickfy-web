import { AssetsService } from './../../../shared/services/assets.service';
import { Asset } from './../../../shared/model/asset.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.css']
})
export class AssetCreateComponent {
  asset: Asset = new Asset();
  apiError: string;
  @ViewChild('imageFile') imageFile;
  @ViewChild('assetForm') assetForm;

  constructor(
    private router: Router,
    private assetsService: AssetsService) {}


  addSpec(spec: HTMLInputElement) {
    if (spec.value) {
      this.asset.specs.push(spec.value);
      spec.value = '';
    }
  }

  removeSpec(spec: string) {
    this.asset.specs = this.asset.specs.filter(s => s !== spec);
  }

  onSubmitasset(assetForm: NgForm) {
    const imageFile = this.imageFile.nativeElement;
    if (imageFile.files && imageFile.files[0]) {
      this.asset.image = imageFile.files[0];
      this.assetsService.create(this.asset)
        .subscribe(
          (asset) => {
            assetForm.reset();
            this.router.navigate(['/assets']);
          },
          (error) => {
            this.apiError = error;
          }
      );
    }
  }

  canLeaveTheComponent(): boolean {
    if (this.assetForm.dirty) {
      return window.confirm(`
        Unsaved changes.
        Are you sure you want to leave?
    `);
    } else {
      return true;
    }
  }
}
