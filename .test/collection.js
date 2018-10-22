import tape from "tape"
import PhaseRunCollection from "../collection.js"
import { testMatrixFactory} from "./util/test-factory.js"

const fixture= new PhaseRunnerCollection(null, [
	{phase: 1, value: 1},
	{phase: 2, value: "2a"},
	{phase: 2, value: "2b"},
	{phase: 2, value: "2c"},
	{phase: 2, value: "3a"},
	{phase: 3, value: "3b"},
	{phase: 4, value: 4},
	{phase: 5, value: 5}
])

const baseCase= [1, "2a", "2b", "2c", "3a", "3b", 4, 5]
const spliceCase= (i, n)=> ({ args: [fixture, i, n], expected: baseCase(i, n)})

const untouchedCases= [
spliceCase(0),
spliceCase(1),
spliceCase(2),
spliceCase(3),
spliceCase(4),
spliceCase(5),
spliceCase(6),
spliceCase(7),
spliceCase(8),
spliceCase(0, 0),
spliceCase(1, 0),
spliceCase(2, 0),
spliceCase(3, 0),
spliceCase(4, 0),
spliceCase(5, 0),
spliceCase(6, 0),
spliceCase(7, 0),
spliceCase(8, 0)
]

const removeCases= [
spliceCase(0, 1),
spliceCase(1, 1),
spliceCase(2, 1),
spliceCase(3, 1),
spliceCase(4, 1),
spliceCase(5, 1),
spliceCase(6, 1),
spliceCase(7, 1),
spliceCase(8, 1),

spliceCase(0, 2),
spliceCase(0, 3),
spliceCase(0, 4),
spliceCase(0, 5),
spliceCase(0, 6),
spliceCase(0, 7),
spliceCase(0, 8),

spliceCase(1, 0), // nothing
spliceCase(2, 0), // nothing

spliceCase(1, 1),
spliceCase(1, 2),
spliceCase(1, 3),
spliceCase(1, 4),
spliceCase(1, 5),
spliceCase(1, 6),
spliceCase(1, 7),
spliceCase(1, 8),

spliceCase(2, 1),
spliceCase(2, 2),
spliceCase(2, 3),
spliceCase(2, 4),
spliceCase(2, 5),
spliceCase(2, 6),
spliceCase(2, 7)
]

function splice(fixture, i, n){
	const collection= new PhaseRunCollection(null, fixture)
	collection.splice( i, n)
	const vals= Array.from( collection)
	vals.forEach( function( val, i, collection){
			collection[ i]= val.value
	})
	return vals
}

const removeTests= function(){
	return testMatrixFactory( "collection-remove", splice, removeCases)
}

export const all= function(){
	[
	  ...untouchedTests(),
	  ...removeTests()
	].forEach( test=> test())
}
export default all

if( typeof require!== "undefined"&& require.main=== module){
	all()
}
