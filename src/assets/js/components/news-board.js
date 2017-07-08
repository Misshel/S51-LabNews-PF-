const news = () => {

}

const newsPort = () => {
  // const portada = $('<div class="row"></div>');
  // const new1 = $('<div class="col s12"></div>');
  // const contNewsub = $('<div class="col s12"></div>');
  //
  // const new2 = ('<div class="col s12 l6"></div>');
  // const newImg2 =
  // const new2 = ('<div class="col s12 l6"></div>');

  return portada;
}


const newCol3 = (img,noticia) => {
  const col = $('<div class="col s12 l3"></div>');
  const img = $('<div class="col s12"><img src="assets/img/'img'.png" alt="'img'"></div>');
  const text = $('<div class="col s12"><p>'noticia'</p></div>')
  today(hoy);
  col.append(img);
  col.append(text);
}
const newCol6 = (img,noticia,hoy) => {
  const col = $('<div class="col s12 l6"></div>');
  const img = $('<div class="col s12"><img src="assets/img/' + img +'.png" alt="'+ img +'"></div>');
  const text = $('<div class="col s12"><p>'noticia'</p></div>')
  today(hoy);
  col.append(img);
  col.append(text);
}

const today = (hoy) => {
  if(hoy != undefined){
    const hoy = $('<div class="col s2 l2">Hoy</div>');
      col.append(hoy);
  }
}
