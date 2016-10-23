"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
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
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map