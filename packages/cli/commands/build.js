const path = require("path");
module.exports = (getCommandHandler) => ({
  command: "build [configPath] [functionsPath] [distDir]",
  aliases: ["b"],
  desc: "Builds local project",
  builder: (yargs) =>
    yargs
      .options({
        configPath: {
          type: "string",
          description: "Path to mechanic config file",
        },
        functionsPath: {
          type: "string",
          description: "Path to directory containing design functions",
        },
        inputsPath: {
          type: "string",
          description: "Path to directory containing custom input components",
        },
        distDir: {
          type: "string",
          description: "Custom build directory",
        },
      })
      .default("configPath", path.normalize("./mechanic.config.js"))
      .default("functionsPath", path.normalize("./functions"))
      .default("distDir", path.normalize("./dist"))
      .default("inputsPath", path.normalize("./inputs")),
  handler: getCommandHandler("build"),
});
