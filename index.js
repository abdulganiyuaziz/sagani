//Variables
const generalBtn = document.getElementById("Genral");
const businessBtn = document.getElementById("business");
const SportsBtn = document.getElementById("Sports");
const TechnologyBtnn = document.getElementById("technology");
const EntertainmentBtn = document.getElementById("Entertainment");
const SearchBtn = document.getElementById("search "); 
const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");




// apis
const API_KEY = "9e9b7d1c2042476586e5d3584b6e7cab";
const HEDLINES_NEWS = "https://newssapi.org/v2/top-hedlines?country=in&apiKey=";
const General_News ="https://newssapi.org/v2/top-hedlines?country=genral&apiKey=";
const business_News = "https://newssapi.org/v2/top-hedlines?country=in&category=business&apiKey=";
const Sports_News = "https://newssapi.org/v2/top-hedlines?country=in&category=sports&apiKey=";
const Technology_News = "https://newssapi.org/v2/top-hedlines?country=in&category=technology&apiKey=";
const Entertainment_News = "https://newssapi.org/v2/top-hedlines?countryin&category=entertainment&apiKey="
const Search_News = "https://newssapi.org/v2/everything?q="



generalBtn.addEventListener("click",function(){
    fetchGeneralNews();

});


businessBtn.addEventListener("click",function(){
    fetchbusinessNews();


});


SportsBtn.addEventListener("click",function(){
    fetchSportsNews();


});

TechnologysBtnn.addEventListener("click",function(){
    fetchTechnologyNews();


});

EntertainmentBtn.addEventListener("click",function(){
    fetchEntertainmentNews();


});



SearchBtn.addEventListener("click",function(){
    fetchQueryNews();

          
});

const  fetchGeneralNews = async () => {
    const response = await fetch(General_News+API_KEY);
      newsDataArr = [];
    if(response.status >=200 && response.status <300) {
        const myJson = await response.json();
        newsDataArr = myJson;
    } else{
        // handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const  fetchbusinessNews = async () => {
    const response = await fetch(business_News+API_KEY);
      newsDataArr = [];
    if(response.status >=200 && response.status <300) {
        const myJson = await response.json();
        newsDataArr = myJson;
    } else{
        // handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const  fetchSportsNews = async () => {
    const response = await fetch(Search_News+API_KEY);
      newsDataArr = [];
    if(response.status >=200 && response.status <300) {
        const myJson = await response.json();
        newsDataArr = myJson;
    } else{
        // handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const  fetchTechnologysNews = async () => {
    const response = await fetch(Technology_News+API_KEY);
      newsDataArr = [];
    if(response.status >=200 && response.status <300) {
        const myJson = await response.json();
        newsDataArr = myJson;
    } else{
        // handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const  fetchEntertainment_News = async () => {
    const response = await fetch(Entertainment_News+API_KEY);
      newsDataArr = [];
    if(response.status >=200 && response.status <300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson;
    } else{
        // handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}




const  fetchSearchNews = async () => {
    const response = await fetch(Search_News+API_KEY);
      newsDataArr = [];
    if(response.status >=200 && response.status <300) {
        const myJson = await response.json();
        newsDataArr = myJson;
    } else{
        // handle errors
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchQueryNews = async () => {
    const response = await fetch(Search_News+newsQuery.value+"&apikey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson
   

    }else{
        //error handle
        console.log(response.status, response.statusText);
    }

    displayNews();
}