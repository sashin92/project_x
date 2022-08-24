const contentVideo = document.querySelector('section video');
const contentTitle = document.querySelector('.content__title');
const contentDescription = document.querySelector('.content__description');
const listElements = document.querySelectorAll('.list__element');


// 말줄임 함수
const textEllipsis = (text) => {
  const maxLength = 10;
  if (text.length > maxLength) {
    text = text.substr(0, maxLength - 1) + '⋯';
  }
  return (text);
};

// 컨텐츠섹션 갱신 함수
const videoReplace = (element) => {
  contentVideo.dataset.id = element.dataset.id;
  contentVideo.setAttribute('src', element.dataset.url);
  contentTitle.innerHTML = element.dataset.title;
  contentDescription.innerHTML = element.dataset.description;
};



// 연속재생 함수
const videoAutoNext = () => {
  for (let i = 0; i <= listElements.length; i++) {
    if (listElements[i].dataset.id == contentVideo.dataset.id && listElements[i + 1]) {
      videoReplace(listElements[i + 1]);
      break ;
    };
  };
};


// 연속재생 이벤트
contentVideo.addEventListener('ended', videoAutoNext);



listElements.forEach(element => {
  // 리스트 제목 말줄임 후 출력
  const dataTitle = element.getAttribute('data-title');
  element.innerHTML = textEllipsis(dataTitle);
  
  // 클릭 시 컨텐츠 섹션에 데이터 덮어쓰기
  element.addEventListener('click', function () { videoReplace(element) });
});

