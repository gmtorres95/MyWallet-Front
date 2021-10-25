function saveToLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem("user"));
}

function clearLocalStorage() {
    localStorage.clear();
}

export {
    saveToLocalStorage,
    getFromLocalStorage,
    clearLocalStorage
};