const fs = require("fs");

fs.writeFile("sample.txt", "Writing content", (err) => {
    if (err) throw err;
    console.log("Completed!");
 });