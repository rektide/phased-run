export function increments(){
	let accum= 0
	function inc( n){
		return function(){
			accum+= n
		}
	}
	return {
	  accum,
	  inc1: inc( 1),
	  inc2: inc( 2),
	  inc3: inc( 3)
	}
}
export default increments
