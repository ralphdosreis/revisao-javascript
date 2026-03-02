const menu = {
  class: '.principal',
  ativar() {
    const menuElement = document.querySelector(this.class);
    menuElement.classList.add('active');
  },
};

console.log(menu.selector);
menu.ativar();
menu.hasOwnProperty('class');
