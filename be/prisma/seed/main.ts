import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const seed = async () => {
  const p = new PrismaClient();
  await p.user.deleteMany({});
  await p.user.createMany({
    data: [
      { username: '田中太郎', password: await hash('password1', 10) },
      { username: '山田花子', password: await hash('password2', 10) },
      { username: '佐藤一郎', password: await hash('password3', 10) },
      { username: '村上玲奈', password: await hash('password4', 10) },
    ],
  });
};
seed();
