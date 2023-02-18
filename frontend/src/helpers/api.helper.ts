import type { BaseModel } from '../models/base.model';
import type { JSONType } from '../types/JSON.type';

export abstract class ApiHelper {
  protected readonly url: string = 'localhost:3000';

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

  public async post(data: JSONType) {
    const response: Response = await fetch(this.buildUrl(), {method: 'POST', body: JSON.stringify(data)});
    return response.status;
  }

  public abstract buildUrl(): string;

  public abstract buildObject(json: JSONType): BaseModel;
}