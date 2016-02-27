
module.exports = function(grunt) {
    // Load dependencies.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    
    // Configurate tasks.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Configure uglify task.
        uglify: {
            dist: {
                expand: true,
                cwd: 'source',
                src: ['*.js'],
                dest: 'destination/'
            },
        },
        
        // Configure LESS task.
        less: {
            components: {
                files: [{
                    expand: true,
                    cwd: 'source',
                    src: ['*.less'],
                    dest: 'destination/',
                    ext: '.css'
                }]
            }
        },
        
        // Configure task for watch JavaScript and LESS files.
        watch: {
            scripts: {
                files: 'source/*.js',
                tasks: ['uglify']
            },
            styles: {
                files: 'source/*.less',
                tasks: ['less']
            }
        },
    });
 
    // Add listener for print modified files.
    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
 
    // Register tasks.
    grunt.registerTask('default', ['uglify', 'less','watch'] );
};
