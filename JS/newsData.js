const getCategoryID = (category_id) => {
    togglerSpiner(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id} `;
    fetch(url)
        .then(res => res.json())
        .then(data => categoryData(data.data))
     
        .catch(error => console.log(error))
}
const defaultID = () => {
    // let activeCategory = document.querySelector(".category_item-08");
    // console.log(activeCategory)
    // activeCategory.classList.add("active");
    const url = `https://openapi.programming-hero.com/api/news/category/08`;
    fetch(url)
        .then(res => res.json())
        .then(data => categoryData(data.data))
        .catch(error => console.log(error))
}

defaultID();

const categoryData = (data) => {
    console.log(typeof data, data);
    let htmlSegment = '';
    let thumbNews = document.getElementById("shortNews");
    let newsFound = document.getElementById("newsFound");
    newsFound.innerHTML = `${data.length} items found`;
    
        data.forEach(data => {
        htmlSegment += `
        <div class="card mb-3">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${data.thumbnail_url}" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title" data-bs-toggle="modal"
                    data-bs-target="#newsDetailsModal" onclick="newsModal('${data._id}')">${data.title}</h5>
                    <p class="card-text">
                        ${data.details.slice(0, 250)}...
                    </p>

                    <div class="d-flex justify-content-between">
                        <div class="col-md-6 d-flex">
                        <div class="me-4">
                            <img src="${data.author.img}" class='rounded-5' width="50" alt="sdfsdf" />
                        </div>
                        <div>
                            ${data.author.name}
                            <br /><small>${data.author.published_date}</small>
                        </div>
                        </div>
                        <div class="col-md-2">
                            <i class="fa-solid fa-eye"></i> ${data.total_view ? data.total_view : "No Data Found"}
                        </div>
                        <div class="col-md-2">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="col-md-2 text-end">
                            <i class="fa-solid fa-arrow-right readMore" data-bs-toggle="modal"
                            data-bs-target="#newsDetailsModal" onclick="newsModal('${data._id}')"></i>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
        `;
    });
    if(data.length == 0){
        thumbNews.innerHTML = `<p class="text-center text-danger">No Data Found</p>`;
        console.log("No Data")
    }else{
        thumbNews.innerHTML = htmlSegment;
    }
    togglerSpiner(false);
}

