/**
 * Data transfer object for creating a new item.
 */
export class CreateItemDto {
  public id: number;
  public description: string;
  public done: boolean;
}
