class LoggerService {
    log(operation, num1, num2, result) {
        console.log(`Operation: ${operation}`);
        console.log(`Number 1: ${num1}`);
        console.log(`Number 2: ${num2}`);
        console.log(`Result: ${result}`);
    }
}

export default LoggerService;