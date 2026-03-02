const upperName = function (name) {
  return name.toUpperCase();
};
upperName('André'); // ANDRÉ

const lowerName = (name) => {
  return name.toLowerCase();
};
lowerName('Rafael'); // rafael

const countLetters = (word) => word.length;
countLetters('Rafael'); // 6

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = 'active';
  }
  addActiveEvent() {
    // sem o arrow function ele não iria funcionar
    this.menuElement.addEventListener('click', (event) =>
      event.target.classList.add(this.activeClass),
    );
  }
}

const menu = new Menu('.principal');
menu.addActiveEvent();
