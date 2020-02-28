function countMileage(start, finish) {
  const startSplitted = start.split(':');
  const finishSplitted = finish.split(':')

  const hourDiff = finishSplitted[0] - startSplitted[0];
  const minutesDiff = finishSplitted[1] - startSplitted[1];
  const secondsDiff = finishSplitted[2] - startSplitted[2];

  let total = hourDiff*60 + minutesDiff + (secondsDiff/60);

  console.log(total);

  let mileage = 0
  let speed = 0

  if (total <= 11) {
    mileage = total*60*6;
  } else {
    total -= 11;
    speed = 6;
    mileage = 11*60*speed;
    
    while (total >= 0) {
      speed += 1;
      mileage += 10*60*speed;
      console.log(mileage);
      total -= 10;
    }
  }

  console.log(mileage);
  return mileage;
}

countMileage('10:25:21', '12:00:00')