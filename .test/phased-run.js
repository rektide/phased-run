import PhasedRun from "../phased-run.js"

import test from "./util/test-factory.js"
import increments from "./fixture/increments.js"
import trafficLight from "./fixture/traffic.js"

const basicDemonstration= test( "can add items into a phased-run & it will sort them", function( t){
	// create a value and some tools we can increment with
	const pr= new PhasedRun( trafficLight)
	// inserting out of order
	pr.push({ phase: "yellow"})
	pr.push({ phase: "red"})
	pr.push({ phase: "green"})
	t.equal( pr.length, 3, "has three items")

	// but we expect them to run in order
	t.equal( pr[ 0].phase, "green", "green first")
	t.equal( pr[ 1].phase, "yellow", "yellow/inc2 second")
	t.equal( pr[ 2].phase, "red", "red/inc3 last")
	t.end()
})

const insertAfter= test( "adding an item of identical value will add it to the end of the phase", function( t){
	// create a value and some tools we can increment with
	const pr= new PhasedRun( trafficLight)
	pr.push({ phase: "yellow", mod: 10})
	pr.push({ phase: "yellow", mod: 20})
	t.equal( pr[ 0].mod, 10)
	t.equal( pr[ 1].mod, 20)
	t.end()
})

export function main(){
	basicDemonstration()
	insertAfter()
}
export default main

if( require.main=== module){
	main()
}
