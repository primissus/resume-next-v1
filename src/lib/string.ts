export function joinWith(separator: string, items: (string | undefined)[]) {
    return items.filter((item) => item != null).join(separator);
}
