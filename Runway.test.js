const Runway = require('./Runway')

describe('Runway class test', () => {
    const runway = new Runway('run')

    test('Can not remove plane if the runway is empty', () => {
        expect(() => runway.remove('plane1')).toThrowError('Runway is empty')
    })

    test('Testing that you can add planes to the runway', () => {
        runway.add('plane1')
        runway.add('plane2')
        runway.add('plane3')
        expect(Runway.planes.length).toBe(3)
    })

    test('Can remove plane from runway', () => {
        runway.remove('plane1')
        expect(Runway.planes.length).toBe(2)
        expect(Runway.planes.includes('plane1')).toBe(false)
    })
    
    test('Max number of planes on runway is 100', () => {
        for (let i=0;i<98;i++){
            runway.add();
        }//adds in up to 100 planes 
        console.log(Runway.planes.length)
        expect(() => runway.add()).toThrowError('runways at full capacity!')
    })
})