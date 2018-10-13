// import parse from "./parse.js"
import base from "./base.js"
import prefix from "./prefix.js"

export function all(){
	//parse()
	base()
}
export default all

if( typeof require!== "undefined"&& require.main=== module){
	all()
}
