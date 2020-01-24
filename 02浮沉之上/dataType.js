let me = {
    name: 'Marvin',
    gender: 'male',
    age: 'secret',
    nationality: 'China',
    team: 'NT'
};

me.title = 'mr';
me.education = 'Colleage';

console.log(Object.keys(me))

Object.values(me)

for (let key in me) {
    if (me.hasOwnProperty(key)) {
        const value = me[key]
    }
}