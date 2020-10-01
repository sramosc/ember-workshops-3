import Route from '@ember/routing/route';

const host = 'https://raw.githubusercontent.com/shokmaster/ember-workshops-3/master/'

export default Route.extend({
    async model() {
        let response = await fetch(`${host}resources/restaurants.json`);
        let parsed = await response.json();
        return parsed;
    }
});
