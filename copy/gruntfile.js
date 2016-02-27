
module.exports = function(grunt) {
    // Load dependencies.
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    // Configurate tasks.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Configure copy task.
        copy: {
            main: {
                expand: true,
                cwd: 'source',
                src: '**',
                dest: 'destination/',
            },
        },
    });
 
    // Register tasks.
    grunt.registerTask('default', ['copy'] );
};
