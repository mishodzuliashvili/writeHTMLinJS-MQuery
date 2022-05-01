`
scripts/firebase.js%
components/Spinner.js%
components/Article.js%
components/Body.js%
`
$endimports

function renderIn(obj, root) {
    $(root).html(obj);
}
const deletePost = (id,key) => {
    db.collection("articles").doc(id).delete().then(() => {
        $(key).remove();
    })
}
db.collection("articles").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id })
    });
}).then(() => {
    renderIn(Body(deletePost), "#root")
    setTimeout(() => {
        $(".loadingPageBody").hide()
    }, 2000);
})
