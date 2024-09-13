const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATh = "./problems.proto";

const express = require("express");
const app = express();
app.use(express.json());

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
const packagegeDefinition = protoLoader.loadSync(PROTO_PATh, options);
const ProblemService =
  grpc.loadPackageDefinition(packagegeDefinition).ProblemService;

const client = new ProblemService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

app.get("/getAllProblems", (req, res) => {
  client.getAllProblems({}, (error, problems) => {
    if (error) {
      throw error;
    }
    res.json(problems);
  });
});

app.post("/updateProblem/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  client.updateProblem({ id, ...body }, (error, problem) => {
    if (error) {
      throw error;
    }
    res.json(problem);
  });
});

app.listen("3000", () => {
  console.log("client is running");
});
