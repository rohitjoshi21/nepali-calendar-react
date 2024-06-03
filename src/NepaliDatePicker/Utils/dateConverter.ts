import dateConverter from 'nepali-datetime/dateConverter';
import { splitDate } from './common';

export function EnglishToNepali(date: string): string {
  const { day, month, year } = splitDate(date, '-');
  const [npYear, npMonth, npDay] = dateConverter.englishToNepali(
    year,
    month,
    day
  );
  return `${npYear}-${npMonth}-${npDay}`;
}

export function NepaliToEnglish(date: string): string {
  const { day, month, year } = splitDate(date, '-');
  const [enYear, enMonth, enDay] = dateConverter.nepaliToEnglish(
    year,
    month - 1,
    day
  );
  return `${enYear}-${enMonth + 1}-${enDay}`;
}
