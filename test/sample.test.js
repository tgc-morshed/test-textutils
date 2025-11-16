import test from "node:test";
import assert from "node:assert";

import { removeEmojis, cleanText, summarizeText } from "../index.js";

test("remove emojis", () => {
    console.log(removeEmojis("Hello 😊"));
    assert.strictEqual(removeEmojis("Hello 😊"), "Hello ");
});

test("clean text", () => {
    console.log(cleanText("  Hello   World  "));
    assert.strictEqual(cleanText("  Hello   World  "), "Hello World");
});

test("summarize text", () => {
    console.log(summarizeText("Hello World", 3));
    assert.strictEqual(summarizeText("Hello World", 3), "Hello World");
});