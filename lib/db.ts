import { PrismaClient } from "./generated/prisma";
import { PrismaNeon } from "@prisma/adapter-neon";

const poolConfig = { connectionString: process.env.DATABASE_URL! };
const adapter = new PrismaNeon(poolConfig);

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;