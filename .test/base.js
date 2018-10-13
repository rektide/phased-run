import base from "../base.js"
import test from "./util/test-factory.js"

const fixture= base([ "prepare", "build", "package", "run"])

export const run1= test( "base finds run", function( t){
	const run= fixture( "run")
	t.equal(run, "run")
	t.end()
})

export const run2= test( "base finds a prefixed run", function( t){
	const run= fixture( "prerun")
	t.equal(run, "run")
	t.end()
})

export const run3= test( "base finds a nonsense prefixed run", function( t){
	const run= fixture( "nonsenserun")
	t.equal(run, "run")
	t.end()
})

export function all(){
	run1()
	run2()
	run3()
}
export default all

if( typeof module!== "undefined"&& require.main=== module){
	all()
}
