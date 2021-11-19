// FIXME bootstrap doesn't fire load events e.g. scrollspy. Loading scripts via script tags in html instead
// import("./node_modules/lodash/lodash.js");
// import("./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
// import("./node_modules/typed.js/lib/typed.js");

let {
  _,
  bootstrap,
  Typed
} = this;

document.querySelector('#typed-wrap').classList.remove('d-none');

let terminal = new Typed('#typed', {
  strings: [
    document.querySelector('#typed').textContent,
    "whoami\nyour software engineer",
    "whoami\nyour platform engineer",
    "whoami\nyour cloud-native engineer",
    "whoami\nyour principal engineer",
    "whoami\nyour solution architect",
    "whoami\nyour engineering manager",
    "whoami\nyour go-to person",
    "whoami\nyour why? person",
    "whoami\nandreineculau\n$",
  ],
  typeSpeed: 30,
  loop: false
});
