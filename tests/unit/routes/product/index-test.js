import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | productindex', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:productindex');
    assert.ok(route);
  });
});
