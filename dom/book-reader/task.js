const toSelector = className => '.' + className;

const BOOK_CLASS_NAME = {
  'font-size': 'book_fs',
  'color': 'book_color',
  'background': 'book_bg'
}

const CONTROL_DATASET = {
  'font-size': 'size',
  'color': 'textColor',
  'background': 'bgColor'
}

const CONTROL_CLASS_NAME = {
  'font-size': 'font-size',
  'color': 'color',
  'background': 'color'
}

const book = document.querySelector('.book');

const getControlType = e => {
  const control = e.target.closest('.book__control');
  if (!control) {
    return false;
  }
  const classList = control.className.split(' ');
  const className = classList.find(c => c.includes('book__control_'));
  
  if (!className) {
    return false;
  }
  
  return className.replace('book__control_', '');
}

const getControlValue = (e, type) => {
  const { target } = e;
  const datasetName = CONTROL_DATASET[type];
  const value = target.dataset[datasetName];
  
  return value;
}

const setActiveControl = (e, type) => {
  const controlClassName = CONTROL_CLASS_NAME[type];
  const controlSelector = toSelector(controlClassName);
  
  const activeClassName = controlClassName + '_active';
  
  const button = e.target.closest(controlSelector);
  
  if (!button) {
    return false;
  }
  
  const activeSelector = toSelector(activeClassName);
  
  const control = e.target.closest('.book__control');
  const activeControl = control.querySelector(activeSelector);
  
  activeControl.classList.remove(activeClassName);
  button.classList.add(activeClassName);
  
  return true;
}

const getBookActiveClassName = type => {
  const prefix = BOOK_CLASS_NAME[type];
  const classList = book.className.split(' ');
  
  return classList.find(c => c.includes(prefix));
}

const setBookValue = (e, type) => {
  const value = getControlValue(e, type);
  const prefix = BOOK_CLASS_NAME[type];
  const activeClassName = getBookActiveClassName(type);
  
  book.classList.remove(activeClassName);
  
  if (!value) {
    return;
  }
  const className = prefix + '-' + value;
  book.classList.add(className);
}

document.addEventListener('click', e => {
  const type = getControlType(e);
  
  if (!type) {
    return;
  }
  
  e.preventDefault();
  
  if (!setActiveControl(e, type)) {
    return;
  }
  
  setBookValue(e, type)
})