import express from "express";
import type { Application, NextFunction, Request, Response } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import { PORT } from "./config/config.service";
import AppError from "./common/middleware/globalErrHandler.middleware";

const app: Application = express();
const port: number = PORT;

const bootstrap = async () => {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message:
      "Too many requests from this IP, please try again after 15 minutes",
    legacyHeaders: false,
    skipFailedRequests: true,
  });

  app.use(cors(), helmet(), limiter, express.json());

  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "Welcome on my Social Media App ^^" });
  });

  app.use("{/*demo}", (req: Request, res: Response, next: NextFunction) => {
    throw new AppError(
      `Url: ${req.originalUrl} With Method: ${req.method} Not Found`,
      404,
    );
  });

  app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      message: err.message,
      statusCode,
      stack: err.stack,
    });
  });
};

app.listen(port, () =>
  console.log(`Social Media app listening on port ${port}!`),
);

export default bootstrap;
