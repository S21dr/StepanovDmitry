function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
  const url = 'https://gfs.gov.ru/poisk/?q=%D0%A0%D0%96%D0%94&s=+'
  

 fetch(url)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

ibg();
