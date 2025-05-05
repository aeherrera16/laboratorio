const crearHeader = () => {
    const header = document.createElement('header');
    header.textContent = 'Galería de Imágenes';
    header.style.background = '#333';
    header.style.color = '#fff';
    header.style.padding = '10px';
    header.style.textAlign = 'center';
    document.body.appendChild(header);
  };
  
  const crearSidebar = () => {
    const sidebar = document.createElement('aside');
    sidebar.style.width = '200px';
    sidebar.style.float = 'left';
    sidebar.style.background = '#f0f0f0';
    sidebar.style.height = '100vh';
    sidebar.style.padding = '10px';
  
    const boton = document.createElement('button');
    boton.textContent = 'Registrar nueva imagen';
    boton.onclick = () => location.href = 'registro.html';
    boton.style.padding = '10px';
    boton.style.marginTop = '20px';
    sidebar.appendChild(boton);
  
    document.body.appendChild(sidebar);
  };
  
  const crearGaleria = (imagenes) => {
    const main = document.createElement('main');
    main.style.marginLeft = '220px';
    main.style.padding = '10px';
    main.style.display = 'flex';
    main.style.flexWrap = 'wrap';
    main.style.gap = '10px';
  
    imagenes.forEach(({ url, descripcion }) => {
      const item = document.createElement('div');
      item.classList.add('gallery-item');
      item.style.border = '1px solid #ccc';
      item.style.padding = '5px';
      item.style.width = '200px';
      item.style.textAlign = 'center';
  
      const img = document.createElement('img');
      img.src = url;
      img.alt = descripcion;
      img.style.width = '100%';
  
      const desc = document.createElement('p');
      desc.textContent = descripcion;
  
      item.appendChild(img);
      item.appendChild(desc);
      main.appendChild(item);
    });
  
    document.body.appendChild(main);
  };
  
  const crearFooter = () => {
    const footer = document.createElement('footer');
    footer.textContent = 'NRC - 21602 - Anahy Herrera';
    footer.style.clear = 'both';
    footer.style.background = '#333';
    footer.style.color = '#fff';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';
    footer.style.marginTop = '20px';
    document.body.appendChild(footer);
  };
  
  // Cargar imágenes desde localStorage o inicializar array vacío
  const obtenerImagenes = () => {
    const data = localStorage.getItem('galeria');
    return data ? JSON.parse(data) : [];
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    crearHeader();
    crearSidebar();
    crearGaleria(obtenerImagenes());
    crearFooter();
  });
  