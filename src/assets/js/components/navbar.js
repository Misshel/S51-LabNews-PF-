const navbar = () =>{
  const categories = ["Lo último","Opinion","Cultura","Peru", "Tecnologia","Mundo", "Economía", "LifeStyle", "Deporte"];

  const nav = $('<nav class="white" role="navigation"></nav>');
  const navCont = $('<div class="nav-wrapper container"></div>');
  const navLogo = $('<div class="col s12"><div class="col s4"><img src="assets/img/logoicon.png" alt="logo laboratoria"></div></div>')
  const lista = $('<ul class=""></ul>');
  const listamovil = $('<ul class=""></ul>');

  for (var i = 0; i < categories.length; i++) {
    const li = $("<li><a>"+categories[0] +"</a></li>");
    listamovil.append(li);
    lista.append(li);
  }

  navCont.append(lista);
  navCont.append(listamovil);
  navCont.append(menu);
  nav.append(navLogo);
  nav.append(navCont);
  return nav;
}
