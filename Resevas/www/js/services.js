angular.module('starter.services', [])

.factory('Parques', function() {
  // Might use a resource here that returns a JSON array

  var regiones = [{
    id: 'PCF',
    name: 'Region Pacífico',
    desc: 'Playa',
  }, {
    id: 'CRB',
    name: 'Region Caribe',
    desc: 'Playa',
  }, {
    id: 'AND',
    name: 'Region Andina',
    desc: 'Montana',
  }, {
    id: 'AMZ',
    name: 'Region Amazonía',
    desc: 'Selva',
  }, {
    id: 'ORN',
    name: 'Region Orinoquía',
    desc: 'Selva',
  }];

  var parques = [{
    id: 0,
    region: 'PCF',
    prefix: 'Parque Nacional',
    name:   'Utria',
    desc:   'El Parque Nacional Natural Utría ubicado en la provincia biogeografía del Chocó, en la costa norte del pacífico colombiano, se encuentra bajo la jurisdicción de los municipios de Bahía Solano, Nuquí, Alto Baudó y Bojayá, departamento del Chocó. Cerca del 80% de su territorio se encuentra traslapado con tres resguardos de la etnia Embera, y es también territorio ancestral de comunidades afro descendientes que dependen de los bienes y servicios provistos por el área protegida.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-pacifico/parque-nacional-natural-utria/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/08/Utrr%C3%ADa.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/08/s023.jpg',
    gview:  '',
    color:  'pacific',
    concesion: '',
  }, {
    id: 1,
    region: 'PCF',
    prefix: 'Parque Nacional Natural',
    name:   'Gorgona',
    desc:   'Gorgona es un pequeño paraíso de diversidad y un lugar privilegiado para la investigación científica. Uno de los rasgos más sorprendentes de Gorgona salta a la vista desde alta mar: una frondosa y exuberante selva tropical desciende directamente desde las pequeñas cumbres nubladas hasta el azul intenso de las aguas misteriosas del océano Pacífico. Pero las verdaderas sorpresas son las que se esconden bajo estas deslumbrantes superficies, tanto en tierra como en el mar. En Gorgona se encuentran especies propias de la selva húmeda tropical, formaciones coralinas, gran variedad de especies marinas, colonias de nidación de aves marinas y de migración de aves playeras y marinas. Sus aguas son frecuentadas por delfines, cachalotes y la ballena jorobada, entre otros.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-pacifico/parque-nacional-natural-gorgona/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Gorgona2.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Txemi_L%C3%B3pez.jpg',
    gview:  '',
    color:  'pacific',
    concesion: '',
  },{
    id: 2,
    region: 'PCF',
    prefix: 'Santuario de Flora y Fauna de',
    name:   'Malpelo',
    desc:   'Durante todo el año, en los alrededores de la isla pueden observarse, concentraciones de más de 300 tiburones martillo. Unesco la declaró como “Sitio de patrimonio mundial natural” en 2006.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-pacifico/santuario-de-flora-y-fauna-malpelo/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Malpelo1.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Sphyrna_lewini_Martillo_311204_Yves_Lef%C3%A8vre.jpg',
    gview:  '',
    color:  'pacific',
    concesion: '',
  },{
    id: 3,
    region: 'CRB',
    prefix: 'Parque Nacional',
    name:   'Tayrona',
    desc:   'Las estribaciones de la Sierra Nevada de Santa Marta, la montaña costera más alta del mundo, se hunden en el mar como los dedos de una mano gigantesca entre los que se forman bahías y ensenadas de belleza singular: Chengue, Gayraca, Cinto, Neguanje, Concha, Guachaquita, con sus playas de arenas blancas delimitadas por, manglares, matorrales o bosques, y bañadas todas por las aguas cristalinas del mar Caribe, hacen parte de los muchos atractivos que ofrece el Parque Nacional Natural Tayrona. Para quienes buscan la contemplación y el descanso, el Parque ofrece magníficas playas y el relajante panorama de un mar intensamente azul. Quienes se sienten atraídos por actividades más emocionantes podrán disfrutar de caminatas, careteo y buceo autónomo. El parque Tayrona tiene también vestigios arqueológicos de una antigua ciudad del pueblo Tayrona.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-caribe/parque-nacional-natural-tayrona/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/06/tayrona.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/06/Aviatur.jpg',
    gview:  'http://www.google.com/maps/views/u/0/view/streetview/colombia-highlights/tayrona-national-natural-park-1/',
    color:  'caribbean',
    concesion: '<p><strong>Bogotá</strong><br><strong>Tel:</strong> (57 1) 587 5181 / 587 5182<br><strong>Email:</strong> <a href="mailto:ecoturismo@aviatur.travel">ecoturismo@aviatur.travel</a><br><strong>Call Center (24 horas):</strong> (57 1) 382 1616 / 381 1000<br><strong>Celular:</strong> 317 439 5444<br><a href="http://www.aviaturecoturismo.com">www.aviaturecoturismo.com</a></p><p><strong>Medellín</strong><br><strong>Tel:</strong> (57 4) 576 5000 / 576 5020<br><strong>Email:</strong> <a href="mailto:parquesmedellin@aviatur.com.co">parquesmedellin@aviatur.com.co</a></p><p><strong>Cali</strong><br><strong>Tel:</strong> (57 2) 664 5050<br><strong>Email:</strong> <a href="mailto:reservasparquescali@aviatur.com.co">reservasparquescali@aviatur.com.co</a></p><p><strong>Cartagena</strong><br><strong>Tel:</strong> (57 5) 655 4800 IP: 50230<br>Email: <a href="mailto:piedad.colina@aviatur.com.co">piedad.colina@aviatur.com.co</a></p><p><strong>Santa Marta</strong><br>Calle 15 N° 3 -20<br><strong>Tel:</strong> (57 5) 421 3848 / 423 5655<br><strong>Email:</strong> <a href="mailto:J_polo@aviatur.com.co">J_polo@aviatur.com.co</a></p><p><strong>Atención al Usuario de Parques Nacionales Naturales<br></strong>Cra. 10 No. 20 – 30, Bogotá<br><strong>Tel:</strong> PBX (57 1) 353 2400 Ext. 138, 139<br><strong>Email:</strong> <a href="mailto:ecoturismo@parquesnacionales.gov.co">ecoturismo@parquesnacionales.gov.co</a><br><a href="http://www.parquesnacionales.gov.co">www.parquesnacionales.gov.co</a></p><p><strong>Dirección Territorial Caribe</strong><br>Calle 17 No. 4 – 06, Santa Marta<br>Tel:&nbsp;PBX (57 5) 423 0752 / 423 0704<br>Email: <a href="mailto:tayrona@parquesnacionales.gov.co">tayrona@parquesnacionales.gov.co</a></p>',
  },{
    id: 4,
    region: 'CRB',
    prefix: 'Parque',
    name:   'Sierra Nevada de Santa Marta',
    desc:   'La Sierra es la cuna de los Tayrona, una civilización indígena monumental que existió en el país. Aún viven allí descendientes de esa cultura con alrededor de 70.000 indígenas de las etnias Kogui, Arhuaco, Kankuamo y Wiwa. Es la formación montañosa litoral más elevada del mundo, con dos picos de 5.775 m de altitud; el pico Cristóbal Colón y el pico Simón Bolívar. Por su variedad de ecosistemas, pisos térmicos junto al mar, su belleza singular y su riqueza histórica y cultural constituye un paraje único para visitar y fue declarado Reserva de la Biosfera por la UNESCO en 1979.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-caribe/parque-nacional-natural-sierra-nevada-de-santa-marta-2/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Sierra_Nevada_.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/PNN_Sierra_Nevada_de_Santa_Marta_-_aerea_-_danilo.jpg',
    gview:  '',
    color:  'caribbean',
    concesion: '',
  },{
    id: 5,
    region: 'AND',
    prefix: 'Parque Nacional',
    name:   'Cocuy',
    desc:   'Vista desde el aire, esta Sierra Nevada es un rosario de perlas blanquísimas que refulge bajo el ardiente sol de los Andes. En el ramal oriental de los Andes colombianos, se encuentra la Sierra Nevada de Güicán, El Cocuy y Chita, más de veinticinco picos cubiertos de nieves perpetuas, en dos cadenas montañosas de aproximadamente 25 kilómetros de longitud por 4 de ancho. Buena parte de esta hermosa e imponente Sierra Nevada, que constituye la mayor masa glacial de Colombia, se puede recorrer a pie.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-andina/parque-nacional-natural-cocuy/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Cocuy-2015.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Cocuy_-_Paisaje_-_Fotograf%C3%ADa_David_Paez._Archivo_de_Parques_268.jpg',
    gview:  '',
    color:  'caribbean',
    concesion: '',
  },];

  return {
    all: function() {
      return parques;
    },
    get: function(parqueId) {
      for (var i = 0; i < parques.length; i++) {
        if (parques[i].id === parseInt(parqueId)) {
          return parques[i];
        }
      }
      return null;
    }
  };
});
