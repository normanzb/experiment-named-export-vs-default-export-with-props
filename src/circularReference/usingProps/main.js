// Set options as a parameter, environment variable, or rc file.
let esmRequire = require("esm")(module/*, options*/)
console.log(esmRequire("./a").default.call(1))