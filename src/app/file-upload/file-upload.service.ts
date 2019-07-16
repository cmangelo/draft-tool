import { Injectable } from "@angular/core";

import { Position } from "../shared/position.enum";
import { ApiHelperService } from "../shared/services/api-helper.service";

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {

    constructor(private api: ApiHelperService) { }

    uploadFile(position: Position, formData: FormData) {
        return this.api.post('positions/' + position, formData); //, { responseType: 'blob' }
    }
}