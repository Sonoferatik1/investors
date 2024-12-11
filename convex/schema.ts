import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  companies: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    founders: v.optional(v.array(v.id("founders"))),
  }),
  ventureCapital: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    thesis: v.optional(v.string()),
    industries: v.optional(v.array(v.string())),
    companyId: v.id("companies"),
  }),
  investors: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    ventureCapitalId: v.id("ventureCapital"),
  }),
  founders: defineTable({
    name: v.string(),
    description: v.optional(v.string()  ),
    title: v.optional(v.string()),
    linkedinHeadshotURL: v.optional(v.string()),
    linkedinURL: v.optional(v.string()),
    companyId: v.id("companies"),
  }),
});
