const { createLogger, transports, format } = require('winston');
const { combine, timestamp, json } = format;

const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  transports: [new transports.Console()]
});

module.exports = {logger};