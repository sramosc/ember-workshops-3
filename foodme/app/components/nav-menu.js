import Component from '@ember/component';

export default Component.extend({

    isMenuOpened: false,

    actions: {
        toggleMenu(){
            this.toggleProperty('isMenuOpened');
        }
    }
});
