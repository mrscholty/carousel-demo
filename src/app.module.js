import angular from 'angular';

import carousel from 'components/carousel/carousel.module';

export default angular.module('app.module', [carousel]);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app.module']);
});
