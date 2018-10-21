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
	  areArgsArray= args&& args[ Symbol.iterator]&& !args.charAt,
	  argArray= args&& (areArgsArray? args: [ args])|| [],
	  displayName= `${name}:${expandArgs( caseName, argArray, areArgsArray)}`,
	  testCase= ({
		[ displayName]: function(){
			test( displayName, function( t){
				const
				  { args, expected}= testCase,
				  ran= fn( ...args)
				t.deepEqual( ran, expected, displayName)
				t.end()
			})
		}
	  })[ displayName]
	testCase.expected= expected
	testCase.args= argArray
	return testCase
}

export function testMatrixFactory( name, fn, cases){
	return cases.map( _case=> simpleTestFactory( name, fn, _case))
}

export default testFactory
