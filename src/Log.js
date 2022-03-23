const { EventEmitter } = require('events');

module.exports = class Log {

    static info() {
        console.info(...args);
    }

    static event(...args) {
        console.log(this.heading('EVENT: '));
        console.log(...args);
    }

    static heading(title) {
        const length = title?.length ? process.stdout.columns - title.length : process.stdout.columns;
        return title + new Array(length).fill('-').join('');
    }
}