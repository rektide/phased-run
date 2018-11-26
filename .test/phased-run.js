import test from "./util/test-factory.js"

import PhasedRun from "../phased-run.js"

const trafficLight= [ "green", "yellow", "red"]

const addItems= test( "can add items into a phased-run", function( t){
	const
	  accum= 0,
	  pr= new PhasedRun( trafficLight)
	console.log( "l1")
	pr.install( "yellow", ()=> accum+= 1)
	console.log( "l2")
	pr.install( "red", ()=> accum+= 3)
	console.log( "l3")
	pr.install( "green", ()=> accum+= 1)
	console.log( "l-done")
	console.log( pr.phases())
})

export function main(){
	addItems()
	console.log("yes")
}
export default main
