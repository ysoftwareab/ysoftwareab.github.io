// FIXME bootstrap doesn't fire load events e.g. scrollspy. Loading scripts via script tags in html instead
// import("./node_modules/lodash/lodash.js");
// import("./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
// import("./node_modules/typed.js/lib/typed.js");

let {
  _,
  bootstrap,
  Typed
} = this;

// mobile: close menu when clicking a link
let navbarMenuToggler = document.getElementById('navbar-menu-toggler');
let navbarMenu = document.getElementById('navbar-menu');
document.querySelectorAll('#navbar-brand, .navbar-collapse a').forEach(function(a) {
  a.addEventListener('click', function() {
    if (!navbarMenu.classList.contains('show')) {
      // NOTE shouldn't really happen that you can click
      return;
    }
    navbarMenuToggler.click();
  });
});

let terminal = new Typed('#typed', {
  strings: [
    document.querySelector('#typed').textContent,
    'whoami\nyour product-minded engineer', // https://blog.pragmaticengineer.com/the-product-minded-engineer/
    'whoami\nyour forward deployed engineer',
    // 'whoami\nyour design engineer', // https://www.linkedin.com/pulse/gap-egor-kloos/
    'whoami\nyour devops engineer',
    'whoami\nyour platform engineer',
    'whoami\nyour cloud-native engineer',
    'whoami\nyour principal engineer',
    // 'whoami\nyour solution architect',
    'whoami\nyour engineering manager',
    'whoami\nyour go-to person',
    'whoami\nyour why? person',
    'whoami\nandrei\n$',
  ],
  typeSpeed: 30,
  loop: false
});
