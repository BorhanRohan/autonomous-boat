import dotenv from "dotenv";
import { server } from "./app.js";

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`⚙️ Server is running on port: ${PORT}`);
});