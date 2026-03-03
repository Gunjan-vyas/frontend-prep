
# Promise Combinators – Simple Comparison Table

| Promise Method        | When it Resolves                         | When it Rejects                      | Result on Success                     | Order Guaranteed | Best Use Case |
|-----------------------|------------------------------------------|--------------------------------------|---------------------------------------|------------------|---------------|
| Promise.all           | When **all promises resolve**             | If **any one promise rejects**        | Array of resolved values              | ✅ Yes           | Multiple dependent API calls |
| Promise.race          | When **first promise settles**            | If first settled promise rejects     | Value/error of first settled promise  | ❌ No            | Timeouts, fastest response |
| Promise.any           | When **first promise fulfills**           | If **all promises reject**            | Value of first fulfilled promise      | ❌ No            | Fallback APIs, mirrors |
| Promise.allSettled    | When **all promises settle**              | ❌ Never rejects                     | Array of `{status, value/reason}`     | ✅ Yes           | Dashboards, analytics |

---

## Quick One-Line Definitions (Interview Friendly)

- **Promise.all** → All succeed or one fails
- **Promise.race** → First settled wins (resolve/reject)
- **Promise.any** → First success wins
- **Promise.allSettled** → Give results of all, no failure

---

## Error Behavior Summary

| Method | Error Behavior |
|-------|---------------|
| Promise.all | Fails fast on first rejection |
| Promise.race | Rejects if first settled is a rejection |
| Promise.any | Throws `AggregateError` if all reject |
| Promise.allSettled | Never throws |

---

## Memory Trick 🧠
- **all** → *everyone must pass*
- **race** → *whoever comes first*
- **any** → *at least one success*
- **allSettled** → *collect everything*
