console.log("video.js")
const showLoader = () => {
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("videos").classList.add("hidden");
};
const hideLoader = () => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("videos").classList.remove("hidden");
};
function convertMilliseconds(ms) {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30);  // Approximate (30 days per month)
    let years = Math.floor(days / 365);  // Approximate (365 days per year)

    days = days % 30;
    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    // Create an array with only non-zero values
    let result = [];
    if (years) result.push(`${years}y`);
    if (months) result.push(`${months}m`);
    if (days) result.push(`${days}d`);
    if (hours) result.push(`${hours}h`);
    if (minutes) result.push(`${minutes}m`);
    if (seconds || result.length === 0) result.push(`${seconds}s`); // Always show at least seconds

    return result.join(" ");
}

// Example usage:
console.log(convertMilliseconds(10000000000));  // "3m 25d 17h 46m 40s"
console.log(convertMilliseconds(31556952000)); // "1y"
console.log(convertMilliseconds(60000));       // "1m"
console.log(convertMilliseconds(5000));        // "5s"
console.log(convertMilliseconds(0));           // "0s"


// Example usage:
console.log(convertMilliseconds(10000000000));  // Output: "0y 3m 25d 17h 46m 40s"
console.log(convertMilliseconds(31556952000)); // Output: "1y 0m 0d 0h 0m 0s"
console.log(convertMilliseconds(60000));       // Output: "0y 0m 0d 0h 1m 0s"



// fetch
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            // console.log(data.categories)

            displayCategories(data.categories)
        })
        .catch((err) => {
            console.log("Catch: ", err)
        })
}
const displayCategories = (categories) => {
    categories.forEach((category) => {
        console.log(category)
        const categoryBtn = document.createElement("button")
        categoryBtn.classList = "btn btn-sm btn-category"
        categoryBtn.id = `btn-${category.category_id}`
        categoryBtn.onclick = () => displayCategoryVideos(category.category_id)
        categoryBtn.innerText = category.category
        const categoriesSection = document.getElementById("categories")
        categoriesSection.append(categoryBtn)

    })

}
const loadVideos = (searchText = "") => {
    showLoader()
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then(res => {
            // console.log(res.json())
            return res.json()
        })
        .then(data => {
            // console.log(videos.videos)
            displayVideos(data.videos)
        })
        .catch(err => {
            console.log(err)
        })

}
const displayCategoryVideos = (categoryId) => {
    const activeButton = document.getElementById(`btn-${categoryId}`)
    const categoryButtons = document.getElementsByClassName("btn-category")
    for (let categoryButton of categoryButtons) {
        categoryButton.classList.remove("btn-primary")
        console.log(categoryButton)
    }
    activeButton.classList.add("btn-primary")
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            displayVideos(data.category)
        })
        .catch(err => {
            console.log(err)
        })

}
const loadDetails = async (videoId) => {
    const detailsVideoUri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
    const res = await fetch(detailsVideoUri)
    const data = await res.json()
    displayDetails(data)

    // console.log(videoId)
}
const displayDetails = (detailVideos) => {
    console.log(detailVideos)
    const dtlContainer = document.getElementById("detailsContainer")
    dtlContainer.innerHTML = `
    <img class="w-full rounded-md" src=${detailVideos.video.thumbnail} alt="">
    <p class="py-4">${detailVideos.video.description}</p>
    `
    // const descr = document.createElement("p")
    // descr.innerText = detailVideos.video.description
    // dtlContainer.append(descr)
    videoModal.showModal()

}
const displayVideos = (videos) => {
    showLoader()
    const videoSection = document.getElementById("videos")
    videoSection.innerHTML = ''
    if (videos.length === 0) {
        videoSection.classList.remove("grid");
        videoSection.innerHTML = `
            <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
            <img src="/assests/Icon.png" />
            <h2 class="text-center text-xl font-bold">
            No Content Here in this Categery
            </h2>
            </div>`
        hideLoader()
        return
    }
    else {
        videoSection.classList.add("grid");
    }


    videos.forEach((video) => {
        const card = document.createElement("div")
        card.classList = "card"
        card.innerHTML = `
                <figure class="h-[200px] relative" onclick="loadDetails('${video.video_id}')">
                    <img  class="h-full w-full object-cover rounded-lg" src=${video.thumbnail} alt="Shoes" />
                    ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute text-sm text-gray-100 px-2 bg-black opacity-50 rounded-sm right-3 bottom-3">${convertMilliseconds(video.others.posted_date)
                } ago</span > `} 
                </figure> 
                <div class="flex gap-2 px-0 py-2">
                    <img class="w-10 h-10 rounded-full" src=${video.authors[0].profile_picture} alt="">
                    <div class="py-0">
                        <h2 class="font-bold"> ${video.title}</h2> 
                        <div class="flex gap-2 items-center">  
                            <p>${video.authors[0].profile_name}</p>
                            ${video.authors[0].verified === true ? `<img class="w-4 h-4" src="https://img.icons8.com/?size=100&id=41816&format=png&color=000000" alt="">` : ""}
                        </div> 
                        <div class="views">
                            <p>${video.others.views} views</p>
                        </div>
                    </div>
                </div>`

        videoSection.append(card)

        // console.log(video)
        // console.log(video.category_id)
        // console.log(video.video_id)
        // console.log(video.thumbnail)
        // console.log(video.title)
        // // console.log(video.authors)
        // console.log(video.authors[0].profile_name)
        // console.log(video.authors[0].profile_picture)
        // console.log(video.authors[0].verified)
        // console.log(video.others.views)
        // console.log(video.others.posted_date)


    })
    hideLoader()

}
document.getElementById("search-video").addEventListener("keyup", (event) => {
    console.log(event.target.value)
    loadVideos(event.target.value)
})
loadCategories()
loadVideos()