import { User } from 'src/user/entities/user.entity';

export abstract class UserRepository {
  abstract create(username: string, password: string): Promise<User>;
  abstract readAll(): Promise<User[]>;
  abstract readById(id: number): Promise<User>;
  abstract readByIdUnsafe(id: string): Promise<User>;
  abstract update(user: User): Promise<User>;
  abstract delete(id: number): Promise<User>;
  abstract readHashedPassword(id: number): Promise<string>;
}
