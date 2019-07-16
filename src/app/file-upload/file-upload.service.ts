import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {

    constructor(private http: HttpClient) { }

    uploadFile(formData: FormData) {
        return this.http.post('http://localhost:3000/players/upload', formData, { responseType: 'blob' });
    }
}