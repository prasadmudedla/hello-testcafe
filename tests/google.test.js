import HomePage from '../pages/homePage';
import SearchResultsPage from '../pages/searchResultsPage';
import { params } from '../config/configuration';

fixture('Search Test')
    .page(params.baseUrl);

test('Scenario: Search test in Google', async(t) => {
    await HomePage.checkHomePage();
    await HomePage.searchText(t, params.searchKey);
    await t.expect(SearchResultsPage.searchResults.exists).ok();
});
