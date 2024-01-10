const container1 = document.getElementById("btn1");
const container2 = document.getElementById("btn2");
const container3 = document.getElementById("btn3");
const container4 = document.getElementById("btn4")
const container5 = document.getElementById("btn5");
const container6 = document.getElementById("btn6");

const original1 = container1.innerHTML;
const original2 = container2.innerHTML;
const original3 = container3.innerHTML;
const original4 = container4.innerHTML;
const original5 = container5.innerHTML;
const original6 = container6.innerHTML;


const showInformation = () => {
 
    container1.innerHTML = `<div class = "para1">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</div> `
    setTimeout(() => {
        container1.innerHTML = original1;
    }, 3000);
};
container1.addEventListener("click", showInformation);

const showInformation1 = () => {
    container2.innerHTML = `<div class = "para1">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.</div> `
    setTimeout(() => {
        container2.innerHTML = original2;
    }, 2000);
};
container2.addEventListener("click", showInformation1);


const showInformation2 = () => {
    container3.innerHTML = `<div class = "para1">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere..</div> `
    setTimeout(() => {
        container3.innerHTML = original3;
    }, 2000);
};
container3.addEventListener("click", showInformation2);


const showInformation3 = () => {
    container4.innerHTML = `<div class = "para1">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div> `
    setTimeout(() => {
        container4.innerHTML = original4;
    }, 2000);
};
container4.addEventListener("click", showInformation3);


const showInformation4 = () => {
    container5.innerHTML = `<div class = "para1">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want..</div> `
    setTimeout(() => {
        container5.innerHTML = original5;
    }, 2000);
};
container5.addEventListener("click", showInformation4);


const showInformation6 = () => {
    container6.innerHTML = `<div class = "para1">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see..</div> `
    setTimeout(() => {
        container6.innerHTML = original6;
    }, 2000);
};

container6.addEventListener("click", showInformation6);
