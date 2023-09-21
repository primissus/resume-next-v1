import fs from 'fs';
import { join } from 'path';
import { parse as parseYaml } from 'yaml';
import { postsDir } from '@constants/posts';
import { defaultLocale } from '@lib/i18n';

export function readYamlPost(postName: string, locale: string) {
    const fullPath = join(postsDir, locale || defaultLocale, `${postName}.yaml`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    return parseYaml(fileContents);
}
