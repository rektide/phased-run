const
  $pre= "pre",
  $post= "post"

export function parse( string){
	let
	  modifier= 0,
	  scale= 0.5,
	  pre= string.lastIndexOf( $pre),
	  post= string.lastIndexOf( $post),
	  cursor,
	  root
	if( pre> post){
		cursor= pre+ $pre.length
		root= string.substring( cursor)
	}else if( post== -1){
		return { root: string, modifier: 0}
	}else{
		cursor= post+ $post.length
		root= string.substring( cursor)
	}
	while( pre!== -1|| post!== -1){
		if( pre> post){
			cursor-= $pre.length
			if( pre!= cursor){
				return { root: string, modifier: 0}
			}

			modifier-= scale
			if( pre=== 0){
				return { root, modifier}
			}
	  		pre= string.lastIndexOf( "pre", pre- 1)
		}else{
			cursor-= $post.length
			if( post!= cursor){
				return { root: string, modifier: 0}
			}

			modifier+= scale
			if(post=== 0){
				return { root, modifier}
			}
	  		post= string.lastIndexOf( "post", post- 1)
		}
		scale/= 2
	}
	return { root: string, modifier: 0}
}
export default parse
