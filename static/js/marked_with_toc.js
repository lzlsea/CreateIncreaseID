

function markedWithToc(content) {    
    var catalogOl = document.getElementById("left");
    $("#left").empty();
    catalogOl.style.left = "0px";
    catalogOl.style.top = "0px";
    catalogOl.style.lineHeight = "30px";
    catalogOl.style.fontSize = "24px"; 
    catalogOl.style.padding = "30px";    
    catalogOl.style.overflowY = "auto";    
    var contentDiv = document.getElementById("right");   
    marked.setOptions({
        renderer: new marked.Renderer(),      
        highlight: function(code) {      
          return hljs.highlightAuto(code).value;      
        },      
        pedantic: false,      
        gfm: true,      
        tables: true,      
        breaks: false,
        sanitize: false,      
        smartLists: true,      
        smartypants: false,      
        xhtml: false      
        });
    contentDiv.innerHTML = marked(content).replace(/<pre>/g, "<pre class='hljs'>");
    var codeArr =($(".hljs code")); 
    for(let i=0;i<codeArr.length;i++){
        $(codeArr[i]).context.style.background="none";
    }
    contentDiv.style.cssFloat = "right";
    contentDiv.style.marginLeft = "30px";
    contentDiv.style.overflowY = "auto";
    contentDiv.style.overflowX = "auto";
    var item = contentDiv.firstElementChild;

    var h1Count = 0;
    var h2Count = 0;
    var h3Count = 0;
    var secondCatalogOl;
    var threeCatalogOl;
    var num,i=0;
    num= contentDiv.children.length
    while(i<num) {
        if (!contentDiv.children[i]) break;        
        if (contentDiv.children[i].tagName == 'H1') {
            h1Count++;
            h2Count = 0;
            var id = h1Count;            
            var catalogA = document.createElement("a");
            catalogA.className="firstTitle"
            catalogA.textContent =id + '. ' + contentDiv.children[i].textContent;
            catalogA.href = '#' + id;
            secondCatalogOl = document.createElement("ol");           
            secondCatalogOl.style.paddingLeft="10px";
            secondCatalogOl.className="first";
            var catalogLi = document.createElement("li");
            catalogLi.style.marginBottom = "16px"; 
            catalogLi.style.fontSize = "16px";  
            catalogLi.style.fontWeight = "700";        
            catalogLi.style.listStyle = "none";           
            catalogLi.appendChild(catalogA);
            catalogLi.appendChild(secondCatalogOl);
            catalogOl.appendChild(catalogLi);            
            contentDiv.children[i].innerHTML = '<a  name = "' + id + '"></a>' + id + '. ' + contentDiv.children[i].textContent;
        }
        else if (contentDiv.children[i].tagName == 'H2') {
            if (!secondCatalogOl) continue;            
            h2Count++;
            h3Count=0;
            var id = h1Count + '.' + h2Count;            
            var catalogA = document.createElement("a");
            catalogA.className="secondTitle"
            catalogA.textContent = id + '. ' + contentDiv.children[i].textContent;
            catalogA.href = '#' + id;
            threeCatalogOl = document.createElement("ol");           
            threeCatalogOl.style.paddingLeft="10px";
            threeCatalogOl.className="first";
            var catalogLi = document.createElement("li");
            catalogLi.className="second"
            catalogLi.style.color = "#444";
            catalogLi.style.fontSize = "14px";
            catalogLi.style.listStyle = "none";
            catalogLi.style.fontWeight = "700";   
            catalogLi.appendChild(catalogA);
            catalogLi.appendChild(threeCatalogOl);
            secondCatalogOl.appendChild(catalogLi);            
            contentDiv.children[i].innerHTML = '<a  name = "' + id + '"></a>' + id + ' ' + contentDiv.children[i].textContent;
        }else if(contentDiv.children[i].tagName == 'H3'){
            if (!threeCatalogOl) continue;            
            h3Count++;
            var id = h1Count + '.' + h2Count+ '.' + h3Count;            
            var catalogA = document.createElement("a");
            catalogA.className="threeTitle"
            catalogA.textContent = id + '. ' + contentDiv.children[i].textContent;
            catalogA.href = '#' + id;
            var catalogLi = document.createElement("li");
            catalogLi.className="three"
            catalogLi.style.color = "#444";
            catalogLi.style.fontSize = "12px";
            catalogLi.style.listStyle = "none";
            catalogLi.style.fontWeight = "400";   
            catalogLi.appendChild(catalogA);
            threeCatalogOl.appendChild(catalogLi);            
            contentDiv.children[i].innerHTML = '<a  name = "' + id + '"></a>' + id + ' ' + contentDiv.children[i].textContent;
        }
        i++;
    };     
};
