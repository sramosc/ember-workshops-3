import { helper } from '@ember/component/helper';

export function restaurantImg(params/*, hash*/) {
  return `img/restaurants/${params}.jpg`;
}

export default helper(restaurantImg);
