import {printSchema} from 'graphql';

import {schema as rawSchema} from './server';

import fs from 'fs';

async function execute() {
  // Generate schema
  const schema = printSchema(rawSchema);

  fs.writeFile('src/.generated/schema.graphql', schema, function (err) {
    if (err) return console.log(err);
    console.info('Gateway schema generated 🌟');
  });
}

execute();
