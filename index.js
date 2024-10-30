#!/usr/bin/env node
const { spawn } = require("child_process");

const validate = ({ username, password, email }) => {
  if (!username) {
    console.log("Please provide username via NPM_USERNAME");
    process.exit(1);
  }

  if (!password) {
    console.log("Please provide password via NPM_PASSWORD");
    process.exit(1);
  }

  if (!email) {
    console.log("Please provide email via NPM_EMAIL");
    process.exit(1);
  }
};

const login = ({ username, password, email, scope, registry, token }) => {
  validate({ username, password, email });
  // Set npm config for authentication
  const npmConfigCommands = [
    `config set ${scope ? `${scope}:` : ''}username=${username}`,
    token ? `config set //registry.npmjs.org/:_authToken=${token}` : null,
    `config set ${scope ? `${scope}:` : ''}_authToken=${Buffer.from(
      `${username}:${password}`
    ).toString("base64")}`,
    `config set email=${email}`,
    registry ? `config set registry=${registry}` : null
  ].filter(Boolean);

  npmConfigCommands.forEach(command => {
    spawn("npm", command.split(" "), { stdio: "inherit" });
  });
};

login({
  username: process.env.NPM_USERNAME,
  password: process.env.NPM_PASSWORD,
  email: process.env.NPM_EMAIL,
  scope: process.env.NPM_SCOPE,
  registry: process.env.NPM_REGISTRY,
  token: process.env.NPM_TOKEN
});
