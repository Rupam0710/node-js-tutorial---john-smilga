const os = require("os");

//userInfo

const info = os.userInfo();
console.log(info);

//method returns the system uptime in seconds
console.log(`The system uptime is : ${os.uptime()}`);

//information about the system
const currentos = {
  name: os.type(),
  release: os.release(),
  total_mem: os.totalmem(),
  free_mem: os.freemem(),
};

console.log(currentos);
