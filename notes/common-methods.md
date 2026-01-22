# Common Methods

Tags: fundamentals

### charCodeAt

Returns the Unicode code point of the character at a given index.

```jsx
string.charCodeAt(index)
```

**Examples:**
```jsx
'A'.charCodeAt(0)   // 65
'Z'.charCodeAt(0)   // 90
'a'.charCodeAt(0)   // 97
'z'.charCodeAt(0)   // 122
'0'.charCodeAt(0)   // 48
'9'.charCodeAt(0)   // 57
```

**Common use case - convert char digit to number:**
```jsx
const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
// '5'.charCodeAt(0) - '0'.charCodeAt(0) = 53 - 48 = 5
```

### substring

Extracts a portion of a string between two indices.

```jsx
string.substring(startIndex, endIndex)
```

- `startIndex` - inclusive (included in result)
- `endIndex` - exclusive (not included in result)

**Examples:**
```jsx
"hello".substring(0, 2)   // "he"
"hello".substring(1, 4)   // "ell"
"hello".substring(2)      // "llo" (to end if no second arg)
```

**Common use case - extract after expanding pointers:**
```jsx
// After while loop overshoots by one on each side
return s.substring(left + 1, right);
```
