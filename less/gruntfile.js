
module.exports = function(grunt) {
    // Load dependencies.
    grunt.loadNpmTasks('grunt-contrib-less');
    
    // Configurate tasks.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Configure LESS task.
        less: {
            // Compile all targeted LESS files individually
            components: {
                files: [{
                    expand: true,
                    cwd: 'source',
                    src: ['*.less'],
                    dest: 'destination/',
                    ext: '.css'
                }]
            }
        }
    });
 
    // Register default task.
    grunt.registerTask('default', ['less'] );
};
