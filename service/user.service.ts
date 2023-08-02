import prisma from "@/prisma/db";
import { Users, Prisma } from "@prisma/client";

export class UserService {
  /**
   * 添加用户
   * @param users
   * @returns
   */
  async createUser(users: Prisma.UsersCreateInput): Promise<Users> {
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

  async updateUser(params: {
    where: Prisma.UsersWhereUniqueInput;
    data: Prisma.UsersUpdateInput;
  }): Promise<Users> {
    const { where, data } = params;
    return prisma.users.update({
      data,
      where,
    });
  }

  async findFirst(): Promise<Users | null> {
    // const { where } = params;
    return prisma.users.findFirst();
  }

  // async emailLogin() {}

  // async findAll(): Promise<object | null> {
  //   return await prisma.users.findMany();
  // }
  // async findById(id: number): Promise<object | null> {
  //   return prisma.users.findUnique({
  //     where: {
  //       id,
  //     },
  //     select: {
  //       id: true,
  //       name: true,
  //     },
  //   });
  // }
  // async login(): Promise<object | null> {
  //   return await prisma.users.findMany();
  // }
  // async add(data: any): Promise<object | null> {
  //   return prisma.users.create({ data });
  // }
  // async delete(): Promise<object | null> {
  //   return await prisma.users.findMany();
  // }
  // async update(): Promise<object | null> {
  //   return await prisma.users.findMany();
  // }
}
