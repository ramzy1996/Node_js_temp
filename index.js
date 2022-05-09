let fs = require("fs");

// let content = fs.readFileSync("./data.txt", { encoding: "utf-8" });

// console.log(content);
// fs.writeFileSync("./dummy001.txt", "Hello i am ramzy");

fs.appendFileSync("./dummy.txt", "\nHow are you guys");
