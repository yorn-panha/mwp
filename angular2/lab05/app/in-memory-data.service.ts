/**
 * Created by ZZ on 10/22/16.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let products =[
            { id: 1,
                name: 'iPod',
                category: 'Music Player',
                description: "Listen music"
            },
            { id: 2,
                name: 'iPhone',
                category: 'Phone',
                description: "Make calls"
            },
            { id: 3,
                name: 'iWatch',
                category: 'Watch',
                description: "Watch clock"
            },
            { id: 4,
                name: 'iPad',
                category: 'Tablet',
                description: "Read EBook"
            }
        ];
        return {products};
    }
}