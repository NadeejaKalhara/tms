function telenot (text){
    var xhr2 = new XMLHttpRequest();
    var url2 ="https://api.telegram.org/bot5403190293:AAEHtiIEaSVESqcIrRmN202eOm5niqZ5_hA/sendMessage";
    xhr2.open("POST", url2, true);
    xhr2.setRequestHeader("Content-Type", "application/json");
    
    xhr2.onreadystatechange = function () {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
    console.log(JSON.parse(xhr2.response))
    
        }}
        var data = JSON.stringify({ chat_id: -1001615440082,parse_mode:"HTML", text });
        xhr2.send(data);
  }