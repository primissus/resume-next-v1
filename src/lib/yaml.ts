import fs from 'fs';
import { join } from 'path';
import { parse as parseYaml } from 'yaml';
import { postsDir } from '@constants/posts';

export function readYamlPost(postName: string, locale: string) {
    const fullPath = join(postsDir, locale, `${postName}.yaml`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    console.log('fullPath', fullPath);
    //console.log('fileContents', fileContents);

    return parseYaml(fileContents);
}
