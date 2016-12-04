import angular from 'angular';

import CarouselComponent from './carousel.component';
import template from './carousel.template.html!text';

export default angular.module('carousel', [])
    .component('carousel', {
        controller: CarouselComponent,
        template
    }).name;
