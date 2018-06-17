import Mixin from '@ember/object/mixin';

const serialize = (str) => {
  return str.replace(' ', '+');
}

/**
 * https://developers.google.com/maps/documentation/urls/guide#search-action
 */
const buildURL = (query) => {
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export default Mixin.create({

  actions: {

    openGoogleMaps(name) {
      const serialized = serialize(name);
      const url = buildURL(serialized);

      window.open(url, '_blank');
    }

  }

});
