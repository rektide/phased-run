import PhasedRun from "../phased-run.js"

import test from "./util/test-factory.js"
import increments from "./fixture/increments.js"
import trafficLight from "./fixture/traffic.js"

const basicDemonstration= test( "can add items into a phased-run & it will sort them", function( t){
	// create a value and some tools we can increment with
	let { getAccum, inc1, inc2, inc3}= increments()
	const pr= new PhasedRun( trafficLight)
	// inserting out of order
	pr.install( inc2, "yellow")
	pr.install( inc3, "red")
	pr.install( inc1, "green")
	t.equal( pr.length, 3, "has three items")

	// but we expect them to run in order
	t.equal( pr.state[ 0], "green", "green first")
	t.equal( pr[ 0], inc1, "green/inc1 first")
	pr[ 0]()
	t.equal( getAccum(), 1, "+1 to 1")

	t.equal( pr.state[ 1], "yellow", "yellow/inc2 second")
	t.equal( pr[ 1], inc2)
	pr[ 1]()
	t.equal( getAccum(), 3, "+2 to 3")

	t.equal( pr.state[ 2], "red", "red/inc3 last")
	t.equal( pr[ 2], inc3, "yellow")
	pr[ 2]()
	t.equal( getAccum(), 6, "+3 to 6")

	t.end()
})

const insertAfter= test( "adding an item of identical value will add it to the end of the phase", function( t){
	// create a value and some tools we can increment with
	let { getAccum, inc1, inc2, inc3}= increments()
	const pr= new PhasedRun( trafficLight)
	pr.install( inc1, "yellow")
	pr.install( inc2, "yellow")
	pr[ 0]()
	t.equal( getAccum(), 1, "+1 to 1")
	pr[ 1]()
	t.equal( getAccum(), 3, "+2 to 3")
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
