import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'essai/models/test';

import 'essai/comp1/comp1-test';

import 'essai/widgets/jqxbuttons/jqxButton/jqxButton-test';

F.attach(QUnit);

QUnit.module('essai functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('essai main page shows up', function() {
  F('title').text('essai', 'Title is set');
});
