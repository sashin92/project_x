const thumbnailImage = document.querySelectorAll('.main-contents__thumbnail-image');
const thumbnailTitle = document.querySelectorAll('.main-contents__thumbnail-title');
const thumbnailDetail = document.querySelectorAll('.main-contents__thumbnail-detail');


function movePage(index) {
  sessionStorage.setItem('titleName', thumbnailTitle[index].innerText);
  sessionStorage.setItem('titleDescription', thumbnailDetail[index].innerText);
  window.location.href = './pages/movie.html';
}

// 이미지 클릭 시 href
thumbnailImage.forEach(function (element, index, array) {
  element.addEventListener('click', function(){ movePage(index) }); 
});

// 타이틀 클릭 시 href
thumbnailTitle.forEach(function (element, index, array) {
  element.addEventListener('click', function(){ movePage(index) }); 
});
