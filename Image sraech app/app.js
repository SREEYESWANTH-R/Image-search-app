const accessKey = "Your Access Key";

const searchForm = document.getElementById("search");
const searchInput = document.getElementById("searchInt");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("gallary");
const showMoreBtn = document.getElementById("showBtn");
let keyword = "";
let page = 1;


async function searchImages(){
    const keyword = searchInput.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    
    const response = await fetch(url);
    const data = await response.json(); 
    
    const results = data.results;
    results.map((result)=>{
        const imageContainer = document.createElement("div");
        const imageAttributes = document.createElement("div");
        imageAttributes.className = "imageAttributes";
        
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        
        
        const paraGraph = document.createElement('p');
        paraGraph.innerHTML = `<ion-icon name="heart-outline"></ion-icon>` + result.likes;
       
        const imageDownload = document.createElement('a');
        imageDownload.href = result.links.download;
        imageDownload.target = '_blank';
        imageDownload.innerHTML = `<ion-icon name="arrow-down-sharp"></ion-icon>`;

        const imageUser = document.createElement('p');
        imageUser.innerHTML = result.user.username;
        
        imageLink.appendChild(image);
        imageContainer.appendChild(imageLink);
        imageAttributes.appendChild(paraGraph);
        imageAttributes.appendChild(imageUser);
        imageAttributes.appendChild(imageDownload);
        imageContainer.appendChild(imageAttributes);
        searchResults.appendChild(imageContainer);  
          
 })
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener('click',()=>{
    page++;
    searchImages();
})













// btnEl.addEventListener('click', async function(){
//     inputData = inputEl.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    
//     const response = await fetch(url);
//     const data =  await response.json();
//     console.log(inputData)
    
//     const results = data.results;
//     // if(page === 1){
//     //     searchResults.innerHTML = "";
//     // }

//     results.map((result)=>{
//         const imageWrapper = document.createElement('div')
//         imageWrapper.classList.add("gal-img");
//         const image = document.createElement('img')
//         image.src = result.urls.small
//         const paraGraph = document.createElement('p');
//         paraGraph.innerHTML = "Image1"
        
//         imageWrapper.appendChild(image)
//         imageWrapper.appendChild(paraGraph)
        
//     });
//     page++
//     if(page > 1){
//         showBtn.style.display = "block";
//     }
// })