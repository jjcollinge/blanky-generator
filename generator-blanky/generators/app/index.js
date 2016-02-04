'use strict';
var ncp = require('ncp').ncp;
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.Base.extend({
    copying: function () {
        console.log(this.templatePath('blanky'));
        console.log(this.destinationRoot());
        
        ncp.limit = 16;
        
        var src = this.templatePath('blanky');
        var des = this.destinationRoot();
        
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
