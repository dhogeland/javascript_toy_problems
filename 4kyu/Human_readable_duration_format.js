function formatDuration (seconds) {
if (seconds == 0) {
  return 'now';
}
  let years,
      day,
      hour,
      minute,
      time = [];
  years = Math.floor(seconds / 31536000);
  if (years > 0) {
    seconds -= (years * 31536000);
    if (years > 1) {
      time.push(years + ' years')
    } else {
      time.push(years + ' year');
    }
  }
  day = Math.floor(seconds / 86400);
  if (day > 0) {
    seconds -= (day * 86400);
    if (day > 1) {
      time.push(day + ' days');
    } else {
      time.push(day + ' day');
    }
  }
  hour = Math.floor(seconds / 3600);
  if (hour > 0) {
    seconds -= (hour * 3600);
    if (hour > 1) {
      time.push(hour + ' hours');
    } else {
      time.push(hour + ' hour');
    }
  }
  minute = Math.floor(seconds / 60);
  if (minute > 0) {
    seconds -= (minute * 60);
    if (minute > 1) {
      time.push(minute + ' minutes');
    } else {
      time.push(minute + ' minute');
    }
  }
  if (seconds > 1) {
    time.push(seconds + ' seconds');
  } else if (seconds > 0) {
    time.push(seconds + ' second');
  }
  if (time.length == 5) {
    return time[0] + ', ' + time[1] + ', ' + time[2] + ', ' + time[3] + ' and ' + time[4];
  } if (time.length == 4) {
    time[0] += ', ';
    time[1] += ', ';
    time[2] += ' and ';
    return time.join('');
  }
  if (time.length == 3) {
    time[0] += ', ';
    time[1] += ' and ';
    return time.join('');
  }
  if (time.length == 2) {
    time[0] += ' and ';
    return time.join('');
  }
  return time[0];
}
