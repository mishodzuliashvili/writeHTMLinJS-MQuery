var arr = []
const Body = (deletePost) => {
    return <>
        #{
            Spinner()
        }#
        <div class="bodyMain">
            #{
                arr.map((doc) => Article(doc,deletePost)).join('')
        }#</div>
    </>
}