import Route from '@ember/routing/route';

export default Route.extend({
    async model() {
        let response = await fetch('/api/restaurants.json');
        let parsed = await response.json();
        return parsed;
    }
});
