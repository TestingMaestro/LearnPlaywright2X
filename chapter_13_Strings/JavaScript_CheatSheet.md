# JavaScript String Cheat Sheet

A quick reference for all built-in **String** properties, instance methods, and static methods.

---

## String Property

| Property | Description | One-Liner Example |
|----------|-------------|-------------------|
| `length` | Returns the number of characters in the string. | `"Hello".length;` → `5` |

---

## String Instance Methods

| Method | Description | One-Liner Example |
|--------|-------------|-------------------|
| `at(index)` | Returns the character at the given index (supports negative indexes). | `"Hello".at(-1);` → `"o"` |
| `charAt(index)` | Returns the character at the specified index. | `"Hello".charAt(1);` → `"e"` |
| `charCodeAt(index)` | Returns the UTF-16 code unit at the specified index. | `"A".charCodeAt(0);` → `65` |
| `codePointAt(index)` | Returns the Unicode code point value at the given position. | `"𠮷".codePointAt(0);` → `134071` |
| `concat(str1, ...)` | Joins two or more strings together. | `"Hello".concat(" ", "World");` → `"Hello World"` |
| `endsWith(searchString)` | Checks if the string ends with the specified value. | `"script.js".endsWith(".js");` → `true` |
| `includes(searchString)` | Checks if the string contains the specified substring. | `"JavaScript".includes("Script");` → `true` |
| `indexOf(searchValue)` | Returns the index of the first match, or `-1` if not found. | `"world".indexOf("r");` → `2` |
| `lastIndexOf(searchValue)` | Returns the index of the last match, or `-1` if not found. | `"banana".lastIndexOf("a");` → `5` |
| `localeCompare(compareString)` | Compares two strings for sorting (returns `-1`, `0`, or `1`). | `"a".localeCompare("b");` → `-1` |
| `match(regexp)` | Returns the matches when matching a string against a regex. | `"Hello 123".match(/\d+/);` → `["123"]` |
| `matchAll(regexp)` | Returns an iterator of all matches, including capturing groups. | `...[..."a1b2".matchAll(/\d/g)];` → matches `1`, `2` |
| `normalize([form])` | Returns the Unicode Normalization Form of the string. | `"é".normalize("NFC");` → normalized `"é"` |
| `padEnd(targetLength, padString)` | Pads the end of the string to the target length. | `"5".padEnd(3, "0");` → `"500"` |
| `padStart(targetLength, padString)` | Pads the start of the string to the target length. | `"5".padStart(3, "0");` → `"005"` |
| `repeat(count)` | Returns a new string repeated the given number of times. | `"ha".repeat(3);` → `"hahaha"` |
| `replace(regexp\|substr, newSubstr\|function)` | Replaces the first match (or all with `/g`) with a new value. | `"aa".replace("a", "b");` → `"ba"` |
| `replaceAll(regexp\|substr, newSubstr)` | Replaces all matches with a new value. | `"aa".replaceAll("a", "b");` → `"bb"` |
| `search(regexp)` | Searches for a regex match and returns its index, or `-1`. | `"abc".search(/b/);` → `1` |
| `slice(beginIndex, endIndex)` | Extracts a section of the string into a new string. | `"Hello".slice(1, 4);` → `"ell"` |
| `split(separator, limit)` | Splits the string into an array based on a separator. | `"a,b,c".split(",");` → `["a", "b", "c"]` |
| `startsWith(searchString)` | Checks if the string begins with the specified value. | `"Hello".startsWith("He");` → `true` |
| `substring(indexStart, indexEnd)` | Returns characters between two indexes. | `"Hello".substring(1, 4);` → `"ell"` |
| `toLocaleLowerCase()` | Converts to lowercase based on locale. | `"İ".toLocaleLowerCase("tr");` → `"i"` |
| `toLocaleUpperCase()` | Converts to uppercase based on locale. | `"i".toLocaleUpperCase("tr");` → `"İ"` |
| `toLowerCase()` | Converts the string to lowercase. | `"HELLO".toLowerCase();` → `"hello"` |
| `toString()` | Returns the string value of the object. | `"test".toString();` → `"test"` |
| `toUpperCase()` | Converts the string to uppercase. | `"hello".toUpperCase();` → `"HELLO"` |
| `trim()` | Removes whitespace from both ends of the string. | `"  hi  ".trim();` → `"hi"` |
| `trimEnd()` / `trimRight()` | Removes whitespace from the end of the string. | `"  hi  ".trimEnd();` → `"  hi"` |
| `trimStart()` / `trimLeft()` | Removes whitespace from the start of the string. | `"  hi  ".trimStart();` → `"hi  "` |
| `valueOf()` | Returns the primitive value of a String object. | `new String("hi").valueOf();` → `"hi"` |

---

## String Static Methods

| Method | Description | One-Liner Example |
|--------|-------------|-------------------|
| `String.fromCharCode(num1, ...)` | Creates a string from UTF-16 code unit values. | `String.fromCharCode(65, 66);` → `"AB"` |
| `String.fromCodePoint(num1, ...)` | Creates a string from Unicode code point values. | `String.fromCodePoint(134071);` → `"𠮷"` |
| `String.raw(strings, ...values)` | Returns a raw string from a template literal, ignoring escape sequences. | ``String.raw`C:\Users\name`;`` → `"C:\\Users\\name"` |

---

## Commonly Used Flags with Regex in String Methods

| Flag | Meaning | Example |
|------|---------|---------|
| `g` | Global (all matches) | `"a-a".replace(/a/g, "b");` → `"b-b"` |
| `i` | Case-insensitive | `"Hello".search(/hello/i);` → `0` |
| `m` | Multiline | `/^a/m` matches `"a"` at start of any line |

---

*Generated for quick reference. For full details, see [MDN String documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).*
