
function mytest()
{
var q1=document.forms["myform"]["succes"].value;
var q2=document.forms["myform"]["agnes"].value;
var q3=document.forms["myform"]["flavor3"].value;
var q4=document.forms["myform"]["flavor4"].value;
var q5=document.forms["myform"]["flavor5"].value;
var q5=document.forms["myform"]["flavor5"].value;

var marks=0;
if(q1=="All of the above.")
{
 marks=marks+2;
 }
if(q2=="JavaScript is designed for creating network-centric applications")
{
 marks=marks+2;
 }
if(q3==" Less server interaction")
{
 marks=marks+2;
}
if(q4==" false")
{
 marks=marks+2;
}
if(q5==" true")
{
 marks=marks+2;
}
if(q6=="characterAt()")
{
 marks=marks+2;
 }
if(q7=="append()")
{
 marks=marks+2;
 }
if(q8==" global variable")
{
 marks=marks+2;
}
if(q9==" None of the above.")
{
 marks=marks+2;
}
   alert("your score is:"+marks);

}