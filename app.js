
// window.$ = window.jQuery = require('jquery');
// window.angular = require('angular');
// window.MathQuill = require('./lib/mathquill/mathquill.js');


// Code goes here




//   console.log('ready');

//   // const electronLocalshortcut = require('electron-localshortcut');

//   // electronLocalshortcut.register(win, 'Ctrl+A', () => {
//   //  console.log('You pressed ctrl & A');
//   // });


const electron = require('electron');
const { ipcRenderer, webFrame } = electron;

ipcRenderer.on('zoomIn', () => {
  webFrame.setZoomLevel(webFrame.getZoomLevel() + 1);
});

ipcRenderer.on('zoomOut', () => {
  webFrame.setZoomLevel(webFrame.getZoomLevel() - 1);
});


// webFrame.setZoomFactor(2);

// document.onkeydown = (e) => {
//   console.log(e);
// };


var myApp = angular.module('myApp', ['mathquill']);

myApp.controller('MyController', function ($scope, $window, $timeout) {

  fields = [{}];

  try {
    fields = JSON.parse(localStorage.getItem('mathquill-fields')) || [{
      expression: '\\sum_{k=1}^3\\sqrt{\\left(k+k\\right)^2}'
    }, {
        expression: '\\left[x^n+y^n=z^n\\right]'
      }, {
        expression: '\\alpha\\ \\beta\\ \\gamma\\ \\rho\\ \\sigma\\ \\delta\\ \\epsilon'
      }];

    $scope.fields = fields;

    var zoomLevel = JSON.parse(localStorage.getItem('mathquill-zoomlevel')) || webFrame.getZoomLevel();
    webFrame.setZoomLevel(zoomLevel);
  }
  catch (e) {
    console.log(e);
  }

  $scope.saveAll = function () {
    localStorage.setItem('mathquill-fields', JSON.stringify(fields));
    localStorage.setItem('mathquill-zoomlevel', webFrame.getZoomLevel());
  };

  $window.onbeforeunload = () => {
    $scope.saveAll();
  };

  $scope.deleteAll = function () {
    $scope.fields = fields = [{}];
    localStorage.removeItem('mathquill-fields');
  };

  ipcRenderer.on('createNewUp', () => {
    var idx = fields.findIndex((x) => x.focus);

    if (idx >= 0) {
      $timeout(() => {
        fields.splice(idx, 0, {});
        fields[idx].focus = true;
      });
    }
  });

  ipcRenderer.on('createNewDown', () => {
    var idx = fields.findIndex((x) => x.focus);

    if (idx >= 0) {
      $timeout(() => {
        fields.splice(idx + 1, 0, {});
        fields[idx + 1].focus = true;
      });
    }
  });

  function focusNext(field, direction) {
    var idx = fields.indexOf(field) + direction;

    if (idx < 0 || idx >= fields.length) {
      return false;
    }

    field.focus = false;
    fields[idx].focus = true;
  }

  $scope.onEnterKey = function (field) {

    var idx = fields.indexOf(field);

    if (idx == fields.length - 1) {
      var newField = {
        focus: true
      };
      $scope.fields.push(newField);
    }

    focusNext(field, 1);
  };

  $scope.onMoveOut = function (field, direction) {

    switch (direction) {
      case 0:
      case 3:
        direction = -1;
        break;

      case 1:
      case 2:
        direction = 1;
        break;
    }

    focusNext(field, direction);
  };

  $scope.onDeleteOut = function (field, direction) {

    if (fields.length > 1) { // keep one field
      if (direction === -1) { // only handle backspace

        var idx = fields.indexOf(field);

        if (!field.expression) {
          fields.splice(idx, 1);
        }

        fields[Math.max(0, idx - 1)].focus = true;


      }
    }

  };


  $scope.onFocusChange = (field, hasFocus) => {
    if (hasFocus) {
      lastFocus = field;
    }
  };

  let lastFocus = null;


  function ensureFocus() {

    if (!lastFocus) {
      lastFocus = fields[0];
    }

    $timeout(() => {
      lastFocus.focus = true;
    });

  }

  $($window).focus(ensureFocus);
  $($window).click(ensureFocus);

});


var MQ = MathQuill.getInterface(2);

var mod = angular.module('mathquill', []);

mod.directive('mqMathfield', function ($timeout, $compile) {

  return {
    scope: {
      field: '=ngModel',
      onEnterKey: '&?',
      onFocusChange: '&?', /* hasFocus: boolean */
      onMoveOut: '&?', /* direction: = 0: up | 1: right | 2: down | 3: left */
      onDeleteOut: '&?' /* direction: -1: left | 1: right */
    },
    restrict: 'AE',
    link: function ($scope, $element, $attrs) {

      $scope._focusChanged = (x) => {
        $scope.field.focus = x;

        if ($scope.onFocusChange) {
          $scope.onFocusChange({
            hasFocus: x
          });
        }
      };

      function substituteTextarea() {
        var $textArea = $('<textarea autocapitalize=off autocomplete=off autocorrect=off ' +
          'spellcheck=false x-palm-disable-ste-all=true ' +
          'ng-blur="_focusChanged(false)" ng-focus="_focusChanged(true)" />');

        return $compile($textArea)($scope)[0];
      }

      function handleMoveOutOf(direction) {
        if ($scope.onMoveOut) {
          $timeout(function () {
            $scope.onMoveOut({
              direction: direction
            });
          });
        }
      }

      var mathfield = MQ.MathField($element[0], {

        substituteTextarea: substituteTextarea,
        autoCommands: 'alpha beta sqrt theta phi pi tau nthroot sum prod',
        handlers: {

          deleteOutOf: function (direction) {
            if ($scope.onDeleteOut) {
              $timeout(function () {
                $scope.onDeleteOut({
                  direction: direction
                });
              });
            }
          },

          moveOutOf: function (direction) {
            if (direction === -1) { // left
              direction = 3;
            }

            handleMoveOutOf(direction);
          },
          upOutOf: function () {
            handleMoveOutOf(0);
          },
          downOutOf: function () {
            handleMoveOutOf(2);
          },
          enter: function () {
            if ($scope.onEnterKey) {
              $timeout($scope.onEnterKey);
            }
          },
          edit: function () {
            var latex = mathfield.latex();

            (function (latex) {
              if (latex !== $scope.field.expression) {
                $timeout(function () {
                  console.log('setting scope: ' + latex);
                  $scope.field.expression = latex;
                });
              }
            })(latex);
          }
        }
      });

      function setFieldLatex(latex) {

        if (setFieldLatex.timeout) {
          $timeout.cancel(setFieldLatex.timeout);
        }

        if (latex !== undefined) {
          (function (latex) {
            setFieldLatex.timeout = $timeout(function () {
              var currentValue = mathfield.latex();

              if (currentValue !== latex) {
                mathfield.latex(latex);
              }
            });
          })(latex);
        }

      }

      $scope.$watch('field.expression', setFieldLatex);

      $scope.$watch('field.focus', function (x) {
        if (x) {
          mathfield.focus();
        } else {
          mathfield.blur();
        }
      });

      $scope.$on('$destroy', function () {
        mathfield.revert();
      });
    }
  };

});




