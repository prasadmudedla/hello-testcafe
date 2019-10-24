import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';

class HomePage extends BasePage {
    constructor() {
        super();
        this.settingsLink = $('a').withText('Settings');
        this.gmailLink = $('a').withText('Gmail');
        this.imagesLink = $('a').withText('Images');
        this.searchBar = $('input').withAttribute('title', 'Search');
    }

    async checkHomePage() {
        await this.settingsLink.exists;
        await this.gmailLink.exists;
        await this.imagesLink.exists;
        await this.searchBar.exists;
    }

    async searchText(t, searchKey) {
        await t
            .click(this.searchBar)
            .typeText(this.searchBar, searchKey)
            .pressKey('enter');
    }

}

export default new HomePage();
