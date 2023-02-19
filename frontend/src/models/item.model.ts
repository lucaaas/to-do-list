import type { JSONType } from '../types/JSON.type';
import { BaseModel } from './base.model';

export class ItemModel extends BaseModel {
  public description: string;
  public done: boolean = false;

  constructor(description: string, done: boolean, id?: number) {
    super(id);
    this.description = description;
    this.done = done;
  }

  public static fromJson(json: JSONType): ItemModel {
    return new this(json.description, json.done, json.id);
  }

  public toJson(): JSONType {
    const json: JSONType = super.toJson();
    json.description = this.description;
    json.done = this.done;

    return json;
  }
}