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
	t.end()
})

export function main(){
	phasesAreValues()
	canValuePhase()
	prefixed()
}
export default main

if( require.main=== module){
	main()
}
