import app from "./app";
const port: number = 3000;
let server ;

const bootsrap = async () => {
  server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
}

bootsrap().catch((error) => {
  console.error("Error starting the server:", error);
  process.exit(1);
});



