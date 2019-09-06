const to_nato = (x) => x.toLowerCase().split(' ').join('').split('').map(y => global.NATO[y] ? global.NATO[y] : y).join(' ');
