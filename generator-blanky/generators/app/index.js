'use strict';
var ncp = require('ncp').ncp;
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.Base.extend({
    copying: function () {
        var src = this.templatePath('blanky');
        var des = this.destinationRoot();
        
        console.log("Copying all files from " + src + " to destination path " + des);

        ncp.limit = 16;

        ncp(src, des, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("Success!");
        });
    },

    install: function () {
        this.installDependencies();
    }
});
