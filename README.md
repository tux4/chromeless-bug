# Chromeless Bug

This is a test repository with a minimal case to reproduce chromeless bug with async/await

# Reproduce Bug in `Chromeless.wait()`

Install depedencies and run the tests:

> yarn && yarn test

An output similar to this is seen:

```
➜  chromeless-bug yarn test
yarn test v1.0.2
$ yarn jest
 PASS  __tests__/wait-test.js (6.676s)
  Reproduce bug
    ✓ this should wait for 3 seconds but it doesn't (2ms)
    ✓ this should wait for 3 seconds and it does (3001ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        7.161s
Ran all test suites.
Done in 7.99s.

```

Notice that the first test finished in `2ms`, but we would expect it to be similar to the second test.
