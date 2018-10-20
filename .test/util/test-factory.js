import tape from "tape"

export function testFactory( name, fn){
	return function(){
		tape( name, fn)
	}
}

function expandArgs( caseName, args){
	if( caseName){
		return caseName
	}
	return args
	  .map( arg=> arg instanceof Object? JSON.stringify( args): arg)
	  .join(":")
}

export function simpleTestFactory( name, fn, { args, expected, caseName}){
	const
	  displayName= `${name}:${expandArgs( caseName, args)}`,
	  testCase= ({
		[ displayName]: function(){
			test( displayName, function( t){
				const
				  areArgsArray= testCase.args&& testCase.args[ Symbol.iterator],
				  argArray= testCase.args&& (areArgsArray? testCase.args: [ testCase.args])|| [],
				  ran= fn( ...argsArray)
				t.deepEqual( ran, testCase.expected, displayName)
				t.end()
			})
		}
	  })[ displayName]
	testCase.expected= expected
	testCase.args= args
	return testCase
}

export function testMatrixFactory( name, fn, cases){
	return cases.map( _case=> simpleTestFactory( name, fn, _case))
}

export default testFactory
