# Grunt vs Gulp

**Grunt vs Gulp** is a sample project that allows to compare [Gulp](http://gulpjs.com/) and [Grunt](http://gruntjs.com/) for executing simple tasks.

Each folder represents an independent example, each one with their own files  _gruntfile.js_, _gulpfile.js_ and _package.js_.

Before executing the examples, you must install their dependencies by using `npm install`. And for execute the examples you must use the standard commands `grunt` and `gulp`,

## Samples

 * __hello-world__ is a simple example in which the tasks only display a message.
 * __copy__ is an example of how copy the files from a folder into another file.
 * __concat__ is an example of how concatenate the files from a folder into a single file.
 * __less__ is an example of how compile LESS files into CSS files.
 * __uglify__ is an example of how obfuscate JavaScript files.
 * __watch__ is an example of how to add a listener for execute a task when a file is modified.
 * __general__ is an example that combines the tasks of _less_, _uglify_ and _watch_.

License
-------

This project free software; you can redistribute it and/or modify it under the terms of the Mozilla Public License v2.0. 
You should have received a copy of the MPL 2.0 along with this library, otherwise you can obtain one at <http://mozilla.org/MPL/2.0/>.