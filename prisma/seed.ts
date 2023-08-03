import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();
const adminPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);
const adminUsername = process.env.ADMIN_USERNAME;

async function main() {
  const admin = await prisma.users.upsert({
    where: { username: adminUsername },
    update: {},
    create: {
      username: adminUsername,
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
