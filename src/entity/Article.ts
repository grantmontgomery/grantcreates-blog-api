import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column("text")
  author: string;
  @Column("text")
  category: string;
  @Column("date")
  date_created: Date;
  @Column("date")
  date_updated: Date;
  @Column("text")
  pic_url_preview: string;
  @Column("text")
  pic_url: string;
  @Column("text")
  text: string;
}
