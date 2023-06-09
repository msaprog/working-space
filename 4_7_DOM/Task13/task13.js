export default () => {
  // BEGIN (write your solution here)
  const tabsBtn = document.querySelectorAll('.nav-link');

  tabsBtn.forEach((item) => {
    item.addEventListener('click', () => {
      const currentBtn = item;
      const tabId = currentBtn.getAttribute('data-bs-target');
      const currentContent = document.querySelector(tabId);

      const nav = item.closest('.nav');
      // Находим активный элемент внутри меню
      const activeElementBtn = nav.querySelector('.active');
      // Находим активный элемент Контента по атрибуту data-bs-target
      const activeContentId = activeElementBtn.getAttribute('data-bs-target');
      const activeElementContent = document.querySelector(activeContentId);

      // Убираем активность у прежнего элемента меню и назначаем выбраному
      activeElementBtn.classList.remove('active');
      currentBtn.classList.add('active');

      // Убираем активность у прежнего элемента контента и назначаем выбраному
      activeElementContent.classList.remove('active');
      currentContent.classList.add('active');

      /* tabsBtn.forEach((btn) => {
        btn.classList.remove('active');
      }); */

      /* tabsContent.forEach((content) => {
        content.classList.remove('active');
      }); */

      /* currentBtn.classList.add('active');
      currentContent.classList.add('active'); */
    });
    // END
  });
};

// третий тест проверял, что при смене работы в одной панели вкладок
// не сбивается состояние у другой панели, у меня форыч удалял активность
// со всех вкладок вообще

// вам нужно сделать так, чтобы табы не зависели друг от друга.
// То есть чтобы переключение вкладок в одном компоненте не влияло на работу
// в другом.Сейчас этого не происходит: если переключить вкалдку "Messages setting",
// то вкалдки User перестают менять контент.
