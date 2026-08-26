import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Hostinger passes the port in process.env.PORT
const port = process.env.PORT || 20128;

// Set API server port to Hostinger's dynamic port
process.env.PORT = port;

// Ensure local environment logs tell us what's happening
console.log(`====================================================`);
console.log(`🚀 Starting OmniRoute AI Gateway wrapper on Port: ${port}`);
console.log(`====================================================`);

// Path to the omniroute binary inside node_modules
const binaryPath = path.join(__dirname, "node_modules", "omniroute", "bin", "omniroute.mjs");

const child = spawn("node", [binaryPath], {
  env: process.env,
  stdio: "inherit"
});

child.on("close", (code) => {
  console.log(`OmniRoute process exited with code ${code}`);
});

child.on("error", (err) => {
  console.error("Failed to start OmniRoute process:", err.message);
});
