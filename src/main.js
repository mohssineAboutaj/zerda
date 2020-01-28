// import fontawesome
import '../node_modules/@fortawesome/fontawesome-free/js/all.min.js';

// import materialize-css (css file)
import "!style-loader!css-loader!../node_modules/materialize-css/dist/css/materialize.min.css";

// import glide slider files
import '!style-loader!css-loader!../node_modules/@glidejs/glide/dist/css/glide.core.min.css';
import Glide from '@glidejs/glide';
window.Glide = Glide

// import bootstrap-4-utilities file
import "!style-loader!css-loader!../node_modules/bootstrap-utilities/bootstrap-utilities.css"

// import materialize-css (js file)
import "../node_modules/materialize-css/dist/js/materialize.min.js";

// import shufflejs
import Shuffle from 'shufflejs';
window.Shuffle = Shuffle;

// import AOS (Animation On Scroll)
import AOS from 'aos';
window.AOS = AOS;

// import service worker for PWA
import "./js/sw.js";

// import custom js file
import "./js/custom.js";

// import custom style & theme loader
import "./js/change-theme.js";

