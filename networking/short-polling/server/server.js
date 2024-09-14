import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

let problems = [
  {
    id: 0,
    title: "Polyfill of Array.map",
    description: "Some description",
  },
  {
    id: 1,
    title: "Polyfill of Promise.all()",
    description: "Some description",
  },
];

app.get("/api/problems", (req, res) => {
  res.json(problems);
});

app.post("/api/problems", (req, res) => {
  const body = req.body;
  problems = [...problems, body];
  res.json(problems);
});

app.patch("/api/problems/:id", (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const problem = problems.find((p) => p.id == id);
  problems = problems.map((p) => {
    if (p.id == id) {
      return {
        ...problem,
        ...body,
      };
    }
    return p;
  });
  res.json(problems);
});

app.listen(PORT, () => {
  console.log(`server up and running on ${PORT}`);
});
