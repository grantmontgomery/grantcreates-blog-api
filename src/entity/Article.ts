import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "articles" })
export class Article {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "varchar", length: 100, collation: "en_US" })
  title: string;
  @Column({ type: "varchar", length: 75, collation: "en_US" })
  author: string;
  @Column({ type: "integer" })
  user_id: number;
  @CreateDateColumn()
  date_created: Date;
  @UpdateDateColumn()
  date_updated: Date;
  @Column({ type: "text", collation: "en_US.utf8" })
  text: string;
  @Column({ type: "boolean", default: false })
  listed: boolean;
}
