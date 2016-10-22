import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export interface ICategory {
    id: number,
    title: string,
    header: string,
    url: string,
    description: string,
    meta_title: string,
    meta_description: string,
    meta_keywords: string
}

@Injectable()
export class CategoryService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private categoryUrl = '/api/category/';

    constructor(private http: Http) {

    }

    getCategoryList(): Promise<ICategory[]> {
        return this.http.get(this.categoryUrl + 'list')
            .toPromise()
            .then((response) => {
                let result = response.json();

                if (result.access == 'deny')
                {
                    this.handleError({message:'Access Deny'});

                }
                //response.json().data as ICategory[]
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}