import dateConverter from 'nepali-datetime/dateConverter';
import { splitDate } from './common';

function formatDateToString(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export function EnglishToNepali(date: string | Date): string {
  const dateStr = date instanceof Date ? formatDateToString(date) : date;
  const { day, month, year } = splitDate(dateStr, '-');
  const [npYear, npMonth, npDay] = dateConverter.englishToNepali(
    year,
    month,
    day
  );
  return `${npYear}-${npMonth}-${npDay}`;
}

export function NepaliToEnglish(date: string | Date): string {
  const dateStr = date instanceof Date ? formatDateToString(date) : date;
  const { day, month, year } = splitDate(dateStr, '-');
  const [enYear, enMonth, enDay] = dateConverter.nepaliToEnglish(
    year,
    month - 1,
    day
  );
  return `${enYear}-${enMonth + 1}-${enDay}`;
}