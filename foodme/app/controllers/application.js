import Controller from '@ember/controller';

/* eslint-disable ember/avoid-leaking-state-in-ember-objects */

// OJO: Al definir 'menuLinks', ESLint nos avisará de que estamos incumpliendo la regla 'avoid-leaking-state-in-components'.
// Para no enredar el workshop vamos a dejarlo así, pero la forma correcta de hacerlo es esta:
// https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/avoid-leaking-state-in-components.md

export default Controller.extend({

  appName: 'FoodMe',

  menuLinks: [{
    label: 'restaurants',
    url: 'restaurants'
  }, {
    label: 'about',
    url: 'about'
  }]

});
