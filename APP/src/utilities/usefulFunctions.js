export function bubbleSort(array) {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (new Date(array[j].date) > new Date(array[j + 1].date)) {
        // troca de lugar
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

export function bubbleSortInitDate(array) {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (new Date(array[j].init_date) > new Date(array[j + 1].init_date)) {
        // troca de lugar
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

export const formatedDate = (date) => {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDate();
  let dateFormated = `${day < 10 ? `0${day}` : day}/${
    month < 10 ? `0${month}` : month
  }/${year}`;
  return dateFormated;
};

export const formatedHour = (hour) => {
  hour = String(hour);
  return hour.substring(0, 5);
};
