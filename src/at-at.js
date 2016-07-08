import {Component, View} from 'angular2/core';

@Component({
  selector: 'at-at'
})

@View({
  templateUrl: 'at-at.html'
})

export class AtAt {

  constructor() {
    console.info('AtAt Component Mounted Successfully');
  }

}
