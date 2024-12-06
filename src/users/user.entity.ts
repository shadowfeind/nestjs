import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInserts() {
    console.log('inserted user with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('User updated', this.id);
  }

  @AfterRemove()
  logDelete() {
    console.log('Deleted user with id', this.id);
  }
}
