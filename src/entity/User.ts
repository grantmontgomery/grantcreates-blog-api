import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("varchar")
  username: string;
  @Column("varchar")
  firstname: string;
  @Column("varchar")
  lastname: string;
  @Column("int", { array: true })
  article_ids: number[];
}
