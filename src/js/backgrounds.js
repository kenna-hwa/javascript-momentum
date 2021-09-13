const images = [{
        src: "https://images.unsplash.com/photo-1631472011823-59d5a2400fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80"
    },
    {
        src: "https://images.unsplash.com/photo-1631390818669-aab06df2fd33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
    },
    {
        src: "https://images.unsplash.com/photo-1572065716657-c1f964c418cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
    },
    {
        src: "https://images.unsplash.com/photo-1458869612855-bb6009d50368?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }]

    const chosenImage = () => {
        const num = Math.floor(Math.random()*images.length);
        console.log(images[num].src)
        const bgImages = document.createElement("img");
        bgImages.src=`${images[num].src}`
        document.body.appendChild(bgImages);
    };
    
    chosenImage();