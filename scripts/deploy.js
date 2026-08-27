import path from "node:path";
import { fileURLToPath } from "node:url";
import ftp from "basic-ftp";
import { config } from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIR_TO_SEND = ".output/public/";

config();

const passwordBase64 = process.env.FTP_PASSWORD_BASE64 || "";
const ftpPassword = Buffer.from(passwordBase64, "base64").toString("utf-8");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        await client.access({
            secure: true,
            secureOptions: {
                rejectUnauthorized: false,
            },
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: ftpPassword,
        });

        await client.ensureDir(process.env.FTP_REMOTE_DIR);
        // await client.clearWorkingDir(); 
        await client.uploadFromDir(path.join(__dirname, "..", DIR_TO_SEND));
        console.log("Upload complete");
    } catch (err) {
        console.error("FTP deploy failed:", err);
    }

    client.close();
}

deploy();
