import csvToJson from 'csvtojson';

const csvFilePath = 'result.csv';

export const json = await csvToJson().fromFile(csvFilePath);

console.log(json);