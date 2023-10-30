import fs from 'fs';
import path from 'path';

export const { version } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../package.json'), 'utf8').toString());
