module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      'default': {
        options:{
          port: 3001,
          base: '',
          keepalive: true
        }
      }
    },
    jshint:{
      all: ['Gruntfile.js', 'src/aspect.js', 'test/spec/*.js']
    },
    'smush-components': {
      options: {
        directory: 'app/bower_components',
        fileMap: {
          js: 'dist/x-tag-components.js'
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['src/*.js', 'app/bower_components/meld/meld.js'], dest: 'dist', filter: 'isFile'}
        ]
      }
    },
    bumpup: ['bower.json', 'package.json', 'xtag.json'],
    tagrelease: {
      file: 'package.json',
      prefix: '',
      commit: true
    },
    jasmine : {
      'default': {
        src: ['src/**/*.js'],
        options: {
          keepRunner: true,
          vendor: ['test/lib/jquery-1.11.0.min.js','test/lib/jasmine-jquery.js', 'dist/helper.js', 'dist/x-tag-components.js', 'dist/meld.browser.min.js'],
          specs: 'test/spec/*Spec.js',
          helpers: []
        }      
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-tagrelease');
  grunt.loadNpmTasks('grunt-smush-components');
  
  grunt.registerTask('test', ['jasmine:default']);
  grunt.registerTask('build', ['jshint', 'smush-components', 'copy', 'test']);
  grunt.registerTask('bump:patch', ['bumpup:patch', 'tagrelease']);
  grunt.registerTask('default', ['build']);

};
