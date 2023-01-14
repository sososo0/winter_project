var idnumber = 1;

window.onload=function() {
  document.getElementById("addgroup").onclick=write;
 }

function write()  {
  var addtextValue = document.getElementById('contents').value;
  var addpicValue = document.getElementById('picfile').value;
  
  // 2. 추가할 li element 생성
  // 2-1. 추가할 li element 생성
  var textcontent = document.createElement("textcontent"+idnumber);
  var piccontent = document.createElement("piccontent"+idnumber);
  
  // 2-2. li에 id 속성 추가 
  textcontent.setAttribute('id',addtextValue);
  piccontent.setAttribute('id',addpicValue);

  // 2-3. li에 text node 추가 
  const textNode = document.createTextNode(addtextValue);
  textcontent.appendChild(textNode);

  const picNode = document.createTextNode(addpicValue)
  piccontent.appendChild(picNode);
  
  // 3. 생성된 li를 ol에 추가
  document
    .getElementById('written')
    .appendChild(textcontent)
    .appendChild(piccontent);
  
    idnumber++;
  
}

