import { BaseApiService } from './base-api.service';
import { Asset } from '../model/asset.model';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AssetsService extends BaseApiService {
  private static readonly BRICKFY_API = `${BaseApiService.BASE_API}/assets`;

  constructor(private http: Http) {
    super();
  }

  list(): Observable<Array<Asset>> {
    return this.http.get(AssetsService.BRICKFY_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id: string): Observable<Asset> {
    return this.http.get(`${AssetsService.BRICKFY_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  create(asset: Asset): Observable<Asset> {
    return this.http.post(AssetsService.BRICKFY_API, asset.asFormData(), new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  edit(asset: Asset): Observable<Asset> {
    return this.http.put(`AssetsService.BRICKFY_API/${asset.id}`, asset.asFormData(), new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  delete(id: string): Observable<void> {
    return this.http.delete(`${AssetsService.BRICKFY_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
