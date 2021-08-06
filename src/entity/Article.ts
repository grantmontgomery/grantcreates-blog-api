import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;
  @Column("varchar")
  title: string;
  @Column("varchar")
  user_id: string;
  @Column("date")
  date_created: Date;
  @Column("date")
  date_updated: Date;
  @Column("text")
  text: string;
  @Column()
  listed: boolean;
}
