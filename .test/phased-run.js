import test from "./util/test-factory.js"

import PhasedRun from "../phased-run.js"

const trafficLight= [ "green", "yellow", "red"]

const addItemsOoO= test( "can add items into a phased-run", function( t){
	let accum= 0
	const pr= new PhasedRun( trafficLight)
	// inserting out of order
	pr.install( "yellow", ()=> accum+= 2)
	pr.install( "red", ()=> accum+= 3)
	pr.install( "green", ()=> accum+= 1)
	// but we expect them to run in order
	pr[ 0]()
	t.assert( accum, 1, "green runs")
	pr[ 1]()
	t.assert( accum, 3, "yellow")
	pr[ 2]()
	t.assert( accum, 6, "red")
	t.end()
})

export function main(){
	addItemsOoO()
	console.log("yes")
}
export default main

if( require.main=== module){
	main()
}
