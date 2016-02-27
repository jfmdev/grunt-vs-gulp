
module.exports = function(grunt) {
    // Configurate task.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });
 
    // Register default task.
    grunt.registerTask('default', [] );

    // Print message.
    console.log("This script doesn't do nothing");
};
