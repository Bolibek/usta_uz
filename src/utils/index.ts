export const formatDate = (convertData: string | number | Date) =>
  `${new Intl.DateTimeFormat('en-UK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(convertData))}`
