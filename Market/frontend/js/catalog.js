"use strict"

//Открытие при нажании на кнопку
const catalog = document.querySelector(".catalog"),
      catalogButton = document.querySelector(".search__btn");

function addClassActive(node,className){
    if(node){
        node.classList.toggle(`${className}`)
    }
}

catalogButton.addEventListener("click",()=>{
    addClassActive(catalog,"_active");
    addClassActive(catalogButton.firstElementChild);
});

// Работа с каталогом
let catigories = function (target) {
    var _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
      _eventTabsShow,
      _showTab = function (tabsLinkTarget) {
        let tabsPaneTarget, tabsLinkActive, tabsPaneShow;
        tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
        tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.catalog__item_active');
        tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.catalog__block_active');
        // если следующая вкладка равна активной, то завершаем работу
        if (tabsLinkTarget === tabsLinkActive) {
          return;
        }
        // удаляем классы у текущих активных элементов
        if (tabsLinkActive !== null) {
          tabsLinkActive.classList.remove('catalog__item_active');
        }
        if (tabsPaneShow !== null) {
          tabsPaneShow.classList.remove('catalog__block_active');
        }
        // добавляем классы к элементам (в завимости от выбранной вкладки)
        tabsLinkTarget.classList.add('catalog__item_active');
        tabsPaneTarget.classList.add('catalog__block_active');
        document.dispatchEvent(_eventTabsShow);
      },
      _switchTabTo = function (tabsLinkIndex) {
        var tabsLinks = _elemTabs.querySelectorAll('.catalog__item');
        if (tabsLinks.length > 0) {
          if (tabsLinkIndex > tabsLinks.length) {
            tabsLinkIndex = tabsLinks.length;
          } else if (tabsLinkIndex < 1) {
            tabsLinkIndex = 1;
          }
          _showTab(tabsLinks[tabsLinkIndex - 1]);
        }
      };
    
    _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });
    
    _elemTabs.addEventListener('mouseover', function (e) {
      var tabsLinkTarget = e.target;
      // завершаем выполнение функции, если кликнули не по ссылке
      if (!tabsLinkTarget.classList.contains('catalog__item')) {
        return;
      }
      // отменяем стандартное действие
      e.preventDefault();
      _showTab(tabsLinkTarget);
    });
    
    return {
      showTab: function (target) {
        _showTab(target);
      },
      switchTabTo: function (index) {
        _switchTabTo(index);
      }
    }
    
    };
    
    catigories('.catalog__categories');