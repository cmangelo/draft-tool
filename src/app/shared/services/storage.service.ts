import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService as ngxStorage } from 'ngx-webstorage-service';


@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(@Inject(LOCAL_STORAGE) private ngxStorage: ngxStorage) { }

    get(key: string): any {
        return this.ngxStorage.get(key);
    }

    save(key: string, value: any): void {
        this.ngxStorage.set(key, value);
    }

    destroy(key: string): void {
        this.ngxStorage.remove(key);
    }
}