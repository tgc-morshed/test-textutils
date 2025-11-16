import test from "node:test";
import assert from "node:assert";

import { removeEmojis } from "../index.js";

test("remove emojis", () => {
    console.log(removeEmojis("Hello 😊"));
    assert.strictEqual(removeEmojis("Hello 😊"), "Hello ");
});

test("clean text", () => {
    console.log(cleanText("  Hello   World  "));
    assert.strictEqual(cleanText("  Hello   World  "), "Hello World");
});