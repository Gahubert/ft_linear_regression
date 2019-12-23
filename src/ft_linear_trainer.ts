import fs from 'fs';
import csv from 'csv-parser';

async function _parseTrainingFile(path: string) {
    const results: any[] = [];

    try {
        const pipe = fs.createReadStream(path).pipe(csv()).on('data', (data) => results.push(data));
        pipe.on('end', () => {console.log(results);})
    }
    catch {
        console.log("Path to file incorrect or file corrupted");
        return [];
    }
    console.log(results + "bite");
    return [{x: 15, y: 15}];
}

async function main() {
    if (process.argv.length !== 3)
        return console.log(`Usage: node ${process.argv[1]} "[PATH_TO_TRAINING_FILE]"`);
    const tab: {x: number, y: number}[] = await _parseTrainingFile(process.argv[2]);
}

main();