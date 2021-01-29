import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

interface UserModelProps {
  email: string;
  password: string;
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
  username: string;

  @Column()
  password: string;
}
