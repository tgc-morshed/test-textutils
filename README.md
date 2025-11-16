# text-textutils

A professional utility toolkit for working with text.  
Includes emoji removal, text cleaning, and text summarizing.

---

# 🚀 Features

### ✔ removeEmojis  
Remove all emojis from a text.

### ✔ cleanText  
Trim, remove extra spaces, normalize whitespace.

### ✔ summarizeText  
Summarize text by word count (non-AI).

---

# 📦 Installation

npm install text-textutils

pgsql
Copy code

---

# 🧠 Usage

```js
import { removeEmojis, cleanText, summarizeText } from "text-textutils";

console.log(removeEmojis("Hello 😊 World 🌍"));
// "Hello  World "

console.log(cleanText("  Hello   World  "));
// "Hello World"

console.log(summarizeText("This is a sample long text here", 4));
// "This is a sample"
📘 Version History (Semantic Versioning)
v1.0.0
Added removeEmojis()

v1.1.0
Added cleanText()

v1.2.0
Added summarizeText()

🧪 Running Tests
bash
Copy code
npm test
Tests run using Node's built-in test runner.

📄 License
MIT

yaml
Copy code

---

# 🚀 PUBLISHING — Step-by-step

### 1️⃣ Publish version 1 (only removeEmojis)

Delete the other utilities for now:

- Keep removeEmojis.js  
- Remove cleanText.js + summarizeText.js  
- Update index.js to export only removeEmojis

Set version:

npm version 1.0.0
npm publish

yaml
Copy code

---

### 2️⃣ Publish version 1.1.0 (add cleanText)

Add `cleanText.js` back.  
Update index.js.

Then:

npm version minor
npm publish

yaml
Copy code

---

### 3️⃣ Publish version 1.2.0 (add summarizeText)

Add `summarizeText.js` back.

Then:

npm version minor
npm publish

yaml
Copy code

---

# 🎉 You now have a fully professional npm package!

---

# ❓ Want me to package everything into a **ZIP file** you can download?
I can generate the folder as a downloadable file for you. Just say:

👉 **"Yes, generate ZIP"**