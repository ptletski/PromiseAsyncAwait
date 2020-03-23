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
  
  export async function getHeroDetails(handle: string) {
    return new Promise<{name: string; alias: string}>(resolve => {
      setTimeout(() => {resolve(hero[handle]);}, 1000);
    });
  
  }