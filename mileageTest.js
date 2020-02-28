function countMileage(start, finish) {
    start = Date.parse(start);
    finish = Date.parse(finish);

    let diff = (finish - start)/1000

    console.log(diff);

    let mileage = 0
    let speed = 0;

    if (diff <= 11*60) {
      mileage = diff*6;
    } else {
      diff -= (11*60);
      speed = 6;
      mileage = 11*60*speed;

      while (diff >= 0) {
        speed += 1;
        diff -= (10*60);
        if (diff <= 0) {
          mileage += diff*speed
          break
        }
        mileage += 10*60*speed;
        // console.log(mileage);
      }
    }

    console.log(mileage)
  }
  
countMileage('01 Jan 1970 10:59:00 GMT', '01 Jan 1970 12:00:00 GMT');