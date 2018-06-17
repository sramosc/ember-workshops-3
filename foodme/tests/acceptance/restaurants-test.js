import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | restaurants', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /restaurants', async function(assert) {
    await visit('/restaurants');

    assert.equal(currentURL(), '/restaurants');
  });

  test('should link to information about the company.', async function (assert) {
    await visit('/restaurants');

    let found;

    this.element.querySelectorAll('ul.navbar-nav li a').forEach((node) => {
      if (node.href.includes('restaurants')) {
        found = true;
      }
    });

    assert.equal(found, true);
  });

  test('should show restaurants list at home page', async function(assert) {
    await visit('/restaurants');

    assert.ok(this.element.querySelector('div.restaurant-list'));
  });

  test('should filter the list of restaurants by name.', async function (assert) {
    await visit('/restaurants');
    await fillIn('input.filterName', 'ger');

    assert.equal(this.element.querySelectorAll('div.restaurant-item').length, 2);
  });

  test('should transition to the selected restaurant details', async function (assert) {
    await visit('/restaurants');
    await click('div.restaurant-item .media-body h4 a');

    assert.ok(currentURL().includes('/restaurants/detail/'));
  });

});
