import { db } from "@/server/utils/db";
// import bcrypt from "bcrypt";

export class UserService {
  async findAll(): Promise<object | null> {
    return await db.user.findMany();
  }
  async findById(id: number): Promise<object | null> {
    return db.user.findUnique({
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
    return await db.user.findMany();
  }
  async add(data: any): Promise<object | null> {
    return db.user.create({ data });
  }
  async delete(): Promise<object | null> {
    return await db.user.findMany();
  }
  async update(): Promise<object | null> {
    return await db.user.findMany();
  }
}
