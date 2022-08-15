const thumbnailImage = document.querySelectorAll('.main-contents__thumbnail-image');
const thumbnailTitle = document.querySelectorAll('.main-contents__thumbnail-title');


// 이미지 클릭 시 href
thumbnailImage.forEach(function (element, index, array) {
  element.href = './pages/movie.html';
  element.target = '_blank';
});

// 타이틀 클릭 시 href
thumbnailTitle.forEach(function (element, index, array) {
  element.href = './pages/movie.html';
  element.target = '_blank';
});
