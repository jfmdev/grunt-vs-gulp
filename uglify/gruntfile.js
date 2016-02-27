
module.exports = function(grunt) {
    // Load dependencies.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Configurate tasks.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Configure copy task.
        uglify: {
            dist: {
                expand: true,
                cwd: 'source',
                src: ['*.js'],
                dest: 'destination/'
            },
        },
    });
 
    // Register tasks.
    grunt.registerTask('default', ['uglify'] );
};
