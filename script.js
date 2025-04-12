const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu-elements');

menuButton.addEventListener('click', (e) => {
  // Переключаем видимость меню
  menu.style.transform = menu.style.transform === 'translateY(0)' ? 'translateY(-100%)' : 'translateY(0)';
  e.stopPropagation(); // Предотвращаем событие клика от распространения дальше
});

document.addEventListener('click', (e) => {
  // Проверяем, был ли клик вне кнопки "Меню" и меню
  if (!menu.contains(e.target) && e.target !== menuButton && document.documentElement.clientWidth < 1325) {
    menu.style.transform = 'translateY(-100%)'; // Скрываем меню
  }
});

window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth >= 1325) {
      menu.style.transform = 'translateY(0%)';
      menu.style.transition = 'transform 0s';
    }
    else {
      menu.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        menu.style.transition = 'transform 0.3s ease';
      }, 1);
    }
});