["scripts/firebase.js","components/Article.js","components/Body.js"]

db.collection("messages").orderBy("createdAt", "desc").limit(7).onSnapshot((querySnapshot) => {
    arr=[]
    querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id })
    })

    MQuery.render(Body(deletePost),$("#root"))
        setTimeout(() => {
            $(".loadingPageBody").addClass("hidden")
        }, 1000);
    
})
