export default function cleanSet(set, startString) {
    if (startString === undefined || typeof startString !== 'string') return '';

    const result = [];

    for (const item of set.values())
        if (item.startsWith(startString) && typeof(item) === "string")
            result.push(item.slice(startString.length));

    return result.join('-');
}
