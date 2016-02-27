
module.exports = function(grunt) {
    // Load dependencies.
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    // Configurate tasks.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Configure concat task.
        concat: {
            dist: {
              src: 'source/*.js',
              dest: 'destination/all.js',
            },
          },
    });
 
    // Register default task.
    grunt.registerTask('default', ['concat'] );
};
