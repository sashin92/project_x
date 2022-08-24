const contentVideo = document.querySelector('section video');
const contentTitle = document.querySelector('.content__title');
const contentDescription = document.querySelector('.content__description');

const playList = document.querySelector('.list');
let listElements = document.querySelectorAll('.list__element');

const form = document.querySelector('.form');


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


// 컨텐츠 <div> 생성 및 클릭 시 이벤트 추가
const createListElement = (url, title, description) => {
  const newListElement = document.createElement('div');
  newListElement.classList.add('list__element');
  newListElement.setAttribute('data-id', listElements.length);
  newListElement.setAttribute('data-url', url);
  newListElement.setAttribute('data-title', title);
  newListElement.setAttribute('data-description', description);

  newListElement.innerHTML = textEllipsis(title);
  newListElement.addEventListener('click', function () { videoReplace(newListElement) });

  return newListElement;
};



// 플레이리스트 추가
const addPlayList = (event) => {
  event.preventDefault();
  const inputUrl = form.querySelector('.input-url');
  const inputTitle = form.querySelector('.input-title');
  const inputDescription = form.querySelector('.input-description');

  if (inputUrl.value && inputTitle.value) {
    const newPlayList = createListElement(inputUrl.value, inputTitle.value, inputDescription.value);
    playList.appendChild(newPlayList);
    listElements = document.querySelectorAll('.list__element');

    inputUrl.value = '';
    inputTitle.value = '';
    inputDescription.value = '';
  };
}



const init = () => {

  listElements.forEach(element => {
    // 리스트 제목 말줄임
    const dataTitle = element.getAttribute('data-title');
    element.innerHTML = textEllipsis(dataTitle);
    // 클릭 시 컨텐츠 섹션에 데이터 덮어쓰기
    element.addEventListener('click', function () { videoReplace(element) });
  });
  

  // 연속재생 이벤트
  contentVideo.addEventListener('ended', videoAutoNext);

  // 플레이리스트 추가 이벤트
  form.addEventListener('submit', addPlayList);
}

init();