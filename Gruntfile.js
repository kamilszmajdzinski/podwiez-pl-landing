module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
          js: {
            src: ['js/one.js', 'js/two.js'],
            dest: 'build/js/script.js',
          },
          scss: {
              src: ['scss/global.scss', 'scss/two.scss'],
              dest: 'scss/build.scss'
          }
        },

        sass: {
            dist: {
              files: {
                'css/main.css': 'scss/build.scss' 
              }
            }
          },
          
          cssmin: {
            target: {
              files: {
                'build/css/main.css': ['scss/build.scss']
              }
            }
          },

      watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js'],
            },
            scss: {
                files: ['scss/**/*.scss'],
                tasks: ['concat:scss', 'sass', 'cssmin'],
            }
        },
    });

      grunt.loadNpmTasks('grunt-contrib-concat')
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-cssmin')
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.registerTask('default', ['concat','sass','cssmin', 'watch'])
}