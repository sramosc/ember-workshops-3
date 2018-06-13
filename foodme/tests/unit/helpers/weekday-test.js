import { module, test } from 'qunit';
import { weekday, names } from 'foodme/helpers/weekday';

module('Unit | Helper | weekday', function() {

  test('it returns the day number', async function(assert) {
    const day = 4;
    const expected = names[day]; // thursday

    assert.equal(weekday(day), expected);
  });

  test('it returns an empty string when receives an incorrect day number', async function(assert) {
    const day = 10;
    const expected = '';

    assert.equal(weekday(day), expected);
  });

});
