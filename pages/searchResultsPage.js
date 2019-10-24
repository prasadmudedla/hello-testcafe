import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';

class SearchResultsPage extends BasePage {
    constructor() {
        super();
        this.helpLink = $('a').withText('Help');
        this.feedbackLink = $('a').withText('Send feedback');
        this.helpLink = $('a').withText('Help');
        this.searchResults = $('#search');
    }
}

export default new SearchResultsPage();
