import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoints for Railway and other deployment platforms
  app.get('/api/health', (req, res) => {
    res.json({ 
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    });
  });

  // Root API endpoint
  app.get('/api', (req, res) => {
    res.json({ 
      message: "TajikTranslate API is running",
      status: "healthy"
    });
  });

  // put additional application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
