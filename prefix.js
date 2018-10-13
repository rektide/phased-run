const r= /^(pre|post)+/g

/**
 * Calculate the prefix value for a string of prefixes
 */
export function prefix( prefixes){
	let
	  value= 0,
	  scale= 0.4,
	  exec 
	r.lastIndex= 0
	while( exec= r.exec( prefixes)){
		if( exec[ 0]=== "pre"){
			value-= scale
		}else{
			value+= scale
		}
		scale/= 2
	}
	return value
}
export default prefix
