
                      /*伪表单效果*/ 
var a = document.querySelector('.box1').querySelectorAll('a'); 
//4个大盒子的数组
var divAll = 
             [document.querySelector('.box2'),               
              document.querySelector('.box3'), 
              document.querySelector('.box4'), 
              document.querySelector('.box5')]
var hAll = 
            [document.getElementById('two'), 
             document.getElementById('three'),
             document.getElementById('four')
            ]

/*伪表单效果*/
//消除盒子
for(var l = 1; l < divAll.length; ++l)
{
  divAll[l].style.display= 'none'; 
}

//消除标题
for(var ll = 0; ll < hAll.length; ++ll)
{
  hAll[ll].style.display = 'none';
}

for(let k = 0; k < a.length; ++k)
{
  a[k].onclick = function() 
  {
    //消除盒子
    for(var l = 0; l < divAll.length; ++l)
  {
    divAll[l].style.display= 'none'; 
  }
  //消除盒子
  for(var ll = 0; ll < hAll.length; ++ll)
  {
    hAll[ll].style.display = 'none';
  }
  //恢复盒子和标题
    if(k == 0)
    divAll[k].style.display ='block';
    else if(k ==1)
    {
      divAll[k].style.display ='flex';
      hAll[k-1].style.display = 'block';
    }
    else if(k ==2)
    {
      divAll[k].style.display ='block';
      hAll[k-1].style.display = 'block';
    }
    else
      divAll[k].style.display ='flex'; 
      hAll[k-1].style.display = 'block';  
  }
}
                

                      /*自我介绍版面的效果*/
/*广告的关闭*/
var close = document.getElementById('close');
var ad = document.querySelector('.box2-2');
close.onclick = function() {
  ad.style.display = 'none';
  box3.style.marginTop = '117px';

}

/*自我介绍图片的切换*/
var box3 = document.querySelector('.box2-3');
var btns = document.querySelectorAll('.box2-3 button');
var t;
var backgroundimage = document.querySelector('.box2');
var img =new Array();
var img =["image/刘锦中.png","image/刘锦中2.jpg", "image/刘锦中3.jpg", "image/刘锦中4.jpg"] ;

for (t = 0; t < btns.length; ++t)
{
  let tt = t;

  btns[t].onclick = function()
  {
    for(var j = 0; j < btns.length; ++j)
    {
      btns[j].style.backgroundColor = '';
    }
    this.style.backgroundColor = '#999';
    console.log(t);
 
    backgroundimage.style.backgroundImage = 'url(' + img[tt] + ')';
  }
  
}

                        /*学习经历的效果*/
/*第一个盒子背景颜色的改变*/
var box3_1 = document.querySelector('.box3-1');

box3_1.onmouseover = function() 
{
  this.className = 'box3-1 ch';
}
box3_1.onmouseout = function() 
{
  this.className = 'box3-1';
}
/*第二个盒子背景颜色的改变*/
var box3_2 = document.querySelector('.box3-2');

box3_2.onmouseover = function() 
{
  this.className = 'box3-2 ch';
}
box3_2.onmouseout = function() 
{
  this.className = 'box3-2';
}
/*第三个盒子背景颜色的改变*/
var box3_3 = document.querySelector('.box3-3');

box3_3.onmouseover = function() 
{
  this.className = 'box3-3 ch';
}
box3_3.onmouseout = function() 
{
  this.className = 'box3-3';
}


                        /*未来规划的效果*/ 
/*未来规划的图片切换*/ 
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var i = 0;
var photo = document.getElementById('photo');
var arr = ["image/努力.jpg", "image/突然.jpg", "image/目标.png"];
var arr_2 = ["努力学习，提升自己", "争取在两年内秃顶", "争取过二轮实操"]

btn2.onclick = function() 
{

  photo.alt = arr_2[i];
  photo.src = arr[i];

  i = (i+1) % 3;

}

btn1.onclick = function() 
{  
  photo.alt = arr_2[i];
  photo.src = arr[i];
  
  i = (i+2) % 3;
}


  