
/*
* 1.把tab-body-div和tab-head-div选中状态移除
* 2.把制定下表的index和tab-head-div和tab-body-div的选中状态加上去
*/
var tabs = document.getElementsByClassName('tab-head-div'); //标签头集合
var tab_bodys = document.getElementsByClassName('tab-body-div'); //标签内容集合

var tabs2 = document.getElementsByClassName('tab-head-div2'); //标签头集合
var tab_bodys2 = document.getElementsByClassName('tab-body-div2'); //标签内容集合

function selectTab(index) {
for (var i = 0; i < tabs.length; i++) {
tabs[i].classList.remove('current');
tab_bodys[i].classList.remove('current');
}
tabs[index].classList.add('current');
tab_bodys[index].classList.add('current');

for (var i = 0; i < tabs2.length; i++) {
    tabs2[i].classList.remove('current1');
    tab_bodys2[i].classList.remove('current1');
    }
    tabs2[index].classList.add('current1');
    tab_bodys2[index].classList.add('current1');
}



function reset() {
    document.getElementById('myform2').reset();
}

function selectFocus(){
    document.getElementById("select").setAttribute("size","5");
}
function selectClick(){
    document.getElementById("select").removeAttribute("size");
    document.getElementById("select").blur();
    this.setAttribute("selected","");
}

