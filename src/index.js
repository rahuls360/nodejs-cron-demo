var cron = require('node-cron');

// every second
cron.schedule('* * * * * *', () => {
  console.log('running a task every second');
});

// first 10 seconds
cron.schedule('0-10 * * * * *', () => {
  console.log('running from 0 to 10 seconds');
});

// 12:39am 0 seconds
cron.schedule('0 39 0 * * *', () => {
  console.log('running once at 12:39am');
});
