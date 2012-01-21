/* A fix for iPhone viewport scale bug */
/* http://www.blog.highub.com/mobile-2/a-fix-for-iphone-viewport-scale-bug/ */
(function (document) {
  window.scale = window.scale || {};
  scale.viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]');
  scale.ua = navigator.userAgent;
  scale.iOS = function () {
    if (scale.viewportmeta && /iPhone|iPad/.test(scale.ua) && !/Opera Mini/.test(scale.ua)) {
      scale.viewportmeta.content = "width=device-width,minimum-scale=1,maximum-scale=1";
      document.addEventListener("gesturestart", scale.gestureStart, false);
    }
  };
  scale.gestureStart = function () {
    scale.viewportmeta.content = "width=device-width,minimum-scale=0.25,maximum-scale=1.6";
  };
})(document);

scale.iOS();