const lockVerify = require("lock-verify");
lockVerify(".")
  .then((result) => {
    result.warnings.forEach((w) => console.error("Warning:", w));
    if (!result.status) {
      console.log(
        "\x1b[31m",
        "\nmismatch error between package-lock.json and package.json, run: npm install to fix it.\n"
      );
      result.errors.forEach((e) => console.error(e));
      process.exit(1);
    }
  })
  .catch((e) => {
    console.log("\x1b[31m", "\nlock-verify script failed to run\n");
    process.exit(1);
  });