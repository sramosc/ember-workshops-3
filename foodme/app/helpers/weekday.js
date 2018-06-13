import { helper } from '@ember/component/helper';

export const names = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
};

export function weekday(params/*, hash*/) {
  const number = Array.isArray(params) ? params[0] : params;

  return names[number] || '';
}

export default helper(weekday);
