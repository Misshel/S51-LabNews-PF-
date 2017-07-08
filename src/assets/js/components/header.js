const Header = () =>{
  const  header = $('<header class="row white" role="headerigation"></header>');
  const contHeader     = $('<div class="col 12"></div>');
  const headerLength  = $('<div class="col 2"></div>');

  for (var i = 0; i < 2; i++) {
    const menuLength = $('<div class="col 6"></div>');
    headerLength.append(menuLength);
    if (i=0) {
      const iconMenu    = $('<div class="col 2"><a href="#" data-activates="slide-out" class="button-collapse"><img src="assets/img/menu.png" alt=""></a></div>');
      const section     = $('<div class="col 10">SECTION</div>');
      menuLength.append(iconMenu);
      menuLength.append(section);
    } else {
      const iconSearch    = $('<div class="col 2"><a href="#" data-activates="slide-out" class="button-collapse"><img src="assets/img/search.png" alt=""></a></div>');
      const search  = $('<div class="col 10">SEARCH</div>');
      menuLength.append(iconSearch);
      menuLength.append(search);
    }
  }
  contheader.append(headerLength);

  const headerRigth = $('<div class="col 3 offset-s9"></div>');
  const iconFace   = $('<div class="col 2 offsetRight"><div class="col 4"><img src="assets/img/fb.png" alt=""></div></div>');
  const iconTwitter = $('<div class="col 2 offsetRight"><div class="col 4"><img src="assets/img/tw.png" alt=""></div></div>');
  const iconLinkdin = $('<div class="col 2 offsetRight"><div class="col 4"><img src="assets/img/in.png" alt=""></div></div>');

  headerRigth.append(iconFace);
  headerRigth.append(iconTwitter);
  headerRigth.append(iconLinkdin);

  contheader.append(headerRigth);
  header.append(contheader)
  return   header;
}
