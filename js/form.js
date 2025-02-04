const operationPrices = {
  smallCar: {
      standardTire: {
          'R13-15': {
              'wheel-install': 230,
              'tire-demount': 230,
              'tire-mount': 230,
              'balancing': 230
          },
          'R16': {
              'wheel-install': 260,
              'tire-demount': 260,
              'tire-mount': 260,
              'balancing': 260
          },
          'R17': {
              'wheel-install': 300,
              'tire-demount': 300,
              'tire-mount': 300,
              'balancing': 300
          },
          'R18': {
              'wheel-install': 350,
              'tire-demount': 350,
              'tire-mount': 350,
              'balancing': 350
          },
          'R19': {
              'wheel-install': 390,
              'tire-demount': 390,
              'tire-mount': 390,
              'balancing': 390
          },
          'R20': {
              'wheel-install': 440,
              'tire-demount': 440,
              'tire-mount': 440,
              'balancing': 440
          },
          'R21': {
              'wheel-install': 500,
              'tire-demount': 500,
              'tire-mount': 500,
              'balancing': 500
          },
          'R22': {
              'wheel-install': 570,
              'tire-demount': 570,
              'tire-mount': 570,
              'balancing': 570
          },
          'R23': {
              'wheel-install': 650,
              'tire-demount': 650,
              'tire-mount': 650,
              'balancing': 650
          },
          'R24': {
              'wheel-install': 650,
              'tire-demount': 650,
              'tire-mount': 650,
              'balancing': 650
          }
      },
      runflatTire: {
          'R13-15': {
              'wheel-install': 230,
              'tire-demount': 230,
              'tire-mount': 230,
              'balancing': 230
          },
          'R16': {
              'wheel-install': 260,
              'tire-demount': 380,
              'tire-mount': 380,
              'balancing': 260
          },
          'R17': {
              'wheel-install': 300,
              'tire-demount': 490,
              'tire-mount': 490,
              'balancing': 300
          },
          'R18': {
              'wheel-install': 350,
              'tire-demount': 550,
              'tire-mount': 550,
              'balancing': 350
          },
          'R19': {
              'wheel-install': 390,
              'tire-demount': 680,
              'tire-mount': 680,
              'balancing': 390
          },
          'R20': {
              'wheel-install': 440,
              'tire-demount': 750,
              'tire-mount': 750,
              'balancing': 440
          },
          'R21': {
              'wheel-install': 500,
              'tire-demount': 820,
              'tire-mount': 820,
              'balancing': 500
          },
          'R22': {
              'wheel-install': 570,
              'tire-demount': 900,
              'tire-mount': 900,
              'balancing': 570
          },
          'R23': {
              'wheel-install': 650,
              'tire-demount': 900,
              'tire-mount': 900,
              'balancing': 650
          },
          'R24': {
              'wheel-install': 650,
              'tire-demount': 900,
              'tire-mount': 900,
              'balancing': 650
          }
      }
  },
  bigCar: {
      standardTire: {
          'R13-15': {
              'wheel-install': 250,
              'tire-demount': 250,
              'tire-mount': 250,
              'balancing': 250
          },
          'R16': {
              'wheel-install': 300,
              'tire-demount': 300,
              'tire-mount': 300,
              'balancing': 300
          },
          'R17': {
              'wheel-install': 360,
              'tire-demount': 360,
              'tire-mount': 360,
              'balancing': 360
          },
          'R18': {
              'wheel-install': 400,
              'tire-demount': 400,
              'tire-mount': 400,
              'balancing': 400
          },
          'R19': {
              'wheel-install': 440,
              'tire-demount': 440,
              'tire-mount': 440,
              'balancing': 440
          },
          'R20': {
              'wheel-install': 530,
              'tire-demount': 530,
              'tire-mount': 530,
              'balancing': 530
          },
          'R21': {
              'wheel-install': 660,
              'tire-demount': 660,
              'tire-mount': 660,
              'balancing': 660
          },
          'R22': {
              'wheel-install': 700,
              'tire-demount': 700,
              'tire-mount': 700,
              'balancing': 700
          },
          'R23': {
              'wheel-install': 740,
              'tire-demount': 740,
              'tire-mount': 740,
              'balancing': 740
          },
          'R24': {
              'wheel-install': 940,
              'tire-demount': 940,
              'tire-mount': 940,
              'balancing': 940
          }
      },
      runflatTire: {
          'R13-15': {
              'wheel-install': 250,
              'tire-demount': 250,
              'tire-mount': 250,
              'balancing': 250
          },
          'R16': {
              'wheel-install': 300,
              'tire-demount': 300,
              'tire-mount': 300,
              'balancing': 300
          },
          'R17': {
              'wheel-install': 360,
              'tire-demount': 490,
              'tire-mount': 490,
              'balancing': 360
          },
          'R18': {
              'wheel-install': 400,
              'tire-demount': 550,
              'tire-mount': 550,
              'balancing': 400
          },
          'R19': {
              'wheel-install': 440,
              'tire-demount': 680,
              'tire-mount': 680,
              'balancing': 440
          },
          'R20': {
              'wheel-install': 530,
              'tire-demount': 750,
              'tire-mount': 750,
              'balancing': 530
          },
          'R21': {
              'wheel-install': 660,
              'tire-demount': 820,
              'tire-mount': 820,
              'balancing': 660
          },
          'R22': {
              'wheel-install': 700,
              'tire-demount': 900,
              'tire-mount': 900,
              'balancing': 700
          },
          'R23': {
              'wheel-install': 740,
              'tire-demount': 900,
              'tire-mount': 900,
              'balancing': 740
          },
          'R24': {
              'wheel-install': 940,
              'tire-demount': 940,
              'tire-mount': 940,
              'balancing': 940
          }
      }
  }
};


function getOperationPrice(carType, tireType, wheelSize, operation) {
  // Определяем группу радиуса
  const sizeGroup = ['R13', 'R14', 'R15'].includes(wheelSize) ? 'R13-15' : wheelSize;
  
  // Получаем цену из структуры данных
  return operationPrices[carType][tireType][sizeGroup][operation];
}


const pricing = {
  smallCar: {
      standardTire: {
          R13: 3680, R14: 3680, R15: 3680,
          R16: 4160, R17: 4800, R18: 5600,
          R19: 6240, R20: 7040, R21: 8000,
          R22: 9120, R23: 10400, R24: 10400
      },
      runflatTire: {
          R13: 5120, R14: 5120, R15: 5120,
          R16: 5120, R17: 6320, R18: 7200,
          R19: 8560, R20: 9520, R21: 10560,
          R22: 11760, R23: 11760, R24: 11760
      }
  },
  bigCar: {
      standardTire: {
          R13: 4000, R14: 4000, R15: 4000,
          R16: 4800, R17: 5760, R18: 6400,
          R19: 7040, R20: 8480, R21: 10560,
          R22: 11200, R23: 11840, R24: 15040
      },
      runflatTire: {
          R13: 5440, R14: 5440, R15: 5440,
          R16: 5440, R17: 6800, R18: 7600,
          R19: 8960, R20: 10240, R21: 11840,
          R22: 12800, R23: 12800, R24: 15040
      }
  },
  additionalServices: {
      'wheel-washing': 150,
      'valve-replacement': 70,
      'tire-disposal': 400
  }
};




//DOM elements
const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next'
};

//remove class from a set of items
const removeClasses = (elemSet, className) => {
  
  elemSet.forEach(elem => {
    
    elem.classList.remove(className);
    
  });
  
};

const findParent = (elem, parentClass) => {
  let currentNode = elem;
  while (currentNode && !currentNode.classList.contains(parentClass)) {
      if (currentNode === document.body) return null; // избегаем зацикливания
      currentNode = currentNode.parentNode;
  }
  return currentNode;
};

//get active button step number
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep = (activeStepNum) => {
  
  //remove active state from all the state
  removeClasses(DOMstrings.stepsBtns, 'js-active');
  
  //set picked items to active
  DOMstrings.stepsBtns.forEach((elem, index) => {
    
    if(index <= (activeStepNum) ) {
      elem.classList.add('js-active');
    }
    
  });
};

//get active panel
const getActivePanel = () => {
  
  let activePanel;
  
  DOMstrings.stepFormPanels.forEach(elem => {
    
    if(elem.classList.contains('js-active')) {
      
      activePanel = elem;
      
    }
    
  });
  
  return activePanel;
                                    
};

//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => {
  
  //remove active class from all the panels
  removeClasses(DOMstrings.stepFormPanels, 'js-active');
  
  //show active panel
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if(index === (activePanelNum)) {
      
      elem.classList.add('js-active');
   
      setFormHeight(elem);
      
    }
  })
  
};

//set form height equal to current panel height
const formHeight = (activePanel) => {
  
  const activePanelHeight = activePanel.offsetHeight;
  
  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
  
};

const setFormHeight = () => {
  const activePanel = getActivePanel();

  formHeight(activePanel);
}

//STEPS BAR CLICK FUNCTION
DOMstrings.stepsBar.addEventListener('click', e => {
  
  //check if click target is a step button
  const eventTarget = e.target;
  
  if(!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return;
  }
  
  //get active button step number
  const activeStep = getActiveStep(eventTarget);
  
  //set all steps before clicked (and clicked too) to active
  setActiveStep(activeStep);
  
  //open active panel
  setActivePanel(activeStep);
});

//PREV/NEXT BTNS CLICK
DOMstrings.stepsForm.addEventListener('click', e => {
  
  const eventTarget = e.target;
  
  //check if we clicked on `PREV` or NEXT` buttons
  if(! ( (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) || (eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)) ) ) 
  {
    return;
  }
  
  //find active panel
  const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
  
  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
  
  //set active step and active panel onclick
  if (eventTarget.classList.contains(DOMstrings.stepPrevBtnClass) && activePanelNum > 0) {
    activePanelNum--;
  } else if (eventTarget.classList.contains(DOMstrings.stepNextBtnClass) && activePanelNum < DOMstrings.stepFormPanels.length - 1) {
      activePanelNum++;
  }
  
  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);
  
});


document.addEventListener("DOMContentLoaded", function () {
  // DOM элементы
  const separateService = document.getElementById("separate-service");
  const complexService = document.getElementById("complex-service");
  const serviceCheckboxes = document.querySelectorAll("#service-option-checkbox-group input[type='checkbox']");
  const operationCheckboxes = document.querySelectorAll(".operation-checkbox");
  const extraOperationCheckboxes = document.querySelectorAll(".extra-service-checkbox");

  // Функция включения/выключения чекбоксов "Отдельные операции"
  function toggleServiceCheckboxes() {
      serviceCheckboxes.forEach(cb => {
          cb.disabled = !separateService.checked;
          if (!separateService.checked) cb.checked = false; // Сбрасываем отметки
      });
  }

  // Функция включения/выключения полей количества операций
  function toggleOperationQuantity() {
      operationCheckboxes.forEach(checkbox => {
          const quantityInput = checkbox.closest("label").querySelector(".operation-quantity");
          quantityInput.disabled = !checkbox.checked;
          if (!checkbox.checked) quantityInput.value = 1; // Сброс в минимальное значение
      });
  }

   // Функция включения/выключения полей количества операций
   function toggleExtraOperationQuantity() {
    extraOperationCheckboxes.forEach(checkbox => {
      const quantityInput = checkbox.closest("label").querySelector(".extra-service-quantity");
      quantityInput.disabled = !checkbox.checked;
      if (!checkbox.checked) quantityInput.value = 4; // Сброс в минимальное значение
    });
   }

  // Обработчики событий
  separateService.addEventListener("change", toggleServiceCheckboxes);
  complexService.addEventListener("change", toggleServiceCheckboxes);

  complexService.addEventListener("change", toggleOperationQuantity);

  operationCheckboxes.forEach(checkbox => {
      checkbox.addEventListener("change", toggleOperationQuantity);
  });

  extraOperationCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", toggleExtraOperationQuantity);
  });

  // Запуск при загрузке страницы
  toggleServiceCheckboxes();



  

  document.querySelector(".btn-success").addEventListener("click", function() {
    // Получаем выбранные значения
    const carType = document.querySelector(".pick-car-type__select").value;
    const tireType = document.querySelector(".pick-tire-type__select").value;
    const wheelSize = document.querySelector(".pick-tire-size__select").value;
    const serviceType = document.querySelector('input[name="service"]:checked').value;
    
    // Собираем дополнительные услуги
    const extraServices = Array.from(document.querySelectorAll('.extra-service-checkbox:checked'))
        .map(checkbox => {
            const quantity = checkbox.parentElement.querySelector('.extra-service-quantity').value;
            return {
                name: checkbox.parentElement.textContent.split('\n')[2].trim(),
                price: pricing.additionalServices[checkbox.value] * quantity,
                quantity: quantity,
                unitPrice: pricing.additionalServices[checkbox.value]
            };
        });

    // Рассчитываем основную стоимость
    let mainServicePrice = 0;
    let serviceDetails = [];
    
    if(serviceType === 'complex') {
        mainServicePrice = pricing[carType][tireType][wheelSize];
        serviceDetails.push({
            name: 'Комплекс шиномонтажных работ',
            price: mainServicePrice,
            quantity: 1
        });
    } else {
        // Обработка отдельных операций с учетом количества
        Array.from(document.querySelectorAll('input[name="operations-options"]:checked')).forEach(op => {
            const operation = op.value;
            const quantity = op.parentElement.querySelector('.operation-quantity').value;
            const unitPrice = getOperationPrice(carType, tireType, wheelSize, operation);
            const totalPrice = unitPrice * quantity;
            
            serviceDetails.push({
                name: op.parentElement.textContent.split('\n')[2].trim(),
                price: totalPrice,
                quantity: quantity,
                unitPrice: unitPrice
            });
            
            mainServicePrice += totalPrice;
        });
    }

    // Суммируем все цены
    const totalPrice = mainServicePrice + extraServices.reduce((sum, s) => sum + s.price, 0);

    // Формируем HTML для печати
    let printWindow = window.open("", "_blank");
    printWindow.document.write(`
        <html>
        <head>
            <title>Прайс-лист</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h2 { text-align: center; color: #333; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { padding: 12px; border: 1px solid #ddd; text-align: left; }
                th { background-color: #f8f9fa; }
                .total { font-weight: bold; font-size: 1.1em; }
                .unit-price { font-size: 0.9em; color: #666; }
                button { 
                    padding: 10px 20px;
                    background-color: #28a745;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                @media print {
                    button { display: none; }
                }
            </style>
        </head>
        <body>
            <h2>Детализированный прайс-лист</h2>
            
            <table>
                <tr>
                    <th>Тип автомобиля</th>
                    <td>${carType === "smallCar" ? "Легковой автомобиль" : "Внедорожник / Минивэн"}</td>
                </tr>
                <tr>
                    <th>Категория шин</th>
                    <td>${tireType === "standardTire" ? "Стандартный профиль" : "RUNFLAT"}</td>
                </tr>
                <tr>
                    <th>Радиус колеса</th>
                    <td>${wheelSize}</td>
                </tr>
            </table>

            <h3>Состав услуг:</h3>
            <table>
                <tr>
                    <th>Услуга</th>
                    <th>Количество</th>
                    <th>Стоимость</th>
                </tr>
                ${serviceDetails.map(s => `
                    <tr>
                        <td>${s.name}
                            ${s.quantity > 1 ? `<div class="unit-price">(${s.unitPrice} руб./шт.)</div>` : ''}
                        </td>
                        <td>${s.quantity}</td>
                        <td>${s.price} руб.</td>
                    </tr>
                `).join('')}
                ${extraServices.map(s => `
                    <tr>
                        <td>${s.name}
                            ${s.quantity > 1 ? `<div class="unit-price">(${s.unitPrice} руб./шт.)</div>` : ''}
                        </td>
                        <td>${s.quantity}</td>
                        <td>${s.price} руб.</td>
                    </tr>
                `).join('')}
                <tr class="total">
                    <td colspan="2">Итого:</td>
                    <td>${totalPrice} руб.</td>
                </tr>
            </table>
            
            <button onclick="window.print()">Распечатать</button>
        </body>
        </html>
    `);
    printWindow.document.close();
});
});


//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);