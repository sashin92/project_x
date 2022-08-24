const listElements = document.querySelectorAll('.list__element');

const textEllipsis = (text) => {
  const maxLength = 10;
  if (text.length > maxLength) {
    text = text.substr(0, maxLength - 1) + '⋯';
  }
  return(text);
};



listElements.forEach(element => {
  element.innerHTML = textEllipsis(element.innerHTML);
  
});

