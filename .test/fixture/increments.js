export function increments(){
	let accum= 0
	function inc( n){
		return function(){
			accum+= n
		}
	}
	let o= {
	  accum,
	  inc1: inc( 1),
	  inc2: inc( 2),
	  inc3: inc( 3)
	}
	Object.defineProperty( o, "accum", {
		get: function(){
			return accum
		},
		set: function( val){
			accum= val
		}
	})
	return o
}
export default increments
