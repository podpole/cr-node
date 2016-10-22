import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export interface IAccess {
    status: string,
    access: string
}

@Injectable()
export class AccessService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private accessCheckUrl = '/api/admin/';

    constructor(private http: Http) {

    }

    init(): Promise<IAccess> {
        return this.http.get(this.accessCheckUrl + 'init')
            .toPromise()
            .then((response) => {
                let result = response.json();

                if (result.access == 'deny')
                {
                    this.handleError({message:'Access Deny'});
                }

                return result as IAccess;
            })
            .catch(()=>{
                return {status: 'error', access: 'deny'};
            });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}