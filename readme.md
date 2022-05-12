# Nodejs

node -v

> 17.3 // 0510화2

## .mjs

create package.json

> npm init -y

to excute at terminal, need to change file name to .mjs
but if you add this line to package.json you don't need to.

> “type”:”module”,

two way of importing js

> import {xxx} from 'js.js'
> const a = require('script')

/\*? $.slice(0,2) ← live comment

momenent

```js
const moment = require("moment");
const todayDate = moment().format("MMMM Do YYYY, h:mm:ss -a");
```
