export function summarizeText(text, wordLimit = 100, separator = ' ') {
    const words = text.split(/\s+/);
    const summary = words.slice(0, wordLimit).join(separator);
    return summary;
}
