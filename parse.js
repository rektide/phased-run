const
  $pre= "pre",
  $post= "post"

export function parse( string){
	let
	  modifier= 0,
	  scale= 0.5,
	  pre= string.lastIndexOf( $pre),
	  post= string.lastIndexOf( $post),
	  root
	if( pre> post){
		root= string.substring( pre+ $pre.length)
	}else if( post== -1){
		return { root: string, modifier: 0}
	}else{
		root= string.substring( post+ $post.length)
	}
	while( pre!== -1|| post!== -1){
		if( pre> post){
			modifier-= scale
			if( pre=== 0){
				return { root, modifier}
			}
	  		pre= string.lastIndexOf( "pre", pre- 1)
			console.log({ val: "pre", post, pre, modifier})
		}else{
			modifier+= scale
			if(post=== 0){
				return { root, modifier}
			}
	  		post= string.lastIndexOf( "post", post- 1)
			console.log({ val: "pst", post, pre, modifier})
		}
		scale/= 2
	}
	return { root: string, modifier: 0}
}
export default parse
