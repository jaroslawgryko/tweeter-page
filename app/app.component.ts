import {Component} from 'angular2/core';
import {TweetsComponent} from './tweets.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Tweets App</h1>
        <tweets></tweets>
    `,
    directives: [TweetsComponent]
})
export class AppComponent { }