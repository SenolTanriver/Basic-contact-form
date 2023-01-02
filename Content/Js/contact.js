 document.querySelector('form').addEventListener('submit', function(event) {
     event.preventDefault();
  
     const formElements = event.target.elements;
  
     const formValues = {};
     for (let element of formElements) {
       if (element.name) {
         formValues[element.name] = element.value;
       }
    }
    console.log(formValues);
  });
