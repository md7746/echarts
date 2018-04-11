//localStorage
function localStorageSave(key, value) {
	localStorage.setItem(key, JSON.stringify(value))
}
function localStorageFetch(key) {
	return JSON.parse(localStorage.getItem(key)) || {}
}

export {localStorageSave,localStorageFetch}