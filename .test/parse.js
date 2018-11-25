import tape from "tape"
import parse from "../parse.js"
import test from "./util/test-factory.js"

export const post= test( "parse a post- postfix", function( t){
	const parsed= parse( "postrun")
	t.equal( parsed.root, "run")
	t.equal( parsed.modifier, 2)
	t.end()
})

export const modifierless= test( "parse without modifier", function( t){
	const parsed= parse( "run")
	t.equal( parsed.root, "run")
	t.equal( parsed.modifier, 0)
	t.end()
})

export const pre= test( "parse a pre- prefix", function( t){
	const parsed= parse( "prerun")
	t.equal( parsed.root, "run")
	t.equal( parsed.modifier, -2)
	t.end()
})
export const prepre= test("parse a prepre- prefix", function( t){
	const parsed= parse( "preprerun")
	t.equal( parsed.root, "run")
	t.equal( parsed.modifier, -3)
	t.end()
})

export const postpre= test( "parse a postpre- prefix", function( t){
	const parsed= parse( "postprerun")
	t.equal( parsed.root, "run")
	t.equal( parsed.modifier, -1)
	t.end()
})

export const postprepostpre= test( "parse a postprepostprepre- prefix", function( t){
	const parsed= parse( "postprepostprerun")
	t.equal( parsed.root, "run")
	t.equal( parsed.modifier, (-8 + 4 - 2 + 1) / 4)
	t.end()
})

export const nonPrefixStart= test( "parse detect non-prefixes at the beginning", function( t){
	const parsed= parse( "Xprerun")
	t.equal( parsed.root, "Xprerun")
	t.equal( parsed.modifier, 0)
	t.end()
})

export const nonPrefixMiddle= test( "parse will detecta non-prefixes in the middle", function( t){
	const parsed= parse( "preXpostrun")
	t.equal( parsed.root, "preXpostrun")
	t.equal( parsed.modifier, 0)
	t.end()
})

export function all(){
	post()
	modifierless()
	pre()
	prepre()
	postpre()
	postprepostpre()
	nonPrefixStart()
	nonPrefixMiddle()
}
export default all

if( typeof require!== "undefined"&& require.main=== module){
	all()
}
