import { helper } from '@ember/component/helper';

const days = [
  'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
]

export function weekday(params/*, hash*/) {
  return days[params];
}

export default helper(weekday);
