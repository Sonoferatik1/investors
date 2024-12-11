import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createCompany = mutation({
  args: {
    name: v.string(),
    description: v.optional(v.string()),
    founders: v.optional(v.array(v.id("founders"))),
  },
  handler: async (ctx, args) => {
    const newCompanyId = await ctx.db.insert("companies", {
      name: args.name,
      description: args.description,
      founders: args.founders,
    });
    return newCompanyId;
  },
});

export const getCompanies = query({
  handler: async (ctx) => {
    return await ctx.db.query("companies").collect();
  },
});
