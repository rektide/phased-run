import isMain from "is-main"

import parse from "./parse.js"
import base from "./base.js"
import prefix from "./prefix.js"
import pr from "./phased-run.js"
import comparator from "./comparator.js"

export {
	parse,
	base,
	prefix,
	pr,
	comparator
}

export function all(){
	parse()
	base()
	prefix()
	pr()
	comparator()
}
export default all

if( isMain( import.meta)){
	all()
}
