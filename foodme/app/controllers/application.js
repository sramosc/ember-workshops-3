import Controller from '@ember/controller';
                                         
export default Controller.extend({

    appName: 'FoodMe',
    menuLinks: [{
        label: 'restaurants',
        url: 'restaurants'
    },
    {
        label: 'about',
        url: 'about'
    }]
});
