function saveStorageAuthorizationStatus(status) {
	const isAuthorized = JSON.stringify(status);
	sessionStorage.setItem('isAuthorized', isAuthorized);
}

export { saveStorageAuthorizationStatus };