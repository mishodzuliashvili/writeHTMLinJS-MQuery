function Article(article,deletePost) {
    return <>
        <div id="article_#{article.id}#" style="border: 2px solid; margin: 20px">
        <div onclick="deletePost('#{article.id}#','#article_#{article.id}#')">#{article.title}#</div>
        <div>#{article.articleTxt}#</div>
        <div>#{article.postedAt.toDate().toDateString()}#</div>
        </div>
    </>
}