const loadNewsCategory = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategory(data.data.news_category))
        .catch(error => console.log(error))
}


function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}


const displayCategory = category => {
    // console.log(category);
    category = category.sort(dynamicSort("category_name"));
    let newsCategory = document.getElementById("news-category");
    category.forEach(element => {
        // console.log(element.category_name)
        newsCategory.innerHTML += `<span class='category_item category_item-${element.category_id}' onclick="getCategoryID('${element.category_id}')">${element.category_name}</span>`;
    });
}

loadNewsCategory()