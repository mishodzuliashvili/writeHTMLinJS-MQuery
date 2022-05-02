class MQuery {
    static render(obj,root){
        root.html(obj)
    }

    static renderIndex = async () => {
        let txt = await getTextOfFileAndDo("index.js")
        let parts = txt.split(/](.*)/s);
        txt = parts[1];
    
        const imports = JSON.parse(parts[0] +"]")
    
        for (let index = (imports.length - 1); index >= 0; index--) {
            txt = await getTextOfFileAndDo(imports[index]) +"\n"+ txt;
        }
        txt = txt.replace(/<>([\s\S]*?)<\/>/g, (match, label) => {
            return "`" + label + "`"
        }).replace(/{!/g,"${");
        
        appendScriptToHead(txt);
    }


}
const appendScriptToHead = (txt) => {
    let s = document.createElement("script");
    s.type = "text/javascript";
    s.text = txt;
    $("head").append(s);
}
const getTextOfFileAndDo = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response.text()
}
MQuery.renderIndex()