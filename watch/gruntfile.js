
module.exports = function(grunt) {
    // Load dependencies.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
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
        
        watch: {
            scripts: {
                files: 'source/*.js',
                tasks: ['uglify']
            } ,
        },
    });
 
    // Watch for javascript files and execute the uglify task.
    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
 
    // Register tasks.
    grunt.registerTask('default', ['watch'] );
};
