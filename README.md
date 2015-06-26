#Redtube API

## How to install
```npm install redtube --save```

## How to build

```npm run build```

## How to test
```npm test```

## How to use?
```javascript
var Redtube = require('redtube');
//Define the output. can be 'json' or 'xml'
var r = new Redtube({output: 'json'});

//Search method
r.search({search: 'Milf'}, function(err, response){
  if(!err)
    console.log(response);
});

//Get video by ID method
r.getVideoById({video_id: 1147059, thumbsize: 'all'}, function(err, response){
  if(!err)
    console.log(response);
});
```

#LICENSE
The MIT License (MIT)

Copyright (c) 2015 Paulo Pires

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.