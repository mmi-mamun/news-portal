const newsModal = (news_id) => {
    // alert(news_id);
    let url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => newsDetails(data.data[0]))
        .catch(error => console.log(error))
}

const newsDetails = (data) => {
    console.log(data);

    const modalTitle = document.getElementById('newsTitle');
    let newsDetails = document.getElementById("news-details");
    newsDetails.innerHTML = `
    <div class="row">
    <div class="col-md-4">
      <img class="img-fluid" src="${data.image_url}" alt="" />
    </div>
    <div class="col-md-8">
      <h1 id="" newsTitle class="mb-5 bebas-neue px-2">${data.title}</h1>
      <div class="d-flex justify-content-between class="my-4"">
        <div class="col-md-6 d-flex">
          <div class="me-4">
            <img
              src="${data.author.img}"
              class="rounded-5"
              width="50"
              alt="sdfsdf"
            />
          </div>
          <div>
            ${data.author.name}
            <br /><small>${data.author.published_date}</small>
          </div>
        </div>
        <div class="col-md-2">
          <i class="fa-solid fa-eye"></i> ${data.total_view ?
          data.total_view : "No Data Found"}
        </div>
        <div class="col-md-2">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
      </div>
      
    </div>
    <div class="mt-5 px-5">
            <p class="justify">${data.details}</p>
      </div>
  </div>
`;
}
