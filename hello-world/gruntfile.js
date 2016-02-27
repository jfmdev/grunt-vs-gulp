
module.exports = function(grunt) {
    // Configurate tasks.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });
 
    // Register tasks.
    grunt.registerTask('default', [] );

    // Print message.
    console.log("This script doesn't do nothing");
};
