import { promises as fs } from 'fs';
import { ConvexHttpClient } from "convex/browser";
import { api } from "./convex/_generated/api";

async function createCompaniesFromFile() {
  const client = new ConvexHttpClient('https://lovable-poodle-848.convex.cloud');
  const data = await fs.readFile('companies.txt', 'utf-8');
  const lines = data.split('\n');

  for (const line of lines) {
    const name = line.trim();
    await client.mutation(api.companies.createCompany, {
      name: name,
    });
  }
}

createCompaniesFromFile().catch(console.error);
