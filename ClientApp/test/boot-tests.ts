﻿// There's no typing for the `__karma__` variable. Just declare it as any
declare var __karma__: any;
declare var require: NodeRequire;

// Prevent Karma from running prematurely
__karma__.loaded = function () { };


// Then we find all the tests
const context = require.context('../components', true, /\.spec\.ts$/);

// And load the modules
context.keys().map(context);

// Finally, start Karma to run the tests
__karma__.start();