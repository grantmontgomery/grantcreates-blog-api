import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn({})
  id?: number;
  @Column({
    type: "varchar",
    length: 20,
    unique: true,
    collation: "en_US.utf8",
  })
  username: string;
  @Column({ type: "varchar", length: 20, collation: "en_US" })
  first_name: string;
  @Column({ type: "varchar", length: 30, collation: "en_US" })
  last_name: string;
  @Column({ type: "int", array: true, default: "{}" })
  article_ids?: number[];
  @CreateDateColumn()
  date_created?: Date;
}
