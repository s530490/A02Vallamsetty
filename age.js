var app={

populatedropdown : function(dayfield, monthfield, yearfield)
{
    var monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    var today=new Date()
    var dayfield=document.getElementById(dayfield)
    var monthfield=document.getElementById(monthfield)
    var yearfield=document.getElementById(yearfield)
    
    for (var i=0; i<31; i++)
   {
    dayfield.options[i]=new Option(i+1, i+1);
    }
    
    for (var m=0; m<12; m++)
    monthfield.options[m]=new Option(monthtext[m], monthtext[m])
    monthfield.options[today.getMonth()]=new Option(monthtext[today.getMonth()], monthtext[today.getMonth()], true, true) //select today's month
    var thisyear=today.getFullYear()-30;
    for (var y=0; y<31; y++){
    yearfield.options[y]=new Option(thisyear, thisyear)
    thisyear+=1
    }
    yearfield.options[0]=new Option(today.getFullYear(), today.getFullYear(), true, true) //select today's year
    
},
getDay: function()
{
    
    var birthdate=parseInt($("#daydropdown").val(),10);
    return birthdate;
},
getBirthmonth : function()
{
 var birthmonth;
 switch($("#monthdropdown").val())
 {
      case 'Jan':
      birthmonth=1;
      break;
      case 'Feb':
      birthmonth=2;
      break;
      case 'Mar':
      birthmonth=3;
      break;
      case 'Apr':
      birthmonth=4;
      break;
      case 'May':
      birthmonth=5;
      break;
      case 'Jun':
      birthmonth=6;
      break;
      case 'Jul':
      birthmonth=7;
      break;
      case 'Aug':      
      birthmonth=8;
      break;
      case 'Sept':      
      birthmonth=9;
      break;
      case 'Oct':      
      birthmonth=10;
      break;
      case 'Nov':      
      birthmonth=11;
      break;
      case 'Dec':      
      birthmonth=12;
      break;
 }
 return birthmonth;
},

agecalc : function()
{
    var name=$("#name").val();
    var age;
    var birthdate=app.getDay();
    var birthmonth=app.getBirthmonth();
    var birthyear=parseInt($("#yeardropdown").val(),10);
   thisday = new Date();
   if(name!=="")
    {
   if((birthyear==thisday.getFullYear())&&(birthmonth==thisday.getMonth())&&(birthdate>thisday.getDate())||(birthyear==thisday.getFullYear())&&(birthmonth>thisday.getMonth()))
    {
        alert("you are still not born");
    }
    else 
   {
   age=parseInt(thisday.getFullYear())-birthyear;
   
   if ( thisday.getMonth() < (birthmonth - 1))
    {
        age--;
    }
    if (((birthmonth - 1) == thisday.getMonth() ) && (thisday.getDate() < birthdate))
    {
        age--;
    }
    if (((birthmonth - 1) == thisday.getMonth() ) && (thisday.getDate() == birthdate))
        {
            window.alert("happy birthday");
        }
     document.getElementById("textarea1").value="Hi !!!"+$("input[name=gender]:checked").val()+"."+name+" your age is "+age;
    $("#hideit").css('display','block');
    }
}
  else{
      alert("enter your name");
  }
}
}
