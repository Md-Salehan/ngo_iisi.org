let posts_div = document.querySelector(".posts")
let posts = document.querySelectorAll(".post")
let cancel = document.querySelector(".cancel")
let profileImg = document.querySelectorAll(".profileImg")
let popup_tittle = document.querySelector(".popUp .title")
let popup_content = document.querySelector(".popUp .content")
let popup_name = document.querySelector(".popUp .name")

//post form
let send = document.querySelector(".send")
let userName = document.getElementById("name")
let email = document.getElementById("email")
let subject = document.getElementById("subject")
let contactNum = document.getElementById("contactNum")
let gender = document.getElementById("gender")
let content = document.getElementById("contentp")

var postData = [{
    title: "Interfaith Dialogue",
    content: "#Hindus 🕉 #Muslims ☪️ arguing, vituperating & insulting each other on print & social media kindly read following eye opening venerated verses present in your respective Holy Books- 📖 📕📗 Bhagavad Gita: Chapter 2 Verse 27 🕉 🛕 जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च | तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि || 27||' Death is certain for one who has been born.......' Holy Quran: Chapter 3 Verse 185 : ☪️ 🕌 Surah Imran 3:185- كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ الْقِيَامَةِ فَمَن زُحْزِحَ عَنِ النَّارِ وَأُدْخِلَ الْجَنَّةَ فَقَدْ فَازَ وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ ' Every soul will be tasting death......' Both these holy books are addressing  'Humanity' and not individual communities as Hindus or Muslims........ There are several similarities between our religious scriptures we just need to open our eyes towards the truth, appreciate the commonalities & respectfully accept the differences. #Shanti #Salaam ",
    uname: "Owaiz Aslam",
    gender: "male"
}, {
    title: "Advise for Hindu Muslim youth of India",
    content: "If Hindus 🕉 Find Their Religious Leaders Dressed In #Saffron Robes, Rabble Rousing Politically Charged Vituperative Vilifying Speeches Kindly Reprimand & Reject Them On The Spot. If Muslims ☪️ Find Their Religious Leaders Dressed In #Green Robes, Rabble Rousing Politically Charged Vituperative Vilifying Speeches Kindly Reprimand & Reject Them On The Spot. Both These Religious Leaders Are On The Payroll Of Political Parties, The Occupation Of This Species Of Religious Leaders Is To Cause Division & Discord In The Society. These Religious Leaders & Their Families Immensely Financially Profit From This Religio Politico Transaction, You On The Other Hand My Dear #Hindu & #Muslim Brothers & Sisters Stand To Be At An Economic, Social, Cultural & Relgious Identity Loss. Be Wise Reject Politically Motivated Religious Hatemongering Leaders.",
    uname: "Owaiz Aslam",
    gender: "male"
}
]

function createPostDiv({ title, content, uname, gender, contactNum = "" }) {
    let post = document.createElement("div")
    post.classList.add("post");

    let profileImag_div = document.createElement("div");
    profileImag_div.classList.add("profileImg-div");

    let img = document.createElement("img");
    img.classList.add("profileImg");
    num = Math.floor(Math.random() * 5) + 1;
    if (gender == "male") img.setAttribute("src", "./assets/img/maleProfile/malep" + num + ".png")
    else img.setAttribute("src", "./assets/img/femaleProfile/fmale" + num + ".png")
    profileImag_div.appendChild(img);

    let data_div = document.createElement("div");
    data_div.classList.add("data");

    let title_ele = document.createElement("h1");
    title_ele.classList.add("title");
    title_ele.innerHTML = title

    let content_div = document.createElement("div");
    content_div.classList.add("content");

    let contentPara = document.createElement("p");
    contentPara.classList.add("contentPara");
    contentPara.innerHTML = content;


    content_div.append(contentPara);

    let publisher = document.createElement("div");
    publisher.classList.add("publisher");

    let uname_ele = document.createElement("h2");
    uname_ele.classList.add("name");
    uname_ele.innerHTML = uname;

    let date = document.createElement("p");
    date.classList.add("date");
    date.innerHTML = contactNum;

    publisher.appendChild(uname_ele);
    publisher.appendChild(date)

    data_div.append(title_ele);
    data_div.append(content_div);
    data_div.append(publisher);

    post.appendChild(profileImag_div)
    post.appendChild(data_div)
    return post;
}

let num;//used for random no.

let popUp = document.querySelector(".popUp")
let popUP_wrapper = document.querySelector(".popUP-wrapper")
let popUp_bg = document.querySelector(".popUp-bg")

//seting random profile pic .....................
for (let i = 0; i < profileImg.length; i++) {
    num = Math.floor(Math.random() * 5) + 1;
    profileImg[i].setAttribute("src", "./assets/img/femaleProfile/fmale" + num + ".png")
}



//seting eventListener post div
function addEventListenerTodiv() {
    posts = document.querySelectorAll(".post")
    console.log(posts.length);
    for (let i = 0; i < posts.length; i++) {
        posts[i].addEventListener("click", () => {
            openPopUp(i - 1);
        })
    }
}


send.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("okk");
    postData.push({
        title: subject.value,
        content: content.value,
        uname: userName.value,
        gender: gender.value,
        contactNum: contactNum.value
    });
    console.log(postData);
    showAllPost();
    addEventListenerTodiv();
})

cancel.addEventListener("click", closePopUp);
function closePopUp() {
    popUp_bg.style.display = "none"
    popUP_wrapper.style.display = "none"
    popUp.style.display = "none"

    popUp_bg.style.width = "0"
    popUP_wrapper.style.width = "0"
    popUp.style.width = "0"

    popUp_bg.style.height = "0"
    popUP_wrapper.style.height = "0"
    popUp.style.height = "0"
}
function openPopUp(i) {
    popUp_bg.style.display = "inline-block"
    popUP_wrapper.style.display = "flex"
    popUp.style.display = "grid"

    popUp_bg.style.width = "100vw"
    popUP_wrapper.style.width = "100vw"
    popUp.style.width = "80vw"

    popUp_bg.style.height = "100vh"
    popUP_wrapper.style.height = "100vh"
    popUp.style.height = "80vh"

    console.log(postData[i], i);
    console.log(postData[i].uname, i);
    profileImg = document.querySelectorAll(".profileImg")
    popup_tittle.innerHTML = postData[i].title
    popup_content.innerHTML = postData[i].content
    popup_name.innerHTML = postData[i].uname
    console.log(postData[i].uname, i);

}
var z = 0
function showAllPost() {
    for (; z < postData.length; z++) {
        let div = createPostDiv(postData[z])
        console.log(div)
        posts_div.appendChild(div);
    }
}
showAllPost()
addEventListenerTodiv()
