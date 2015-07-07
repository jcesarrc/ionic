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
    name:   'Parque Nacional Utria',
    desc:   'El Parque Nacional Natural Utría ubicado en la provincia biogeografía del Chocó, en la costa norte del pacífico colombiano, se encuentra bajo la jurisdicción de los municipios de Bahía Solano, Nuquí, Alto Baudó y Bojayá, departamento del Chocó. Cerca del 80% de su territorio se encuentra traslapado con tres resguardos de la etnia Embera, y es también territorio ancestral de comunidades afro descendientes que dependen de los bienes y servicios provistos por el área protegida.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-pacifico/parque-nacional-natural-utria/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/08/Utrr%C3%ADa.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/08/s032.jpg',
    gview:  '',
  }, {
    id: 1,
    region: 'PCF',
    name:   'Parque Nacional Natural Gorgona',
    desc:   'Gorgona es un pequeño paraíso de diversidad y un lugar privilegiado para la investigación científica. Uno de los rasgos más sorprendentes de Gorgona salta a la vista desde alta mar: una frondosa y exuberante selva tropical desciende directamente desde las pequeñas cumbres nubladas hasta el azul intenso de las aguas misteriosas del océano Pacífico. Pero las verdaderas sorpresas son las que se esconden bajo estas deslumbrantes superficies, tanto en tierra como en el mar. En Gorgona se encuentran especies propias de la selva húmeda tropical, formaciones coralinas, gran variedad de especies marinas, colonias de nidación de aves marinas y de migración de aves playeras y marinas. Sus aguas son frecuentadas por delfines, cachalotes y la ballena jorobada, entre otros.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-pacifico/parque-nacional-natural-gorgona/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Gorgona2.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/gorgona-11-fto-patrick-del-castillo.jpg',
    gview:  '',
  },{
    id: 2,
    region: 'PCF',
    name:   'Santuario de Flora y Fauna de Malpelo',
    desc:   'Durante todo el año, en los alrededores de la isla pueden observarse, concentraciones de más de 300 tiburones martillo. Unesco la declaró como “Sitio de patrimonio mundial natural” en 2006.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-pacifico/santuario-de-flora-y-fauna-malpelo/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Malpelo1.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Sphyrna_lewini_Martillo_311204_Yves_Lef%C3%A8vre.jpg',
    gview:  '',
  },{
    id: 3,
    region: 'CRB',
    name:   'Parque Nacional Tayrona',
    desc:   'Las estribaciones de la Sierra Nevada de Santa Marta, la montaña costera más alta del mundo, se hunden en el mar como los dedos de una mano gigantesca entre los que se forman bahías y ensenadas de belleza singular: Chengue, Gayraca, Cinto, Neguanje, Concha, Guachaquita, con sus playas de arenas blancas delimitadas por, manglares, matorrales o bosques, y bañadas todas por las aguas cristalinas del mar Caribe, hacen parte de los muchos atractivos que ofrece el Parque Nacional Natural Tayrona. Para quienes buscan la contemplación y el descanso, el Parque ofrece magníficas playas y el relajante panorama de un mar intensamente azul. Quienes se sienten atraídos por actividades más emocionantes podrán disfrutar de caminatas, careteo y buceo autónomo. El parque Tayrona tiene también vestigios arqueológicos de una antigua ciudad del pueblo Tayrona.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-caribe/parque-nacional-natural-tayrona/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/06/tayrona.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/06/Aviatur.jpg',
    gview:  'https://www.google.com/maps/views/u/0/view/streetview/colombia-highlights/tayrona-national-natural-park-1/',
  },{
    id: 4,
    region: 'CRB',
    name:   'Parque Sierra Nevada de Santa Marta',
    desc:   'La Sierra es la cuna de los Tayrona, una civilización indígena monumental que existió en el país. Aún viven allí descendientes de esa cultura con alrededor de 70.000 indígenas de las etnias Kogui, Arhuaco, Kankuamo y Wiwa. Es la formación montañosa litoral más elevada del mundo, con dos picos de 5.775 m de altitud; el pico Cristóbal Colón y el pico Simón Bolívar. Por su variedad de ecosistemas, pisos térmicos junto al mar, su belleza singular y su riqueza histórica y cultural constituye un paraje único para visitar y fue declarado Reserva de la Biosfera por la UNESCO en 1979.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-caribe/parque-nacional-natural-sierra-nevada-de-santa-marta-2/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Sierra_Nevada_.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/PNN_Sierra_Nevada_de_Santa_Marta_-_aerea_-_danilo.jpg',
    gview:  '',
  },{
    id: 5,
    region: 'AND',
    name:   'Parque Nacional Cocuy',
    desc:   'Vista desde el aire, esta Sierra Nevada es un rosario de perlas blanquísimas que refulge bajo el ardiente sol de los Andes. En el ramal oriental de los Andes colombianos, se encuentra la Sierra Nevada de Güicán, El Cocuy y Chita, más de veinticinco picos cubiertos de nieves perpetuas, en dos cadenas montañosas de aproximadamente 25 kilómetros de longitud por 4 de ancho. Buena parte de esta hermosa e imponente Sierra Nevada, que constituye la mayor masa glacial de Colombia, se puede recorrer a pie.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-andina/parque-nacional-natural-cocuy/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Cocuy-2015.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Cocuy_-_Paisaje_-_Fotograf%C3%ADa_David_Paez._Archivo_de_Parques_268.jpg',
    gview:  '',
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
