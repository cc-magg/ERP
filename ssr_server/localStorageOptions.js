export function LocalStorageCheckForThis(searchedData) {
    //this function can return false in case it dosent exist or true 
    let result = localStorage.getItem(searchedData);
    if(result != null) {
        return true
    } else {
        return false
    }
}

export function LocalStorageGetData(searchedData) {
    let result = localStorage.getItem(searchedData);
    return result
}

export function LocalStorageRemoveItem(item) {
    if(LocalStorageCheckForThis(item)) {
        localStorage.removeItem(item)
    }
}

export function LocalStorageAddItem(key, value) {
    localStorage.setItem(key, value);
}