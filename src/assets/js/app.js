'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
  wrapper.append(navbar(_ => render(root)));
  wrapper.append(footer(_ => render(root)));

  root.append(wrapper);
}

const state = {
  news: null,
  new: null
};


$(_=>{

  // $.post(news(),(news)=>{
  //   state.news = news;
  //   console.log(state.news);
  // });
  const root = $('#root');
  render(root);
});
