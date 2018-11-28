import { Comparator} from "../comparator.js"

import test from "./util/test-factory.js"
import trafficLight from "./fixture/traffic.js"

const phasesAreValues= test( "comparator turns phases into values", function( t){
	const c= new Comparator( trafficLight)
	t.equal( c.green, 0, "green is 0")
	t.equal( c.yellow, 10, "yellow is 10")
	t.equal( c.red, 20, "red is 20")
	t.end()
})

const canValuePhase= test( "comparator can get a value via value()", function( t){
	const c= new Comparator( trafficLight)
	t.equal( c.value( "green"), 0, "green's value is 0")
	t.equal( c.value( "yellow"), 10, "yellow's value is 10")
	t.equal( c.value( "red"), 20, "red's value is 20")
	t.end()
})

const prefixed= test( "comparator accepts prefixed phases", function( t){
	const c= new Comparator( trafficLight)
	t.equal( c.value("pregreen"), -2, "pregreen is -2")
	t.equal( c.value("postgreen"), 2, "postgreen is 2")
	t.equal( c.value("preyellow"), 8, "pregreen is 8")
	t.equal( c.value("postyellow"), 12, "postyellow is 12")
	t.equal( c.value("prered"), 18, "pregreen is 18")
	t.equal( c.value("postred"), 22, "postred is 22")
	// also, ps, we don't have to re-calculate this again!
	t.equal( c[ "postred"], 22, "comparator now knows 'postred'")
	t.end()
})

// this is really the core duty comparator serves:
// it is a function that compares phases against each other
const compares= test( "comparator compares", function( t){
	const c= new Comparator( trafficLight)
	// compare "green" versus other phases
	t.equal( c( "green", "green"), -1, "green after green")
	t.equal( c( "yellow", "green"), 1, "green before yellow")
	t.equal( c( "red", "green"), 1, "green before red")
	// compare "yellow" versus other phases
	t.equal( c( "green", "yellow"), -1, "yellow after green")
	t.equal( c( "yellow", "yellow"), -1, "yellow after yellow")
	t.equal( c( "red", "yellow"), 1, "yellow before red")
	t.end()
})

export function main(){
	phasesAreValues()
	canValuePhase()
	prefixed()
	compares()
}
export default main

if( require.main=== module){
	main()
}
