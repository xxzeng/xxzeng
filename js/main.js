var item1Cnt = document.getElementById("item1Cnt"), count1 = 0;
var item2Cnt = document.getElementById("item2Cnt"), count2 = 0;
var item3Cnt = document.getElementById("item3Cnt"), count3 = 0;
var item4Cnt = document.getElementById("item4Cnt"), count4 = 0;
var item1Rate = document.getElementById("item1Rate"),item2Rate = document.getElementById("item2Rate"),item3Rate = document.getElementById("item3Rate"),item4Rate = document.getElementById("item4Rate");
var btnPrev = document.getElementById("btnPrev"),btnClear = document.getElementById("btnClear"),btnExport = document.getElementById("btnExport");
var historyArr = [];
var lblTotalCnt = document.getElementById("lblTotalCnt"),totalCnt = 0;
var historyList = document.getElementById('historyList');

var item1Text = document.getElementById("item1Text");
var item2Text = document.getElementById("item2Text");
var item3Text = document.getElementById("item3Text");
var item4Text = document.getElementById("item4Text");

var btn1Inc = document.getElementById("btn1Inc");
var btn2Inc = document.getElementById("btn2Inc");
var btn3Inc = document.getElementById("btn3Inc");
var btn4Inc = document.getElementById("btn4Inc");

var btn4Lock = document.getElementById("btnLock");

$(document).ready(function(){
  $(document).disableSelection();
});

btnPrev.onclick = function() {
	if (historyArr.length > 0 ) {
	   historyList.remove(historyArr.length-1);
	   var lastItem = historyArr.pop();	   
	   
	   if( lastItem==="item1" ) {
	      count1-=1;
		  item1Cnt.innerHTML = count1;
	   }
	   if( lastItem==="item2" ) {
	      count2-=1;
		  item2Cnt.innerHTML = count2; 
	   }
	   if( lastItem==="item3" ) {
	      count3-=1;
		  item3Cnt.innerHTML = count3; 
	   }
	   if( lastItem==="item4" ) {
	      count4-=1;
		  item4Cnt.innerHTML = count4; 
	   }  
	    
	    
	   totalCnt -=1;
	   lblTotalCnt.innerHTML = totalCnt; 
	   item1Rate.innerHTML = Math.round(count1/totalCnt * 100) + " %"; 
	   item2Rate.innerHTML = Math.round(count2/totalCnt * 100) + " %";
	   item3Rate.innerHTML = Math.round(count3/totalCnt * 100) + " %";
	   item4Rate.innerHTML = Math.round(count4/totalCnt * 100) + " %"; 
	   historyList.selectedIndex=historyList.options.length-1;
	}
	if (historyArr.length == 0 ) {	
	   totalCnt =0;
	   lblTotalCnt.innerHTML = totalCnt;    
	   item1Rate.innerHTML = "0 %";  
	   item2Rate.innerHTML = "0 %";
	   item3Rate.innerHTML = "0 %";
	   item4Rate.innerHTML = "0 %"; 
	   historyArr = []; 
	   historyList.selectedIndex=0;
	}
};
btnClear.onclick = function() {
	if (historyArr.length > 0 ) {

	   count1 = 0;
	   count2 = 0;
	   count3 = 0;
	   count4 = 0;
	   totalCnt =0;
	   lblTotalCnt.innerHTML = totalCnt;	   
	   item1Cnt.innerHTML = count1;  
	   item2Cnt.innerHTML = count2;  
	   item3Cnt.innerHTML = count3;  
	   item4Cnt.innerHTML = count4;
	   item1Rate.innerHTML = "0 %";  
	   item2Rate.innerHTML = "0 %";
	   item3Rate.innerHTML = "0 %";
	   item4Rate.innerHTML = "0 %"; 
	   historyArr = [];
	   var length = historyList.options.length;
	   for (i = length-1; i >= 0; i--) {
	     historyList.options[i] = null;
	   }
	   historyList.selectedIndex=0;
	}
};
btnExport.onclick = function() {
	if (historyArr.length > 0 ) {
		exportTableToCSV('SMM2ClearRateCounter.txt');
	}
};

function exportTableToCSV(filename) {
    var txt = [];
    for (var i = 0; i < historyList.options.length; i++) {
        var row = [];
		row.push(historyList.options[i].text.replace('"', '\\"'));		
        txt.push(row.join(","));
    }
	
    // Download TXT file
    downloadTXT(txt.join("\n"), filename);
}

function downloadTXT(txt, filename) {

    var txtFile;
    var downloadLink;
    var targetWind = window.open();

    // TXT file
    txtFile = new Blob([txt], { type: "text" });

    // Download link
    downloadLink = targetWind.document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = targetWind.URL.createObjectURL(txtFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    targetWind.document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}
item1Text.onclick = function() {
  count1 += 1;
  totalCnt +=1;
  item1Cnt.innerHTML = count1;
  lblTotalCnt.innerHTML = totalCnt;  
  item1Rate.innerHTML = Math.round(count1/totalCnt * 100) + " %";  
  item2Rate.innerHTML = Math.round(count2/totalCnt * 100) + " %";
  item3Rate.innerHTML = Math.round(count3/totalCnt * 100) + " %";
  item4Rate.innerHTML = Math.round(count4/totalCnt * 100) + " %";
  historyArr.push('item1');
  historyList.add(new Option(totalCnt + " : " + item1Text.value));
  historyList.selectedIndex=historyList.options.length-1;
};

item2Text.onclick = function() {
  count2 += 1;
  totalCnt +=1;
  item2Cnt.innerHTML = count2;
  lblTotalCnt.innerHTML = totalCnt;  
  item1Rate.innerHTML = Math.round(count1/totalCnt * 100) + " %";  
  item2Rate.innerHTML = Math.round(count2/totalCnt * 100) + " %";
  item3Rate.innerHTML = Math.round(count3/totalCnt * 100) + " %";
  item4Rate.innerHTML = Math.round(count4/totalCnt * 100) + " %";  
  historyArr.push('item2');  
  historyList.add(new Option(totalCnt + " : " + item2Text.value));
  historyList.selectedIndex=historyList.options.length-1;
};

item3Text.onclick = function() {
  count3 += 1;
  totalCnt +=1;
  item3Cnt.innerHTML = count3;
  lblTotalCnt.innerHTML = totalCnt;
  item1Rate.innerHTML = Math.round(count1/totalCnt * 100) + " %";  
  item2Rate.innerHTML = Math.round(count2/totalCnt * 100) + " %";
  item3Rate.innerHTML = Math.round(count3/totalCnt * 100) + " %";
  item4Rate.innerHTML = Math.round(count4/totalCnt * 100) + " %";
  historyArr.push('item3');  
  historyList.add(new Option(totalCnt + " : " + item3Text.value));
  historyList.selectedIndex=historyList.options.length-1;
};

item4Text.onclick = function() {
  count4 += 1;
  totalCnt +=1;
  item4Cnt.innerHTML = count4;
  lblTotalCnt.innerHTML = totalCnt;
  item1Rate.innerHTML = Math.round(count1/totalCnt * 100) + " %";  
  item2Rate.innerHTML = Math.round(count2/totalCnt * 100) + " %";
  item3Rate.innerHTML = Math.round(count3/totalCnt * 100) + " %";
  item4Rate.innerHTML = Math.round(count4/totalCnt * 100) + " %";
  historyArr.push('item4');  
  historyList.add(new Option(totalCnt + " : " + item4Text.value));
  historyList.selectedIndex=historyList.options.length-1;
};

btn1Inc.onclick = function() {
  count1 += 1;
  totalCnt +=1;
  item1Cnt.innerHTML = count1;
  lblTotalCnt.innerHTML = totalCnt;  
  item1Rate.innerHTML = Math.round(count1/totalCnt * 100) + " %";  
  item2Rate.innerHTML = Math.round(count2/totalCnt * 100) + " %";
  item3Rate.innerHTML = Math.round(count3/totalCnt * 100) + " %";
  item4Rate.innerHTML = Math.round(count4/totalCnt * 100) + " %";
  historyArr.push('item1');
  historyList.add(new Option(totalCnt + " : " + item1Text.value));
  historyList.selectedIndex=historyList.options.length-1;
};

btn2Inc.onclick = function() {
  count2 += 1;
  totalCnt +=1;
  item2Cnt.innerHTML = count2;
  lblTotalCnt.innerHTML = totalCnt;  
  item1Rate.innerHTML = Math.round(count1/totalCnt * 100) + " %";  
  item2Rate.innerHTML = Math.round(count2/totalCnt * 100) + " %";
  item3Rate.innerHTML = Math.round(count3/totalCnt * 100) + " %";
  item4Rate.innerHTML = Math.round(count4/totalCnt * 100) + " %";  
  historyArr.push('item2');  
  historyList.add(new Option(totalCnt + " : " + item2Text.value));
  historyList.selectedIndex=historyList.options.length-1;
};

btn3Inc.onclick = function() {
  count3 += 1;
  totalCnt +=1;
  item3Cnt.innerHTML = count3;
  lblTotalCnt.innerHTML = totalCnt;
  item1Rate.innerHTML = Math.round(count1/totalCnt * 100) + " %";  
  item2Rate.innerHTML = Math.round(count2/totalCnt * 100) + " %";
  item3Rate.innerHTML = Math.round(count3/totalCnt * 100) + " %";
  item4Rate.innerHTML = Math.round(count4/totalCnt * 100) + " %";
  historyArr.push('item3');  
  historyList.add(new Option(totalCnt + " : " + item3Text.value));
  historyList.selectedIndex=historyList.options.length-1;
};

btn4Inc.onclick = function() {
  count4 += 1;
  totalCnt +=1;
  item4Cnt.innerHTML = count4;
  lblTotalCnt.innerHTML = totalCnt;
  item1Rate.innerHTML = Math.round(count1/totalCnt * 100) + " %";  
  item2Rate.innerHTML = Math.round(count2/totalCnt * 100) + " %";
  item3Rate.innerHTML = Math.round(count3/totalCnt * 100) + " %";
  item4Rate.innerHTML = Math.round(count4/totalCnt * 100) + " %";
  historyArr.push('item4');  
  historyList.add(new Option(totalCnt + " : " + item4Text.value));
  historyList.selectedIndex=historyList.options.length-1;
};
btnLock.onclick = function() {
  var status = btnLock.innerHTML;
  if (status=="鎖定"){
    item1Text.readOnly = true;
    item2Text.readOnly = true;
    item3Text.readOnly = true;
    item4Text.readOnly = true;
    btnLock.innerHTML ="解除";
  }
  else
  {
    item1Text.readOnly = false;
    item2Text.readOnly = false;
    item3Text.readOnly = false;
    item4Text.readOnly = false;
    btnLock.innerHTML ="鎖定";
  }
};
