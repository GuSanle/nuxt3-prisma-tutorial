import { PrismaClient } from "@prisma/client";
import * as crypto from "crypto";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();
const uuid = crypto.randomUUID();
const adminPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);

async function main() {
  const admin = await prisma.users.upsert({
    where: { email: "slgu@cybozu.cn" },
    update: {},
    create: {
      uuid,
      email: "slgu@cybozu.cn",
      name: "slgu",
      password: adminPassword,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
