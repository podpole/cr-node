import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

export interface subMenuElem {
    url: string,
    name: string,
    active: boolean
}

@Injectable()
export class SubMenu {

    private subMenuList = new Subject<subMenuElem[]>();
    private menuData = {
        dashboard: [
            {url: 'stat', name: 'Статистика', active: false}
        ],
        content:[
            {url: 'recipes', name: 'Рецепты', active: false},
            {url: 'category', name: 'Категории', active: false}
        ]
    };

    getSubMenu$ = this.subMenuList.asObservable();

    setSubMenu (module:string, component: string) {
        let  data:subMenuElem[] = [];
        this.menuData[module].forEach(function (elem:subMenuElem) {
            let newElem:subMenuElem = {
                url:  '/' + module + '/' + elem.url,
                name: elem.name,
                active: false
            };

            if(elem.url == component)
            {
                newElem.active = true;
            }

            data.push(newElem);
        });

        this.subMenuList.next(data);
    }
}