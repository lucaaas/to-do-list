import type { JSONType } from '../types/JSON.type';

export abstract class BaseModel {
  public id?: number;

  protected constructor(id?: number) {
    this.id = id;
  }

  public toJson(): JSONType {
    const json: JSONType = new Map();
    json.set('id', this.id);

    return json;
  }
}