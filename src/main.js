// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'


Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faFacebookF, faTwitter, faLinkedinIn, faGithub);
//渲染vue
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //使用vue-router
  components: { App },
  template: '<App/>',
});

$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

      //卷軸到達指定高度有左滑進來的動畫
      /* Check the location of each desired element */
      $('.ani-left').each( function(i){

          var bottom_of_object = $(this).offset().top ;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          console.log(bottom_of_object,bottom_of_window)
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){

              $(this).addClass("slideInLeft")

          }

      });
      //卷軸到達指定高度有右滑進來的動畫
      $('.ani-right').each( function(i){

        var bottom_of_object = $(this).offset().top ;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        console.log(bottom_of_object,bottom_of_window)
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){

            $(this).addClass("slideInRight")

        }

    });

  });

});
