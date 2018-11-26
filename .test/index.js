import parse from "./parse.js"
import base from "./base.js"
import prefix from "./prefix.js"
import pr from "./phased-run.js"

export {
	parse,
	base,
	prefix,
	pr
}

export function all(){
	parse()
	base()
	prefix()
	pr()
}
export default all

if( typeof require!== "undefined"&& require.main=== module){
	all()
}
