# trim-fix

  A fork of [trim](https://www.npmjs.com/package/trim) package to fix [ReDoS vulnerability](https://snyk.io/vuln/SNYK-JS-TRIM-1017038)

  Trims string whitespace.

## How to fix the vulnerability when using yarn

In `yarn.lock` add an entry to `resolutions` field:
```json
resolutions: {
    "trim": "npm:trim-fix@^0.0.1"
}
```
and run `yarn install`.

## Installation

```
$ npm install trim-fix
```

## API

   - [trim(str)](#trimstr)
   - [.left(str)](#leftstr)
   - [.right(str)](#rightstr)
<a name="" />
 
<a name="trimstr" />
### trim(str)
should trim leading / trailing whitespace.

```js
trim('  foo bar  ').should.equal('foo bar');
trim('\n\n\nfoo bar\n\r\n\n').should.equal('foo bar');
```

<a name="leftstr" />
### .left(str)
should trim leading whitespace.

```js
trim.left('  foo bar  ').should.equal('foo bar  ');
```

<a name="rightstr" />
### .right(str)
should trim trailing whitespace.

```js
trim.right('  foo bar  ').should.equal('  foo bar');
```
