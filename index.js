var through = require('through2').obj;

function addPrefix (name) {
    return `
let ${name} = function(props) {
    return ( 
        `;
}

function addSuffix () {
    return `
    );
}`;
}

module.exports = function(options) {
    var options = options || {};

    return through(function (file, enc, cb) {
        var iconName = 'Icon' + (options.name ? options.name : '');

        var strPrefix = addPrefix(iconName);
        var strSuffix = addSuffix(iconName);

        if (file.isNull()) {
            cb(null, file);
        }

        if (file.isBuffer()) {
            var sContent = file.contents.toString('utf-8');

            sContent.replace(/<defs>(.*)<\/defs>/, '').replace(/<use(.*)\/>/, '');
            sContent = strPrefix + sContent + strSuffix;

            file.contents = new Buffer(sContent);
        }

        if (file.isStream()) {
            console.log('No stream type processed');
        }

        cb(null, file);
    });
};