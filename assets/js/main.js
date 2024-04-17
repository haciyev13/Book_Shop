let btnMenu = document.querySelector(".btn-menu")
let btnMenuIcon = document.querySelector(".btn-menu span")
let sectionNavbar = document.querySelector(".navbar")
let bookTrend = document.querySelector(".book__trend-card");
let categories = document.querySelector(".categories__content-card");
let newsList = document.querySelector(".news__list");
let detailsPrice = document.querySelector(".details__price-content");
let detailsCard = document.querySelector(".title");
let bookContent = document.querySelector(".filter__content-cards-content.book_card-content");

let allCategory = [];
let allBooks = [];
let allCategoryId = [];
let categoryName = [];



function findBookbyCategory(id) {
     let books = allBooks.filter(item => item.categoryId == id);
     return books.length;
}

function findBookbyCategoryName(id) {
     let books = allBooks.filter(item => item.categoryId == id);
     return books;
}


btnMenu.addEventListener("click", function () {
     if (sectionNavbar.classList.contains('active')) {
          sectionNavbar.classList.remove("active")
          btnMenuIcon.style.transform = 'rotate(90deg)'
     } else {
          sectionNavbar.classList.add("active")
          btnMenuIcon.style.transform = 'rotate(270deg)'
     }
})
$('.slider__content').slick({
     dots: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1
});

$('#seller__slick').slick({
     nextArrow: $('#seller-arrow'),
     prevArrow: $('#seller-arrow1'),
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     arrows: true,
});

$('.testiomonials__card').slick({
     nextArrow: $('.testiomonials__arrow-left'),
     prevArrow: $('.testiomonials__arrow-right'),
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     arrows: true,
});
$('#top-book').slick({
     nextArrow: $('#top-book-next'),
     prevArrow: $('#top-book-prev'),
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     arrows: true,
});
$('#featured').slick({
     nextArrow: $('#featured-next'),
     prevArrow: $('#featured-prev'),
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
});

$('.sale__list').slick({
     nextArrow: $('#sale__list-next'),
     prevArrow: $('#sale__list-prev'),
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
});

function getUrl() {
     let url = new URLSearchParams(window.location.search);
     let cardID = url.get("id");
     let catId = url.get("catId");
     let findID = url.get("findID");
     let pathName = window.location.pathname.split('/').pop();
     return {
          findID: findID,
          path: pathName,
          cardId: cardID,
          catId: catId
     }
}


let params = getUrl();

if (params.path == "index.html") {
     getFetch(`book_data`, getInnerCart);
     getFetch(`category`, getİnnerCategories);
     getFetch(`news`, getInnerNews);
}
if (params.path == "books.html") {
     getFetch(`book_data`, getAllBooks);
     getFetch(`category`, categoryFindName);
     getFetch(`book_data`, getInnerBook);
}
if (params.path == "book-details-price.html") {
     getFetch(`book_data`, getData);
     getFetch(`category`, getCategoryById);
     getFetch(`book_data/${params.cardId}`, getUrlFindById)
     // getFetch(`book_data/${params.findID}`, getUrlFindById);
}
function getFetch(endPoint, func) {
     fetch(`http://localhost:3000/${endPoint}`)
          .then(res => res.json())
          .then(data => {
               func(data)
          })
}
function getData(d) {
     allBooks = d;
}

function findInnerBook(id) {
     let find = allCategoryId.find(item => item.id == id.categoryId)
     detailsCard.innerHTML = innerBookPage(id, find)
     detailsPrice.innerHTML = innerBookTitlePage(id);
}

function getUrlFindById(id) {
     let find = allCategoryId.find(item => item.id == id.categoryId)
     detailsCard.innerHTML = innerBookPage(id, find)
     detailsPrice.innerHTML = innerBookTitlePage(id);
}

function innerBook(id) {
     let find = allCategoryId.find(item => item.id == id.categoryId)
     detailsCard.innerHTML = innerBookPage(id, find)
}
function findID(data, id) {
     return data.find(item => item.id == id);
}

function getAllBooks(books) {
     allBooks = books;
     innerBookHTML()
}

function innerBookPage(id, find) {
     return (
          `
          <li>${id.bookName}</li>
          <li>${id.author}</li>
          <li>121341381648 (ISBN13: 121341381648)</li>
          <li>${id.language}</li>
          <li>Paperback, ${id.pageLength} Pages</li>
          <li>August 10th 2019</li>
          <li>${find?.publisher}</li>
     `
     )
}
function innerBookTitlePage(id) {
     return (`
     <div class="details__price-content-description">
     <div class="details__price-desctription-title">
          <div class="seller__item-info-title details__price-info-title">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <p>4,5</p>
          </div>

          <div class="seller__item-info-title filter-title p-2 details__price-reverse">
               <p class="filter-reverse">495 <span>Revierse</span></p>
          </div>
     </div>

     <div class="seller__item-info-header details__info-header">
          <p>${id.bookName}</p>
     </div>

     <div class="news__item-author details__author">
          <div class="news__author-img details__author-img"></div>
          <div class="news__author-info details__author-info">
               <h6>${id.author}</h6>
          </div>
     </div>
     <div class="delivery__card-info">
          <p class="details__card-text">
               ${id.bookDesc}
          </p>
     </div>
     <div class="book__inner-price details__btn">
          <p class="book__inner-price-title details__price-title">$${id.price}</p>
          <div class="book__inner-price-sale details__price-sale">
               <p>$${id.oldPrice}</p>
               <span>2 %</span>
          </div>
     </div>
     <div class="details__count-btn">
          <div class="details__count-plus-minus">
               <button>-</button>
               <span>0</span>
               <button>+</button>
          </div>
          <button class="btn">BUY</button>
          <span>icon</span>
     </div>
</div>
<div class="details__price-content-img">
     <div class="details__price-img"></div>
     <div class="details__price-img"></div>
     <div class="details__price-img-direction">
          <div class="details__price-direction-item"></div>
          <div class="details__price-direction-item"></div>
          <div class="details__price-direction-item"></div>
          <div class="details__price-direction-item"></div>
     </div>
</div>
</div>
`
     )
}

// function innerBookHTML() {
//      let books = findBookbyCategoryName(params.catId);
//      console.log(books);
//      books.map(item => {
//           console.log(item);
//           bookContent.innerHTML += `
//           <div class="book__trend-card-item filter-item book_item">
//                <a href="">
//                     <div class="book__trend-card-item-img filter-img book_img">
//                          <div class="filter-icon">
//                               <span>hea</span>
//                               <span>sea</span>
//                               <span>bas</span>
//                          </div>
//                     </div>

//                     <div class="seller__item-info-title filter-title">
//                          <span></span>
//                          <p class="filter-after">${item.rating}</p>
//                          <p class="filter-reverse">495 Revierse</p>
//                     </div>
//                     <div class="seller__item-info-title">
//                          <button class="filter-btn">${item.categoryName}</button>
//                     </div>
//                     <div class="seller__item-info-header filter-author">
//                           <p>SUNGLASES</p>
//                           <span>${item.author}</span>
//                     </div>
//                     <div class="seller__item-info-footer filter-price">
//                          <span>$${item.price}</span>
//                     </div>
//                </a>
//           </div>
//           `
//      })
// }

function getInnerBook(id) {
     let find = allBooks.filter(item => item.categoryId == params.catId);
     let innerData = "";
     find.map(item => {
          innerData += `
          <div class="book__trend-card-item filter-item book_item">
               <a href="/book-details-price.html?findID=${item.id}">
                    <div class="book__trend-card-item-img filter-img book_img">
                         <div class="filter-icon">
                              <span>hea</span>
                              <span>sea</span>
                              <span>bas</span>
                         </div>
                    </div>
     
                    <div class="seller__item-info-title filter-title">
                         <span></span>
                         <p class="filter-after">${item.rating}</p>
                         <p class="filter-reverse">495 Revierse</p>
                    </div>
                    <div class="seller__item-info-title">
                         <button class="filter-btn">${item.categoryName}</button>
                    </div>
                    <div class="seller__item-info-header filter-author">
                         <p>${item.bookName}</p>
                         <span>${item.author}</span>
                    </div>
                    <div class="seller__item-info-footer filter-price">
                         <span>$${item.price}</span>
                    </div>
               </a>
          </div>
          `
     })
     bookContent.innerHTML = innerData
}

function categoryFindName(name) {
     categoryName = name;
}
function getCategoryById(id) {
     allCategoryId = id;
     //? CATEGORY MELUMATLAR
}

function getInnerCart(data) {
     allBooks = data;
     let emptyCard = '';
     data.map(item => {
          if (item.status != 0) {
               emptyCard += `
          <div class="book__trend-card-item">
                              <a href="book-details-price.html?id=${item.id}">
                                   <div class="book__trend-card-item-img">
                                        <div class="book__trend-card-item-best">
                                             <span class="icon-package icon-star"></span>
                                             <p>4.5</p>
                                        </div>
                                   </div>
                              </a>
                              <div class="book__trend-card-item-title">
                                   <p>${item.categoryName}</p>
                              </div>
                              <div class="book__trend-card-item-info">
                                   <p>${item.bookName}</p>
                                   <span>${item.author}</span>
                              </div>
                              <div class="book__trend-card-item-price">
                                   <p>$${item.price}</p>
                              </div>
               </div>
          `
          }
     })

     bookTrend.innerHTML = emptyCard;
}

function getİnnerCategories(data) {
     let innerData = '';
     data.map(item => {
          if (item.status != "0") {
               let books = findBookbyCategory(item.id);
               console.log(item.id);
               innerData += `
               <a href="/books.html?catId=${item.id} "target="_blank">
                    <div class="categories__content-item">
                         <p>${item.name}</p>
                         <span>${books}+ Item</span>
                    </div>
               </a>
               `
          }
     })
     categories.innerHTML = innerData;
}

function getInnerNews(data) {
     let innerData = '';
     data.map(item => {
          innerData += `
          <div class="news__item">
                         <div class="news__item-img">
                              <img src="${item.img}"/> 
                         </div>
               <div class="news__item-content">
                    <h4>${item.newsTitle}</h4>
                    <p>
                         ${item.newsDesc}
                         <a href="#">Continue reading</a>
                    </p>
                    <div class="news__item-author">
                         <div class="news__author-img">
                              <img src="${item.imgAuthor}"/>
                         </div>
                         <div class="news__author-info">
                              <h6>${item.newsAuthor}</h6>
                              <p>2 days ago</p>
                         </div>
                    </div>
               </div>
          </div>
          `
     })
     newsList.innerHTML = innerData;
}

