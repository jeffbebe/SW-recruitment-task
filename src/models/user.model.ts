import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

interface UserModelProps {
  email: string;
  password: string;
  salt: string;
  heroID: number;
  heroName: string;
}

@Entity({
  name: "user",
})
export class UserModel {
  public static create(data: Partial<UserModelProps>): UserModel {
    const entity = new UserModel();
    Object.assign(entity, data);
    return entity;
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  heroID: string;

  @Column()
  heroName: string;

  @Column()
  password: string;

  @Column()
  salt: string;
}
