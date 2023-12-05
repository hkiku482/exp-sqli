import { User } from 'src/user/entities/user.entity';
import { UserRepository } from '../entities/user.repository';
import { prismaClient } from 'src/utils/prisma';

export class UserDb extends UserRepository {
  async create(username: string, password: string): Promise<User> {
    try {
      const p = prismaClient;
      const user = await p.user.create({
        data: { username: username, password: password },
      });
      return this.makeUser(user);
    } catch (error) {
      throw error;
    }
  }

  async readAll(): Promise<User[]> {
    try {
      const p = prismaClient;
      const user = await p.user.findMany({});
      return user.map((u) => {
        return this.makeUser(u);
      });
    } catch (error) {
      throw error;
    }
  }

  async readById(id: number): Promise<User> {
    const p = prismaClient;
    const user = await p.user.findUniqueOrThrow({ where: { id: id } });
    return this.makeUser(user);
  }

  async readByIdUnsafe(id: string): Promise<any> {
    try {
      const p = prismaClient;
      const sql = `SELECT * FROM User WHERE id = ${id}`;
      console.log(`injected full sql: ${sql}`);
      const res = await p.$queryRawUnsafe(sql);
      return res;
    } catch (error) {
      return null;
    }
  }

  async update(user: User): Promise<User> {
    try {
      const p = prismaClient;
      const dbUser = await p.user.update({
        where: {
          id: user.id,
        },
        data: {
          username: user.username,
        },
      });
      return this.makeUser(dbUser);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<User> {
    try {
      const p = prismaClient;
      const user = await p.user.delete({ where: { id } });
      return this.makeUser(user);
    } catch (error) {
      throw error;
    }
  }

  async readHashedPassword(id: number): Promise<string> {
    try {
      const p = prismaClient;
      const user = await p.user.findUniqueOrThrow({ where: { id } });
      return user.password;
    } catch (error) {
      throw error;
    }
  }

  private makeUser(user: {
    id: number;
    username: string;
    password: string;
  }): User {
    return new User(user.id, user.username);
  }
}
