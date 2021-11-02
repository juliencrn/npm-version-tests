class Logger {
    constructor() {
        
    }

    printHi(name: string) {
        console.log(`Hello ${name}`);
        
    } 
}

const logger = new Logger()
logger.printHi("Julien")