export function increments(){
	function inc( n){
		return function(){
			this.accum+= n
		}
	}
	let o= {
	  accum: 0,
	  getAccum: function(){
		return this.accum
	  },
	  inc1: inc( 1),
	  inc2: inc( 2),
	  inc3: inc( 3)
	}
	o.getAccum= o.getAccum.bind( o)
	return o
}
export default increments
