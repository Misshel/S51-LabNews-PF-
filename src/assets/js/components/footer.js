const footer = () => {
  const footerCont = $('<footer class="row"></footer>');
  const footerLength = $('<div class="col s12 l7"></div>');
  const footerRigth = $('<div class="col s12  l4"></div>');
  const footer1 = $('<div class="col s12  l4"></div>');
  const footerLogo = $('<div class="col s12  l12"><img class="img-responsive" src="assets/img/logo-footer.png" alt="logo Laboratoria"></div>');
  const footerEdit = $('<div class="col s12  l12">'+'<p>© Editado por Laboratoria <br>Av. José Pardo #601 Lima 1 Perú<br>Copyright © Laboratoria.la<br>Todos los derechos reservados.</p>'+'</div>');
  const footerInt= $(' <div class="col s12 l4"></div>');
  const footerPers = $('<div class="col s12  l12"><p>DIRECTOR GENERAL:<br>Francisco Miró Quesada Cantuarias'+'<br></p><p>DIRECTOR PERIODÍSTICO:<br>Fernando Berckemeyer Olaechea<br></p><p>SUSCRIPCIONES:<br>suscriptores@comercio.com.pe'+'<br></p><p>PUBLICIDAD ONLINE:<br>fonoavisos@comercio.com.pe'+'<br></p><p>CLUB EL COMERCIO:<br>clubelcomercio@comercio.com.pe<br>Compromiso de Autorregulación Comercial<br></p></div>');
  const footerEnd = $('<div class="col s12  l5"><div class="col 12"><p>TÉRMINOS Y CONDICIONES DE USO<br>TRABAJA CON NOSOTROS<br>LIBRO DE RECLAMACIONES<br>SEDES PRINCIPALES<br>POLÍTICAS DE PRIVACIDAD<br></p></div><div class="col 12"><div class="col 3">Síguenos</div><div class="col 2"><span class="icon-facebook"></span></span></div><div class="col 2"><span class="icon-twitter"></span></div><div class="col 2"><span class="icon-linkedin"></div></div></div>');

  footer1.append(footerLogo);
  footer1.append(footerEdit);
  footerLength.append(footer1);

  footerInt.append(footerPers);
  footerLength.append(footerInt);


  footerRigth.append(footerEnd);
  footerCont.append(footerLength);
  footerCont.append(footerRigth);

return footerCont;
}
