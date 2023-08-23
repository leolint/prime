function openMobileMenu() {
  const button = document.getElementById('headerButton')
  const header = document.getElementById('header')

  button.addEventListener('click', function () {
    header.classList.toggle('open')
  })
}

openMobileMenu()


///DropdownMenus

function openMenu() {
  const buttons = document.querySelectorAll('#navList li')
  const wrappers = document.querySelectorAll('.dropDownMenus .wrapper')


  buttons.forEach(function (item) {
    item.addEventListener('click', function (event) {
      let targetID = event.target.id;
      wrappers.forEach(function (item) {
        item.classList.remove('open')
        item.querySelectorAll('img').forEach(function (img) {
          img.addEventListener('click', function () {
            item.classList.remove('open')
          })
        })
      })
      switch (targetID) {
        case 'adressButton':
          let adress = document.getElementById('adress')
          adress.classList.add('open')
          break
        case 'menuButton':
          let menu = document.getElementById('menu')
          menu.classList.add('open')
          break
        case 'hookasButton':
          let hookas = document.getElementById('hookas')
          hookas.classList.add('open')
          break
        case 'barButton':
          let bar = document.getElementById('bar')
          bar.classList.add('open')
          break
        case 'tariffsButton':
          let tariffs = document.getElementById('tariffs')
          tariffs.classList.add('open')
          break

      }
    })
  })
}

openMenu()

//////SLIDER


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
