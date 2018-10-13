import tape from "tape"

export function testFactory( name, fn){
	return function(){
		tape( name, fn)
	}
}
export default testFactory
