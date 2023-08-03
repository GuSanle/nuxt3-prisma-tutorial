import prisma from "@/prisma/db";
import { Users, Prisma } from "@prisma/client";
import { validatePassword } from "@/utils/utils";

export class UserService {
  /**
   * 添加用户
   * @param users
   * @returns
   */
  async createUser(user: Prisma.UsersCreateInput): Promise<Users> {
    if (user.username) {
      const exist = await prisma.users.findUnique({
        where: {
          username: user.username,
        },
      });
      if (exist) {
        return exist;
      }
    }
    user.password = bcryptPassword(user.password);
    return await prisma.users.create({ data: user });
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

  //根据用户名密码登录
  async login(username: string, password: string): Promise<boolean> {
    const user = await prisma.users.findUnique({
      where: {
        username,
      },
    });
    const status = user ? validatePassword(password, user.password) : false;
    return status;
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
