import { weekday } from 'foodme/helpers/weekday';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | weekday', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = weekday(3);    
    assert.equal(result,'wednesday','3 devuelve wednesday');
  });
});
