import { screen } from '@testing-library/testcafe'


fixture('Search Test')
    .page('https://chrisbateman.github.io/guide-to-web-components/demos/shadow-dom.htm');

// test('Scenario: Search test in Google', async(t) => {
//     await HomePage.checkHomePage();
//     await HomePage.searchText(t, params.searchKey);
// 		await t.expect(SearchResultsPage.searchResults.exists).ok();
// });

// test('Scenario: test', async (t) => {
// 		await t.expect(screen.findAllByText('Demo 2').exists).ok();
// });

test('Scenario: Test Demo1', async (t) => {
	await t.expect(screen.findByText('Demo 1').textContent).eql('Demo 1');
});