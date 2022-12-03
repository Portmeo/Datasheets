export const utcStringToDateFormat = (dateUtcString: string) => {
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'medium',
    timeStyle: 'medium'
  }).format(new Date(dateUtcString));
};
