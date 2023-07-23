// navbar
var array1 = [`<img src="./images/ddd.png">`, "Kate B.", `<img src="./images/Shape.png">`]

//  for ციკლის გამოყეებით შევქმნით html ტეგებს და მათში შევიტანთ მასივში მოცემული ობიექტების მნიშვნელობებს
for (var i = 0; i < array1.length; i++) {
    var ul = document.getElementById("ulTag");
    var li = document.createElement("li") // შევქმენით li ტეგი რომელშიც ასევე შევქმენით a ლინკი 
    ul.appendChild(li)
    var a = document.createElement("a")
    li.appendChild(a)
    let img = document.createElement('img');
    a.appendChild(img)
    a.innerHTML = array1[i]
}


// მასივი სადაც მოცემულია ქარდებში მოცემული კონტენტები
var array2 = [
    {
        Title: "Headset",
        subtitle: "Fidelity first. See more than ever before",
        image: `<img src="./images/Image2.png">`,
        description: "We've pushed visual, audio, and ergonomic technologies to create the best-in-class VR experience.",
        image2: `<img src="./images/messIcon.svg">`,
        commentCoun: 349,
        image3: `<img src="./images/wievIcon.svg">`,
        showCount: 49500,
        shareLink: `<a href="https://google.com"> <img src="./images/shareIcon.svg"></a>`
    },
    {
        Title: "Controllers",
        subtitle: "Your hands, in Virtual Reality",
        image: `<img src="./images/Image21.svg">`,
        description: "Designed from the ground up to enable natural interactions, high-fidelity hand presence, and long-term comfort.",
        image2: `<img src="./images/messIcon.svg">`,
        commentCoun: 349,
        image3: `<img src="./images/wievIcon.svg">`,
        showCount: 49500,
        shareLink: `<a href="https://google.com"> <img src="./images/shareIcon.svg"></a>`
    },
    {
        Title: "Base Stations",
        subtitle: "Best-in-industry room-scale tracking",
        image: `<img src="./images/Image3.jpg">`,
        description: "The highest quality tracking has gotten even better with Base Station 2.0, now with improved range, field of view, and scalability.",
        image2: `<img src="./images/messIcon.svg">`,
        commentCoun: 349,
        image3: `<img src="./images/wievIcon.svg">`,
        showCount: 49500,
        shareLink: `<a href="https://google.com"> <img src="./images/shareIcon.svg"></a>`
    },

]

 
for (var b = 0; b < array2.length; b++) {
    var box = document.getElementById("box")
    //შევქმანთ კარდები რომელშიც მოთავსებული იქნება ქარდების კონტენტი
    var cards = document.createElement("div");
    box.appendChild(cards);
    cards.classList.add("col-12");
    cards.classList.add("col-lg-4");
    //შიდა კონტეინერი
    let innerBox = document.createElement("div")
    cards.appendChild(innerBox)
    innerBox.classList.add("box")
    //images in box
    let img3 = document.createElement("img");
    innerBox.appendChild(img3)
    innerBox.innerHTML = array2[b].image;
    //create box below of images
    let boxContent = document.createElement("div");
    innerBox.appendChild(boxContent)
    boxContent.classList.add("box-content")
    // create Tittle
    let tittle = document.createElement("h5");
    boxContent.appendChild(tittle)
    tittle.innerText = array2[b].Title;
    // create subtitle
    let subTitle = document.createElement("h3");
    boxContent.appendChild(subTitle)
    subTitle.innerText = array2[b].subtitle;
    //create description

    let Description = document.createElement("p");
    boxContent.appendChild(Description)
    Description.innerText = array2[b].description;
    //create hr
    let hr = document.createElement("hr");
    innerBox.appendChild(hr)
    // create box footer div
    let footdiv = document.createElement("div");
    innerBox.appendChild(footdiv)
    footdiv.classList.add("footdiv")
    let footdiv1 = document.createElement("div");
    footdiv.appendChild(footdiv1)


    let mesagicon = document.createElement("img");
    footdiv1.appendChild(mesagicon)
    footdiv1.innerHTML = array2[b].image2;

    let mesagcount = document.createElement("span");
    footdiv1.appendChild(mesagcount)
    mesagcount.innerText = array2[b].commentCoun;

    let footdiv2 = document.createElement("div");
    footdiv.appendChild(footdiv2)

    let wievicon = document.createElement("img");
    footdiv2.appendChild(wievicon)
    footdiv2.innerHTML = array2[b].image3;
    let wievcount = document.createElement("span");
    footdiv2.appendChild(wievcount)
    wievcount.innerText = array2[b].showCount;

    let footdiv3 = document.createElement("div");
    footdiv.appendChild(footdiv3)
    let share = document.createElement("img");
    footdiv3.appendChild(share)
    footdiv3.innerHTML = array2[b].shareLink;
}


const footerLinks = ["CONTACT", "HELP", "TERMS OF USE", "PRIVACY POLICY",
    `<img src="./images/Twitter.png">`, `<img src="./images/Facebook.png">`,
    `<img src="./images/YouTube.png">`];


for (var c = 0; c < footerLinks.length; c++){
    var footContent = document.getElementById("fotcotent");
    
    if(c<4){
        var infoDiv = document.createElement("div")
        footContent.appendChild(infoDiv);
        var footLink = document.createElement("a");
        infoDiv.appendChild(footLink);
        footLink.href = "#"
        footLink.innerHTML = footerLinks[c] 
    }else{
        var foticonDiv = document.querySelector(".icon-div")
        var icondiv = document.createElement("div")
        foticonDiv.appendChild(icondiv);
        var fotIconA = document.createElement("a");
        icondiv.appendChild(fotIconA)
        fotIconA.href = "#"
        let img4 = document.createElement("img");
        fotIconA.appendChild(img4)
        fotIconA.innerHTML = footerLinks[c];
    }
}