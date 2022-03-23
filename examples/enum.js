const Enum = require('../src/Enum');

const PubSubService = new Enum({
    XMPP: 'XMPP',
    JABBER: 'XMPP',
    OPENFIRE: 'XMPP',
    GOOGLE: 'GOOGLE'
});

console.log('\nPubSubService --------------------')

console.log(PubSubService.XMPP)
console.log(PubSubService.JABBER)
console.log(PubSubService.GOOGLE)
console.log(PubSubService.key('GOOGLE'))

const Day = new Enum({
    SUNDAY   : 1,
    MONDAY   : 2,
    TUESDAY  : 3,
    WEDNESDAY: 4,
    THURSDAY : 5,
    FRIDAY   : 6,
    SATURDAY : 7,
});

console.log('\nDay --------------------')
console.log(`Day.MONDAY)       `, Day.MONDAY);
console.log(`Day.MON)          `, Day.MON);
console.log(`Day[1]            `, Day[2]);
console.log(`Day.key('MONDAY') `, Day.key('MONDAY'))
console.log(`Day.val('MONDAY') `, Day.val('MONDAY'))
console.log(`Day.key(1)        `, Day.key(2))
console.log(`Day.val(1)        `, Day.val(2))
console.log('Day.SUNDAY < Day.monday =', Day.SUNDAY < Day.monday);
console.log('Day.SUNDAY < Day.MONDAY =', Day.SUNDAY < Day.MONDAY);
console.log('Day.SUNDAY < Day.MON    =', Day.SUNDAY < Day.MON);
console.log('Day.SUNDAY < Day.mon    =', Day.SUNDAY < Day.mon);

const Role = new Enum({
    ADMIN: 10,
    EDIT: 5,
    VIEW: 1,
    NONE: 0
});

console.log('\nRole --------------------')
console.log(`Role('ADMIN')`, Role('ADMIN'))
console.log(`Role.ADMIN`, Role.ADMIN)

process.exit(0)