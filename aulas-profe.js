<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Buscar Aulas</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body class="aulas-cont">
    <header>
      <div class="left-section">
        <a href="#">
          <img src="./img/uca-logo.png" alt="seva-img" id="seva-img" />
        </a>
        <a href="paginaprincipal-prof.html" id="texto-nav">SEVA</a>
      </div>
      <div class="right-section">
        <a href="perfil-profe.html" id="perfil-nav">Mi perfil</a>
      </div>
    </header>
    <div class="main-content">
      <div class="left-panel">
        <input type="text" id="search-input-clases" placeholder="Buscar aula..." />
        <div class="filters">
          <select id="size-filter">
            <option value="">Tamaño</option>
            <option value="small">Pequeño</option>
            <option value="medium">Medio</option>
            <option value="large">Grande</option>
          </select>
          <select id="computers-filter">
            <option value="">Computadoras</option>
            <option value="yes">Sí</option>
            <option value="no">No</option>
          </select>
          <select id="projectors-filter">
            <option value="">Proyectores</option>
            <option value="yes">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <div class="right-panel">
        <div class="classrooms-container">
          <div class="classroom" id="classroom-sanjose">
            <div class="classroom-image">
              <img src="./img/uca-aula.jpg" alt="San Jose 126" />
              <div class="classroom-info">
                <p>San Jose 126</p>
              </div>
            </div>
            <div class="classroom-details">
              <div class="rating">
                <span>★★★★★</span>
              </div>
              <div class="details">
                <p>Capacidad: 30</p>
                <p>Pantalla/Proyector: Sí</p>
                <p>Computadoras: No</p>
                <p><a href="profe-sel.html">Reservar</a></p>
              </div>
            </div>
          </div>
          <div class="classroom" id="classroom-magno">
            <div class="classroom-image">
              <img src="./img/uca-aula.jpg" alt="Aula Magno" />
              <div class="classroom-info">
                <p>Magno S-57</p>
              </div>
            </div>
            <div class="classroom-details">
              <div class="rating">
                <span>★★★★☆</span>
              </div>
              <div class="details">
                <p>Capacidad: 100</p>
                <p>Pantalla/Proyector: Sí</p>
                <p>Computadoras: Sí</p>
                <p><a href="profe-sel.html">Reservar</a></p>
              </div>
            </div>
          </div>
        
          <!-- Aula adicional 2 -->
          <div class="classroom" id="classroom-moro">
            <div class="classroom-image">
              <img src="./img/uca-aula.jpg" alt="Aula 303" />
              <div class="classroom-info">
                <p>Moro 110</p>
              </div>
            </div>
            <div class="classroom-details">
              <div class="rating">
                <span>★★★☆☆</span>
              </div>
              <div class="details">
                <p>Capacidad: 50</p>
                <p>Pantalla/Proyector: No</p>
                <p>Computadoras: No</p>
                <p><a href="profe-sel.html">Reservar</a></p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <script language="javascript" type="text/javascript" src="aulas-profe.js"></script>
  </body>
</html>
