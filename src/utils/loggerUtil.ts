import winston from "winston";
import path from "path";
import moment from "moment-timezone"

//Configure logs 


// First configure the log directory
const currentDir = __dirname;
const srcDir = path.resolve(currentDir, "..");

const logDir = path.join(srcDir, "logs");

// Create the format for the logger
const customFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
}); 

const timezone = 'America/Caracas';

//Create the logger 

export const logger = winston.createLogger({
    level: 'info',
    //Define format of logs
    format: winston.format.combine(
        winston.format.timestamp({
            format: () => moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss')
        }),
        customFormat
    ),
    transports: [
        new winston.transports.Console({level: 'debug'}),
        // Logs of test runs
        new winston.transports.File({ filename: path.join(logDir, 'test-run.log'), level: 'info', maxFiles: 5}),
        // Logs of errors only
        new winston.transports.File({ filename: path.join(logDir, 'error.log'), level: 'error', maxFiles: 5}),
    ],
});