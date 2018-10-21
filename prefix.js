import { Scale, ScaleFactor} from "./scale.js"

const r= /(pre|post)+?/g

/**
 * Calculate the prefix value for a string of prefixes
 */
export function prefix( prefixes){
	if( prefixes=== ""){
		return 0
	}
	let
	  value= 0,
	  cursor= 0,
	  exec
	r.lastIndex= 0
	while( exec= r.exec( prefixes)){
		if( !exec|| exec.index!== cursor){
			return -1
		}
		if( exec[ 0]=== "pre"){
			value/= ScaleFactor
			value-= Scale
			cursor+= 3
		}else{
			value/= ScaleFactor
			value+= Scale
			cursor+= 4
		}
	}
	if( prefixes.length!= cursor){
		return -1
	}
	return value
}
export default prefix
