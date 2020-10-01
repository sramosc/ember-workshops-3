import Controller from '@ember/controller';

export default Controller.extend({

    appName: 'FoodMe',
    menuLinks: [{
        name: 'Restaurantes',
        url: 'restaurants'
    },
    {
        name: 'Nosotros',
        url: 'about'
    }]
});
