#!/usr/bin/env node
var fs = require('fs');

var args = process.argv.slice(2);
var output = '';
var exitCode = 0;

if (args[0] == undefined) {
    output = 'ERROR: No filename was passed.'
    exitCode = 1;
} else {
    var file = process.cwd() + '/' + process.argv[2];
    var fileContents = fs.readFileSync(file, 'utf8');
    var char;
    for (var i = 0; i < fileContents.length; i++) {
        var char = fileContents.charAt(i);
        switch (char) {
            case 'o':
                char = 'ø';
                break;
            case 'O':
                char = 'Ø';
                break;
            case 'A':
                char = 'Λ';
                break;
        }
        output += char;
    }
}

console.log(output);
process.exit(exitCode);
