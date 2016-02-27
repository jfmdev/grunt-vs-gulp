
module.exports = function(grunt) {
    // Load dependencies.
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    // Configurate task.
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
 
    // Register default task.
    grunt.registerTask('default', ['copy'] );
};
