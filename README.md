# systemjs-automatic-cjs-vs-es6
Trying to reproduce a possible race condition.

```
git clone git@github.com:timbur/systemjs-automatic-cjs-vs-es6.git
cd systemjs-automatic-cjs-vs-es6
npm install
jspm install
npm start
open localhost:8080
```

1.  When asked if you want to use `es6`, choose "Cancel".  The default template will default to `cjs`.  After some transpilation, you should see "cjs template works".

2.  Refresh and then choose "OK" to use `es6` this time.  This time after the transpilation, you'll see an error in the console that says something like, "Uncaught TypeError: (0 , _test2.default) is not a function".  The only difference is the template.
