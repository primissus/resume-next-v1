export default function removeTrailingSlash(path: string) {
    if (path.length > 1 && path.endsWith('/')) {
        return path.slice(0, -1);
    }
    return path;
}
