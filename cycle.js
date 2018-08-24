for(var i = 0; i < 10; i++) {
    if(i %3 == 0 && i != 0) continue;
    if(i == 8) break; 
    document.write(i + "<br/>");
}