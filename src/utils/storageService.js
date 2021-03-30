import isObjectLike from 'lodash/isObjectLike';
import { isJSONString } from './validations';

class StorageService {
    constructor(storage) {
        this.storage = storage;
    }

    setItem(key, value) {
        let setValue = value;
        if (isObjectLike(value)) {
            setValue = JSON.stringify(value);
        }
        return this.storage.setItem(key, setValue);
    }

    getItem(key) {
        const value = this.storage.getItem(key);
        return isJSONString(value) ? JSON.parse(value) : value;
    }

    removeItem(key) {
        return this.storage.removeItem(key);
    }

    clearAll() {
        this.storage.clear();
    }

    removeItems(keys) {
        keys.forEach(key => this.removeItem(key));
    }
}

export const localStorageService = new StorageService(window.localStorage);

class DefaultStorage {
    constructor() {
        this.storage = localStorageService;
    }

    getStorage() {
        return this.storage;
    }
}

export const defaultStorageService = new DefaultStorage();
