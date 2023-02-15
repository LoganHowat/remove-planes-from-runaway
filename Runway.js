class Runway {
    static MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS = 100;
    static planes = [];

    name;

    constructor(name) {
        this.name = name
    }
    
    add(plane) {

        if (Runway.planes.length+1>Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS) {
            throw new Error ("runways at full capacity!")
        }
        Runway.planes.push(plane)
    }

    remove(plane){
        if (Runway.planes.length==0){
            throw new Error('Runway is empty')
        }else if (Runway.planes.includes(plane)){
            let index = Runway.planes.indexOf(plane)
            Runway.planes.splice(index,1);
        }else{
            throw new Error('Plane is not on runway')
        }
    }
}

module.exports=Runway;