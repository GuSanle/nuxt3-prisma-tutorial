import prisma from "@/prisma/db";
import { Prisma } from "@prisma/client";

export class UserService {
  async createUser(users: Prisma.UsersCreateInput) {
    if (users.email) {
      const exist = await prisma.users.findUnique({
        where: {
          email: users.email,
        },
      });
      if (exist) {
        return exist;
      }
    }
    return await prisma.users.create({ data: users });
  }

  async findAll(): Promise<object | null> {
    return await prisma.users.findMany();
  }
  async findById(id: number): Promise<object | null> {
    return prisma.users.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
      },
    });
  }
  async login(): Promise<object | null> {
    return await prisma.users.findMany();
  }
  async add(data: any): Promise<object | null> {
    return prisma.users.create({ data });
  }
  async delete(): Promise<object | null> {
    return await prisma.users.findMany();
  }
  async update(): Promise<object | null> {
    return await prisma.users.findMany();
  }
}
