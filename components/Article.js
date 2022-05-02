const deletePost = (id,key) => {
    db.collection("messages").doc(id).delete().then(() => {
        $(key).remove();
    })
}
const Article = (article) => {
    return <>
        <div id={! "article_" + article.id} style="border: 2px solid; margin: 20px">
        <div style="color:blue" onclick={! "deletePost('" + article.id+"','#article_" + article.id+"')"}>Delete this ONE</div>

        <div>{! article.text}</div>
        <div>{! article.createdAt.toDate().toDateString()}</div>
        </div>
    </>
}