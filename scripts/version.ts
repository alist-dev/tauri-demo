import { writeFileSync } from "fs";
import tauriConfig from "../src-tauri/tauri.conf.json";

const version = process.env.VERSION as string;
tauriConfig.package.version = version.slice(1);

writeFileSync(
  "src-tauri/tauri.conf.json",
  JSON.stringify(tauriConfig, null, 4),
  "utf-8"
);