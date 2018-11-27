import test from "./util/test-factory.js"
import increments from "./fixture/increments.js"

import PhasedRun from "../phased-run.js"

const trafficLight= [ "green", "yellow", "red"]

const basicDemonstration= test( "can add items into a phased-run & it will sort them", function( t){
	// create a value and some tools we can increment with
	let { inc1, inc2, inc3}= increments()
	const pr= new PhasedRun( trafficLight)
	// inserting out of order
	pr.install( "yellow", inc2)
	t.equal( pr.length, 1, "has one time")
	pr.install( "red", inc3)
	t.equal( pr.length, 2, "has one time")
	pr.install( "green", inc1)
	t.equal( pr.length, 3, "has one time")
	// but we expect them to run in order
	t.equal( pr.phases[ 0], "green", "green first")
	t.equal( pr[ 0], inc1, "green first")
	t.equal( pr.phases[ 1], "yellow", "yellow second")
	t.equal( pr[ 1], inc2)
	t.equal( pr.phases[ 2], "red", "red last")
	t.equal( pr[ 2], inc3, "yellow")
	t.end()
})

export function main(){
	basicDemonstration()
	console.log("yes")
}
export default main

if( require.main=== module){
	main()
}
