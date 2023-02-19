import type { BaseModel } from '../models/base.model';
import type { JSONType } from '../types/JSON.type';

export abstract class ApiHelper {
  protected readonly url: string = 'http://127.0.0.1:3000';

  /**
   * Get all resources of the specified path
   * @param path
   */
  public async getAll(): Promise<Array<BaseModel>> {
    const response: Response = await fetch(this.buildUrl());
    const json: Array<JSONType> = await response.json();

    const models: Array<BaseModel> = [];
    for(let data of json) {
      models.push(this.buildObject(data));
    }

    return models;
  }

  protected async post(data: JSONType): Promise<JSONType> {
    const header: HeadersInit = {'Content-Type': 'application/json'};
    const body: BodyInit = JSON.stringify(data);
    const response: Response = await fetch(this.buildUrl(), {method: 'POST', headers: header, body: body});

    return response.json();
  }

  protected abstract buildUrl(): string;

  protected abstract buildObject(json: JSONType): BaseModel;
}