const alphabet={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25};

const rotor1={0:17,1:16,2:8,3:13,4:1,5:20,6:21,7:3,8:12,9:25,10:19,11:10,12:14,13:4,14:7,15:23,16:15,17:9,18:2,19:24,20:5,21:0,22:6,23:18,24:22,25:11};

const rotor2={0:22,1:18,2:7,3:23,4:9,5:12,6:20,7:4,8:15,9:3,10:14,11:2,12:5,13:10,14:17,15:16,16:19,17:1,18:21,19:25,20:8,21:24,22:0,23:6,24:11,25:13};

const rotor3={0:2,1:3,2:7,3:5,4:16,5:17,6:12,7:24,8:4,9:18,10:1,11:10,12:13,13:19,14:11,15:20,16:0,17:15,18:8,19:25,20:23,21:22,22:21,23:9,24:6,25:14};

const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lastChar='';

/*function EnigmaTest(message){
  let rotor1Counter=0,rotor2Counter=0,rotor3Counter=0,rotatePoint1=25,rotatePoint2=25;
  let messageArr=message.toUpperCase().split('').filter(el=>el!==' ').map(el=>alphabet[el]);
  let codeMessage=messageArr.map(el=>{
    let temp=rotor3[(rotor2[(rotor1[(el+rotor1Counter)%26]+rotor2Counter)%26]+rotor3Counter)%26];
    if(rotor2Counter===24){
      rotor1Counter=(rotor1Counter+1)%26
      if(rotor1Counter===rotatePoint1)
        rotor2Counter=(rotor2Counter+1)%26;
      if(rotor2Counter===rotatePoint2)
        rotor3Counter=(rotor3Counter+1)%26;
    }
    else{
      rotor1Counter=(rotor1Counter+1)%26
      if(rotor1Counter===rotatePoint1)
        rotor2Counter=(rotor2Counter+1)%26;
    }
    return temp;
  });
  return codeMessage.map(el=>letters[el]).join('');
}*/

function EnigmaRun(char){
  if(lastChar!='')
    document.getElementById(lastChar).style.background="black";
  document.getElementById("message").value=document.getElementById("message").value+char;
  let r1off=parseInt(document.getElementById("rotor1").value);
  let r2off=parseInt(document.getElementById("rotor2").value);
  let r3off=parseInt(document.getElementById("rotor3").value);
  document.getElementById("code").value=document.getElementById("code").value+Enigma(char,r1off,r2off,r3off);
  if(parseInt(document.getElementById("rotor1").value)===26)
    document.getElementById("rotor1").value=0;
  if(parseInt(document.getElementById("rotor2").value)===26)
    document.getElementById("rotor2").value=0;
  if(parseInt(document.getElementById("rotor3").value)===26)
    document.getElementById("rotor3").value=0;
}

function Enigma(message,rotor1Offset,rotor2Offset,rotor3Offset){
  let rotor1Counter=rotor1Offset,rotor2Counter=rotor2Offset,rotor3Counter=rotor3Offset,rotatePoint1=25,rotatePoint2=25;
  let messageArr=message.toUpperCase().split('').filter(el=>el!==' ').map(el=>alphabet[el]);
  let codeMessage=messageArr.map(el=>{
    let temp=rotor3[(rotor2[(rotor1[(el+rotor1Counter)%26]+rotor2Counter)%26]+rotor3Counter)%26];
    if(rotor2Counter===24){
      rotor1Counter=(rotor1Counter+1)%26;
      document.getElementById("rotor1").value=parseInt(document.getElementById("rotor1").value)+1;
      if(rotor1Counter===rotatePoint1)
      {
        rotor2Counter=(rotor2Counter+1)%26;
        document.getElementById("rotor2").value=parseInt(document.getElementById("rotor2").value)+1;
      }
      if(rotor2Counter===rotatePoint2)
      {
        rotor3Counter=(rotor3Counter+1)%26;
        document.getElementById("rotor3").value=parseInt(document.getElementById("rotor3").value)+1;
      }
    }
    else{
      rotor1Counter=(rotor1Counter+1)%26
      document.getElementById("rotor1").value=parseInt(document.getElementById("rotor1").value)+1;
      if(rotor1Counter===rotatePoint1)
      {
        rotor2Counter=(rotor2Counter+1)%26;
        document.getElementById("rotor2").value=parseInt(document.getElementById("rotor2").value)+1;
      }
    }
    return temp;
  });
  lastChar=letters[codeMessage];
  document.getElementById(letters[codeMessage]).style.background="yellow";
  return codeMessage.map(el=>letters[el]).join('');
}