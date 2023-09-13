import * as fs from 'fs';

function readCSVFile(filename: string): Promise<string[][]> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data.split('\n');
      const dataArray = lines.map((line) => line.split(','));
      resolve(dataArray);
    });
  });
}

async function main() {
  try {
    const dataArray = await readCSVFile('./nftVault.csv'); // Replace 'input.csv' with your CSV file's name

    const outputFilePath = 'NFTVault.txt'; // Replace with the desired output file path
    const outputContent = JSON.stringify(dataArray, null, 2); // Convert array to JSON format

    fs.writeFile(outputFilePath, outputContent, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Array data stored in:', outputFilePath);
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
