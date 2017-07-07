'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(navbar(_ => render(root)));

  root.append(wrapper);
}

const state = {
  news: null,
  new: null
};


$(_=>{
  const root = $('#root');
  render(root);
  // readyCarousel();

});
