import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {AtAt} from 'at-at';

@Component({
  selector: 'main'
})

@View({
  directives: [AtAt],
  template: `
    <at-at></at-at>
  `
})

class Main {

}

bootstrap(Main);
