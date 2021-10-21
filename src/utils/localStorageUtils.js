function saveToLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem("user"));
}

export {
    saveToLocalStorage,
    getFromLocalStorage
};