window.onload = function(){
    
// target class
  const tgt = document.querySelectorAll('.boost-pfs-filter-option');
  const tgtLen = tgt.length;

// goggle btn hide
  tgt[7].insertAdjacentHTML('beforebegin', '<div style="border:solid red;" id="tgl">詳細条件</div>');
  
  
// default set
  const tgl = document.getElementById("tgl");
  for (let i = 7; i < tgtLen; i++) {
    tgt[i].style.display ="none";
  };
  
  // click event
  
  tgl.addEventListener('click', function(){

	//default set
//    tgt[5].style.display ="block";

      if(tgl.className == 'open'){
        tgl.classList.remove("open");
        for (let i = 7; i < tgtLen; i++) {
          tgt[i].style.display ="none";
        };
      }else{
        tgl.classList.add("open");
        for (let i = 7; i < tgtLen; i++) {
        	tgt[i].style.display ="block";
        };
      }
  });

}