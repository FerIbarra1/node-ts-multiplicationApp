import { yarg } from "./config/plugins/yargs.plugin";
import { serverApp } from "./presentation/server-app";

(async () => {
  await main();
})()

async function main() {

  const { b: base, l: limit, s: showTable, d: destination, n: name } = yarg;

  serverApp.run({ base, limit, showTable, destination, name });
}