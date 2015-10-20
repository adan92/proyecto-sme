/* global malarkey:false, toastr:false, moment:false, localStorage:false */
(function() {
  'use strict';

  angular
    .module('appSme')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('localStorage', localStorage);

})();
