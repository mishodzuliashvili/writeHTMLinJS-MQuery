var arr = []
const addPost = (event) => {
if (event.keyCode == 13) {
    db.collection("messages").add({
        createdAt: firebase.firestore.Timestamp.now(),
        photoURL: "",
        text: $("#myInput").val(),
        uid: 0
    })
    }
}
const Body = () => {
    return <>
        <div class="bodyMain">
            <input id="myInput" onkeypress="addPost(event)" placeholder="Some text.." />
            ${
                arr.map((doc) => Article(doc)).join('')
            }</div>
    </>
}
