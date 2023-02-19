import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Represents an Item entity in the database.
 *
 * @property id The unique identifier of the item in the database.
 * @property description The description of the item.
 * @property done A boolean indicating if the item is done or not.
 */
@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  done: boolean;
}
