import test from "./util/test-factory.js"

import PhasedRun from "../phased-run.js"

const trafficLight= [ "green", "yellow", "red"]

const addItems= test( "can add items into a phased-run", function( t){
	const
	  accum= 0,
	  pr= new PhasedRun( trafficLight)
	pr.install( "yellow", ()=> accum+= 1)
	pr.install( "red", ()=> accum+= 3)
	pr.install( "green", ()=> accum+= 1)
	t.end()
})

export function main(){
	addItems()
	console.log("yes")
}
export default main

if( require.main=== module){
	main()
}
