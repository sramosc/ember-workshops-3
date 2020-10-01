import { helper } from '@ember/component/helper';

const path = 'img/restaurants/'

export function restaurantImg(params/*, hash*/) {
  return path+params+'.jpg';
}

export default helper(restaurantImg);
