import Controller from '@ember/controller';
import { A } from '@ember/array';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

export default Controller.extend({

    /*
     * Conseguimos un array como este:
     * [
     *    { name: 'african', title: 'African' },   { name: 'american', title: 'American' },
     *    { name: 'barbecue', title: 'Barbecue' }, { name: 'cafe', title: 'Cafe' },
     *    { name: 'chinese', title: 'Chinese' },   { name: 'czech/slovak', title: 'Czech / Slovak' },
     *    { name: 'french', title: 'French' },     { name: 'german', title: 'German' },
     *    { name: 'indian', title: 'Indian' },     { name: 'japanese', title: 'Japanese' },
     *    { name: 'mexican', title: 'Mexican' },   { name: 'pizza', title: 'Pizza' },
     *    { name: 'thai', title: 'Thai' },         { name: 'vegetarian', title: 'Vegetarian' }
     * ]
     */
    cuisineOptions: computed('model', function() {
        return this.get('model') // a partir del modelo
          // extraemos un array formado por todos los nodos 'cuisine'
          .mapBy('cuisine')
          // eliminamos los elementos repetidos
          .filter((elem, pos, arr) =>
            arr.indexOf(elem) === pos
          )
          // ordenamos alfabéticamente
          .sort()
          // generamos un array de objetos con el atributo 'name' para el <select> y el título formateado
          .map((cuisine) => {
            return {
                name: cuisine,
                title: cuisine.replace('/', ' / ').capitalize()
            };
        });
    }),

    // Filter criterias
    filterCuisins: A(),

    // Filter function
    filteredRestaurants: computed('model', 'filterCuisins', 'filterName', function() {
        let filteredRestaurants = this.get('model');
        const filterCuisins = this.get('filterCuisins');
        let filterName = this.get('filterName');

        // Filter by cuisine
        if (isPresent(filterCuisins)) {
            filteredRestaurants = filteredRestaurants.filter((item) =>
                filterCuisins.mapBy('name').includes(item.cuisine)
            );
        }

        // Filter by name
        if (isPresent(filterName)) {
          filterName = filterName.toLowerCase();

          return filteredRestaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(filterName)
          );
        }

        return filteredRestaurants;
    }),

    filterName: null,

    actions: {
      clearFilters() {
        this.get('filterCuisins').clear();
        this.set('filterName', null);
      }
    }

});
