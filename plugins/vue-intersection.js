import Vue from 'vue'

var anime = require("animejs");
if(anime.default) {
    anime = anime.default;
}

Vue.directive('intersection', {
    bind(el, binding, vnode) {

        el.style.opacity = "0";

        let observer = new IntersectionObserver((entries, observer) => {                
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        // translateX: [100, 0],
                        easing: 'easeOutCubic',
                        delay: anime.stagger(200),
                        duration: 1000,            
                    });                          
                    observer.unobserve(entry.target);
                }                    
            });             
        }, {root: null, rootMargin: '0px', threshold: '0.25'});
    
        observer.observe(el);
    }
});

