const r= /(pre|post)+?/g

const scale= 0.4

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
		if( exec[ 0]=== "pre"){
			if( exec.index!== cursor){
				return -1
			}

			value/= 2
			value-= scale
			cursor+= 3
		}else{
			if( exec.index!== cursor){
				return -1
			}

			value/= 2
			value+= scale
			cursor+= 4
		}
	}
	if( prefixes.length!= cursor){
		return -1
	}
	return value
}
export default prefix
