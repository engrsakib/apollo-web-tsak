const EventEmitter = require('events');

class SchoolBell extends EventEmitter{}

const schoolBell = new SchoolBell();
schoolBell.on('ring', () => {
    console.log('The school bell is ringing!');
});
schoolBell.on('break', () => {
    console.log('Time for a break!');
});

schoolBell.emit('break');