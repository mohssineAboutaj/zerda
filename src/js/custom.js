document.addEventListener('DOMContentLoaded', () => {
  /* Start make header full screen */
  const nav = document.querySelector('nav'),
        header = document.querySelector('header'),
        headerContainer = header.querySelector('.container');

  header.style.minHeight = (window.innerHeight - nav.clientHeight) + 'px';
  headerContainer.style.height = header.clientHeight + "px";
  /* End make header full screen */

  /* Start initialization & config of sidenav */
  const sidenav1 = document.getElementById('mobile-menu'),
        sidenav2 = document.getElementById('change-theme');

  M.Sidenav.init(sidenav1, {
    edge: 'left',
  });
  M.Sidenav.init(sidenav2, {
    edge: 'right',
  });
  /* End initialization & config of sidenav */

  /* Start initialization & config of parallax */
  const paral = document.querySelectorAll('.parallax');
  M.Parallax.init(paral);
  /* Start initialization & config of parallax */

  /* Start initialization & config of carousel */
  const glideSelector = '.glide',
        glideOptions = {
          type: 'carousel',
          perView: 3,
          focusAt: 'center',
          breakpoints: {
            800: {
              perView: 2
            },
            480: {
              perView: 1
            }
          },
          autoplay: 1500,
        };

  let chefsGlide = new Glide(glideSelector, glideOptions);
  chefsGlide.mount();
  /* End initialization & config of carousel */

  /* Start initialization & config of shufflejs */
  const shuffleElement = document.getElementById('menu-shuffle-grid'),
        filterBtns = document.querySelectorAll('.filter-options button'),
        defaultFilterType = "all";
  // create new instance from Shufflejs
  let ShuffleInstance = new Shuffle(shuffleElement, {
    itemSelector: '.js-item',
  });
  // show default element
  ShuffleInstance.filter(defaultFilterType)
  // trigger shufflejs manualy
  filterBtns.forEach(btn => {
    let filterType = btn.getAttribute('data-group');
    btn.addEventListener("click", () => {
      ShuffleInstance.filter(filterType);
      //this.classList.add('shuffle-active');
    });
  });
  /* End initialization & config of shufflejs */

  /* Start initialization & config of materialbox */
  const materialboxElements = document.querySelectorAll('.materialbox');
  M.Materialbox.init(materialboxElements, {
    onOpenStart: () => {
      nav.classList.add('hide');
    },
    onCloseEnd: () => {
      nav.classList.remove('hide');
    },
  });
  /* End initialization & config of materialbox */

  /* Start initialization & config of tooltip */
  const tooltipElements = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(tooltipElements, {
    position: "top"
  });
  /* End initialization & config of tooltip */

  /* Start initialization & config of Map */
  const GoogleMaps = require('google-maps');
  let mapContainer = document.getElementById('map'),
      apiKey = "AIzaSyBMJPvgJo6PrfKC7v91m2Kz_91a7lUKJCk",
      mapOptions = {
        center: {
          lat: 31.6260,
          lng: 7.9891,
        },
        zoom: 8,
      },
      map,
      mapInit = (google) => {
        map = new google.maps.Map(mapContainer, mapOptions);
        marker = new google.maps.Marker({
          position: mapOptions.center,
          map,
        })
      };
  // styling the mapContainer
  mapContainer.style.height = "500px";
  mapContainer.style.width = "100%";
  // use GoogleMaps
  GoogleMaps.KEY = apiKey;
  GoogleMaps.load((google) => {
    map = new google.maps.Map(mapContainer, mapOptions);
    marker = new google.maps.Marker({
      position: mapOptions.center,
      map,
      title: 'ZERDA position',
    })
  });
  /* End initialization & config of Map */

  /* Start initialization & config of FormSelect */
  const selectElement = document.getElementById('person');
  M.FormSelect.init(selectElement);
  /* End initialization & config of FormSelect */

  /* Start initialization & config of ScrollSpy */
  const scrollspyElems = document.querySelectorAll('.scrollspy'),
        scrollspyOptions = {
          throttle: 1000,
        };
  M.ScrollSpy.init(scrollspyElems, scrollspyOptions);
  /* End initialization & config of ScrollSpy */

  /* Start random header background */
  import(
    '../../data/menu.json'
  ).then(({default: jsonMenu}) => {
    const listOfMeals = jsonMenu.menuList;
    let allMealsImgs = [];

    listOfMeals.forEach((el) => {
      el.meals.forEach((meal) => {
        allMealsImgs.push(meal.img)
      })
    })

    getRandomImg = () => {
      let x = Math.ceil(Math.random() * allMealsImgs.length)
      return allMealsImgs[x];
    }

    header.style.backgroundImage = `url(${getRandomImg()})`;
    document.getElementById('about').querySelector('img').src = getRandomImg();
  }).catch((err) => {
    console.log(err)
  })
  /* End random header background */
});
