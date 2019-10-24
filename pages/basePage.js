
import {Selector as $, t} from 'testcafe';

export default class BasePage {
    constructor(){
        this.gAppsLink = $('a').withAttribute('Title', 'Google apps');
        this.privacyLink = $('a').withText('Privacy');
        this.termsLink = $('a').withText('Terms');
    }
}
