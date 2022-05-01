async function renderIndex() {
    var txt = await getTextOfFileAndDo("index.js")
    var parts = txt.split("$endimports");
        var yourString = parts[0];
        var imports = yourString.substring(1, yourString.length - 1).split("%");
        txt = parts[1];
        for (var i = imports.length - 2; i >= 0; i--) {
           var k = await getTextOfFileAndDo(imports[i].trim());
           txt = k + txt
        }
        txt = txt.replace(/<>|<\/>|#{|}#/g, (match) => {
            if (match == "<>" || match == "</>") return '`'
            else if (match == "#{") return '`+'
            else if (match == "}#") return '+`'
        })
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.text = txt;
        $("head").append(s);
}

async function getTextOfFileAndDo(url) {
    const response = await fetch(url)
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.text()
}



$(function () {
    renderIndex()
});

