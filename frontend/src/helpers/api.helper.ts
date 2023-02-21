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
    for (let data of json) {
      models.push(this.buildObject(data));
    }

    return models;
  }

  public async patch(id: number, data: JSONType): Promise<number> {
    const header: HeadersInit = {'Content-Type': 'application/json'};
    const body: BodyInit = JSON.stringify(data);
    const response: Response = await fetch(this.buildUrl(id), {method: 'PATCH', headers: header, body: body});

    return response.json();
  }

  /**
   * Sends a POST request to the server with the provided data.
   * @param data The data to send in the request body.
   * @returns A Promise that resolves with the JSON response from the server.
   */
  protected async post(data: JSONType): Promise<JSONType> {
    const header: HeadersInit = {'Content-Type': 'application/json'};
    const body: BodyInit = JSON.stringify(data);
    const response: Response = await fetch(this.buildUrl(), {method: 'POST', headers: header, body: body});

    return response.json();
  }

  protected abstract buildUrl(id?: number): string;

  protected abstract buildObject(json: JSONType): BaseModel;
}