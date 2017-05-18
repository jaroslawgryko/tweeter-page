import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service';

@Component({
    selector: 'tweets',
    template: `
        <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
    `,
    directives: [TweetComponent],
    providers: [TweetService]
})
export class TweetsComponent{ 
    tweets: any[];

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
 }