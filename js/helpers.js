export function query(selector, scope) {
	console.log(selector);
	if(scope === null) throw 'query scope cannot be null';
	return (scope || document).querySelector(selector);
}

export function listen(target, type, callback, capture) {
	target.addEventListener(type, callback, !!capture);
}

/**
 * 8. Add a code comment explaining what delegateEvent function does
 *
 * I think that this function allows me to listen for events of target's children by attaching a listener to the target instead to the children.
 */
export function delegateEvent(target, selector, type, handler, capture) {
	const dispatchEvent = event => {
		console.log( event.target );
		console.log( selector );

		const targetElement = event.target;
		const potentialElements = target.querySelectorAll(selector);
		let i = potentialElements.length;

		while (i--) {
			if (potentialElements[i] === targetElement) {
				handler.call(targetElement, event);
				break;
			}
		}
	};

	listen(target, type, dispatchEvent, !!capture);
}

export const escapeForHTML = s => s.replace(/[&<]/g, c => c === '&' ? '&amp;' : '&lt;');

