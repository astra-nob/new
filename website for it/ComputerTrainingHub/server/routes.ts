import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { courses } from "./data/courses";
import { insertInquirySchema } from "@shared/schema";

export function registerRoutes(app: Express) {
  app.get("/api/courses", (_req, res) => {
    res.json(courses);
  });

  app.post("/api/inquiries", async (req, res) => {
    try {
      const data = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(data);
      res.status(201).json(inquiry);
    } catch (error) {
      res.status(400).json({ message: "Invalid inquiry data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
