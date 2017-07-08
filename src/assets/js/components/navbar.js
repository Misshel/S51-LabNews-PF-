const navbar = () =>{
  const nav = $('<nav class="white" role="navigation"></nav>');
  const contNav     = $('<div class="col 12"></div>');
  const navLength  = $('<div class="col 2"></div>');

  for (var i = 0; i < 2; i++) {
    const menuLength = $('<div class="col 6"></div>');
    navLength.append(menuLength);
    if (i=0) {
      const iconMenu    = $('<div class="col 2"><a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a></div>');
      const section     = $('<div class="col 10">SECTION</div>');
      menuLength.append(iconMenu);
      menuLength.append(section);
    } else {
      const iconSearch    = $('<div class="col 2"><a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">search</i></a></div>');
      const search  = $('<div class="col 10">SEARCH</div>');
      menuLength.append(iconSearch);
      menuLength.append(search);
    }
  }
  contNav.append(navLength);

  const navRigth = $('<div class="col 3 offset-s9"></div>');
  const iconFace   = $('<div class="col 2 offsetRight"><div class="col 4"><span class=""></span></div></div>');
  const iconTwitter = $('<div class="col 2 offsetRight"><div class="col 4"><span class=""></span></div></div>');
  const iconLinkdin = $('<div class="col 2 offsetRight"><div class="col 4"><span class=""></span></div></div>');

  navRigth.append(iconFace);
  navRigth.append(iconTwitter);
  navRigth.append(iconLinkdin);

  contNav.append(navRigth);
  nav.append(contNav)
  return   nav;
}









//
// const navbarDestock = () =>{
//   const nav = $('<nav class="white" role="navigation"></nav>');
//   const navCont = $('<div class="nav-wrapper container"></div>');
//   const menu = $('<a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>');
//   const categories = ["Opinion","Cultura","Peru", "Tecnologia","Mundo", "LifeStyle", "Deporte"];
//   const lista = $('<ul class="right hide-on-med-and-down"></ul>');
//   const listamovil = $('<ul id="slide-out" class="side-nav"></ul>');
//
//   for (var i = 0; i < categories.length; i++) {
//     const li = $("<li><a>"+categories[0] +"</a></li>");
//     listamovil.append(li);
//     lista.append(li);
//   }
//
//   navCont.append(lista);
//   navCont.append(listamovil);
//   navCont.append(menu);
//   nav.append(navCont)
//   return nav;
// }
