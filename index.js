#!/usr/bin/env node

import boxen from "boxen";
import { createSpinner } from "nanospinner";
import colors from "colors";
import util from "util";
import link from "terminal-link";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function printSkill(languages, header) {
  const availableColors = shuffle(["yellow", "red", "blue", "magenta"]);

  let output = `${header}`.green + " - ";
  languages.forEach((language, index) => {
    const randomColor =
      availableColors[Math.floor(Math.random() * availableColors.length)];
    output += language[randomColor];
    if (index !== languages.length - 1) {
      output += ", ";
    }
  });

  console.log(output);
}
async function main() {
  console.log(
    `


██╗░░██╗██╗  ████████╗██╗░░██╗███████╗██████╗░███████╗ ██╗██╗
██║░░██║██║  ╚══██╔══╝██║░░██║██╔════╝██╔══██╗██╔════╝ ██║██║
███████║██║  ░░░██║░░░███████║█████╗░░██████╔╝█████╗░░ ██║██║
██╔══██║██║  ░░░██║░░░██╔══██║██╔══╝░░██╔══██╗██╔══╝░░ ╚═╝╚═╝
██║░░██║██║  ░░░██║░░░██║░░██║███████╗██║░░██║███████╗ ██╗██╗
╚═╝░░╚═╝╚═╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝ ╚═╝╚═╝`.magenta
  );

  console.log();
  const spinner = createSpinner("Loading Sumanyu's details").start();

  async function spinnerStart() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  await spinnerStart();

  spinner.success();

  console.log(
    `
    
█▀█ █▀▀ █▀█ █▀ █▀█ █▄░█ ▄▀█ █░░   █▀▄ █▀▀ ▀█▀ ▄▀█ █ █░░ █▀
█▀▀ ██▄ █▀▄ ▄█ █▄█ █░▀█ █▀█ █▄▄   █▄▀ ██▄ ░█░ █▀█ █ █▄▄ ▄█`.yellow
  );

  console.log();

  const githubLink = link(
    "btw its awesome -> ",
    "https://github.com/Sumanyu301"
  );
  const websiteLInk = link("Coolest thing -> ", "");
  console.log(`NAME    `.green + " - " + "Sumanyu Sharma".cyan);
  console.log(`STATUS  `.green + " - " + "Student".cyan);
  console.log(`GITHUB  `.green + " - " + `${githubLink}`.cyan);
  console.log(`WEBSITE `.green + " - " + `${websiteLInk}`.cyan);

  console.log();

  console.log(
    `
    
█░░ ▄▀█ █▄░█ █▀▀ █░█ ▄▀█ █▀▀ █▀▀ █▀
█▄▄ █▀█ █░▀█ █▄█ █▄█ █▀█ █▄█ ██▄ ▄█`.yellow
  );

  console.log();
  printSkill(["C++", "C", "JavaScript", "TypeScript"], "LANGUAGES   ");
  printSkill(["React", "NextJs"], "FRAMEWORKS  ");
  printSkill(
    ["Express", "Nodejs", "WebSocket", "Prisma", "Redis", "Hono"],
    "TECHNOLOGIES"
  );
  printSkill(["MongoDb", "PostgresSQL", "SQL"], "DATABASES   ");
  printSkill(["Docker", "Kubernetes", "Github Actions", "AWS"], "DEVOPS      ");
  printSkill(["GIT", "Github"], "Tools       ");

  console.log(
    `

█▀▄▀█ █▀▀ █▀ █▀ ▄▀█ █▀▀ █▀▀
█░▀░█ ██▄ ▄█ ▄█ █▀█ █▄█ ██▄`.yellow
  );

  console.log();
  console.log(
    "I am up for hire, ready to help your company get to next heights and ofc Thanks for checking out my cli!"
      .magenta
  );
  console.log();
}

main();
