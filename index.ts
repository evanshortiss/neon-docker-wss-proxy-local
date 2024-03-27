import { neonConfig, Pool } from "@neondatabase/serverless";
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

if (!process.env.VERCEL_ENV) {
  // Set the WebSocket proxy to work with the local instance
  neonConfig.wsProxy = (host) => `${host}:5433/v1`;
  // Disable all authentication and encryption
  neonConfig.useSecureWebSocket = false;
  neonConfig.pipelineTLS = false;
  neonConfig.pipelineConnect = false;
}

const pool = new Pool({ connectionString: "postgres://postgres:postgres@0.0.0.0:5433/postgres" });

async function main() {
    const result = await pool.query(`SELECT version()`);
    console.log(result.rows);
    process.exit(0)
}

main()
