"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero = {
    superman: {
        name: 'Superman',
        alias: 'Clark Kent',
    },
    batman: {
        name: 'Batman',
        alias: 'Bruce Wayne',
    },
    flash: {
        name: 'The Flash',
        alias: 'Barry Allen',
    },
};
async function getHeroDetails(handle) {
    return new Promise(resolve => {
        setTimeout(() => { resolve(hero[handle]); }, 1000);
    });
}
exports.getHeroDetails = getHeroDetails;
//# sourceMappingURL=hero.js.map