export class NotImplemented extends Error{
	static notImplemented(){
		throw new NotImplemented()
	}
	constructor(){
		super("Not implemented")
	}
}

export let invoke= NotImplemented.notImplemented

export function set( fn){
	invoke= fn
}

export default function notImplemented(){
	return invoke()
}
