const fs = require("fs");
const path = require("path");
const successColor = "\x1b[32m%s\x1b[0m";
const checkSign = "\u{2705}";
require("dotenv").config({ path: "src/.env" });

const envFile = `export const environment = {
    production: true,
    algoliaApplicationId: '${process.env.ALGOLIA_APPLICATION_ID}',
    algoliaApiKey: '${process.env.ALGOLIA_API_KEY}',
    algoliaIndex: '${process.env.ALGOLIA_INDEX}'
};
`;
const targetPath = path.join(
  __dirname,
  "./src/environments/environment.development.ts"
);
fs.writeFile(targetPath, envFile, (err) => {
  if (err) {
    console.error(err);
    throw err;
  } else {
    console.log(
      successColor,
      `${checkSign} Successfully generated environment.development.ts`
    );
  }
});
