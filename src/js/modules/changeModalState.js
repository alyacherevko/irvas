import checkNumInputs from './checkNumInputs';

const windowForms = [
  '3 стекла',
  '4 стекла (изогнутые)',
  '4 cтекла (прямые)',
  '4 стекла (квадрат)',
];

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  const bindActionElems = (event, elem, prop) => {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch(item.nodeName) {
          case 'SPAN' : 
            state[prop] = windowForms[i];
            break;
          case 'INPUT' :
            if (item.getAttribute('type') === 'checkbox') {
              i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
              elem.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case 'SELECT' : 
            state[prop] = item.value;
            break;
        }
      });
    });
  };

  bindActionElems('click', windowForm, 'form');
  bindActionElems('input', windowHeight, 'height');
  bindActionElems('input', windowWidth, 'width');
  bindActionElems('change', windowType, 'type');
  bindActionElems('change', windowProfile, 'profile');
};

export default changeModalState;