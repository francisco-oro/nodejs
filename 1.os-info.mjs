import os from "node:os";

console.log('Operative System Info');
console.log('------------------------');

console.log("OS Name", os.platform());
console.log("OS Version", os.release());
console.log("Architecture", os.arch());
console.log("CPUS", os.cpus());
console.log("Free memory", os.freemem() / 1024 / 1024);
console.log("Total memory", os.totalmem() / 1024 / 1024);
console.log('uptime ', os.uptime() / 60 / 60);