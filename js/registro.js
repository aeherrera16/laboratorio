const crearFormulario = () => {
    const main = document.createElement('main');
    main.style.margin = '50px auto';
    main.style.maxWidth = '400px';
    main.style.padding = '20px';
    main.style.border = '1px solid #ccc';
    main.style.borderRadius = '5px';
  
    const h2 = document.createElement('h2');
    h2.textContent = 'Registrar nueva imagen';
    main.appendChild(h2);
  
    const form = document.createElement('form');
  
    const labelUrl = document.createElement('label');
    labelUrl.textContent = 'URL de la imagen:';
    const inputUrl = document.createElement('input');
    inputUrl.type = 'text';
    inputUrl.required = true;
    inputUrl.style.width = '100%';
  
    const labelDesc = document.createElement('label');
    labelDesc.textContent = 'Descripción:';
    const inputDesc = document.createElement('input');
    inputDesc.type = 'text';
    inputDesc.required = true;
    inputDesc.style.width = '100%';
  
    const submit = document.createElement('button');
    submit.textContent = 'Guardar';
    submit.type = 'submit';
    submit.style.marginTop = '10px';
  
    form.appendChild(labelUrl);
    form.appendChild(inputUrl);
    form.appendChild(labelDesc);
    form.appendChild(inputDesc);
    form.appendChild(submit);
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const url = inputUrl.value.trim();
      const descripcion = inputDesc.value.trim();
  
      const nuevaImagen = { url, descripcion };
      const galeria = JSON.parse(localStorage.getItem('galeria')) || [];
      galeria.push(nuevaImagen);
      localStorage.setItem('galeria', JSON.stringify(galeria));
      location.href = 'galeria.html';
    });
  
    main.appendChild(form);
    document.body.appendChild(main);
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    crearFormulario();
  });
  