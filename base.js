/**
 * Create a function that finds the base phase for an 
 */
export function base( phases){
	const
	  str= `(${ phases.join( "|")})$`,
	  r= new RegExp( str)
	function strip( target){
		const exec= r.exec( target)
		return exec&& exec[ 0]
	}
	return strip
}
export default base
