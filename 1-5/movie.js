
const contentTitle = document.querySelector('.main-content__title');
const contentDetail = document.querySelector('.main-content__detail');
const contentDetailView = document.querySelector('.main-content__detail-view-more-less');


function setInfoFromPrevPage() {
  const titleName = sessionStorage.getItem('titleName');
  const titleDescription = sessionStorage.getItem('titleDescription');
  if (titleName) {
    document.title = titleName;
    contentTitle.innerText = titleName;
  }
  if (titleDescription) {
    contentDetail.innerText = titleDescription;
  }
}

function contentViewMoreToggle() {
  const detailViewEnabler = 'main-content__detail--view-less';
  if (contentDetail.classList.contains(detailViewEnabler)) {
    contentDetail.classList.remove(detailViewEnabler);
    contentDetailView.innerHTML = '간략히';
  } else {
    contentDetail.classList.add(detailViewEnabler);
    contentDetailView.innerHTML = '더보기';
  }
}


setInfoFromPrevPage();

contentDetailView.addEventListener('click', contentViewMoreToggle);