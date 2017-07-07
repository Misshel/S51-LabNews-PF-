const navbar = () =>{
  return   navbarDestock();

}

const navbarDestock = () =>{
  const nav = $('<nav class="white" role="navigation"></nav>');
  const navCont = $('<div class="nav-wrapper container"></div>');
  const menu = $('<a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>');
  const categories = ["Opinion","Cultura","Peru", "Tecnologia","Mundo", "LifeStyle", "Deporte"]
  const lista = $('<ul class="right hide-on-med-and-down"></ul>');
  // const listamovil = $('<ul id="slide-out" class="side-nav"></ul>');

  for (var i = 0; i < categories.length; i++) {
    const li = $("<li><a>"+categories[0] +"</a></li>");
    listamovil.append(li);
    lista.append(li);
  }

  navCont.append(lista);
  navCont.append(listamovil);
  navCont.append(menu);
  nav.append(navCont)
  return nav;
}
