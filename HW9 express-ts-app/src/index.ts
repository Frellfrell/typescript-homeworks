import express, { Request, Response } from "express";
const app = express();
const PORT = 3000;

// Middleware для обработки JSON
app.use(express.json());

// GET маршрут
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript!");
});

// POST маршрут
app.post("/data", (req: Request, res: Response) => {
  const body = req.body;

  res.json({
    message: "Данные получены",
    data: body
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});