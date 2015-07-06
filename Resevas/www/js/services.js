angular.module('starter.services', [])

.factory('Parques', function() {
  // Might use a resource here that returns a JSON array

  var regiones = [{
    id: 1,
    name: 'Region Pacifico',
    desc: 'Playa',
  }, {
    id: 2,
    name: 'Region Andina',
    desc: 'Montana',
  }, {
    id: 3,
    name: 'Region Orinoquia',
    desc: 'Selva',
  }, {
    id: 4,
    name: 'Region Amazonia',
    desc: 'Selva',
  },];

  var parques = [{
    id: 0,
    region: 1,
    name:   'Parque Nacional Utria',
    desc:   'El Parque Nacional Natural Utría ubicado en la provincia biogeografía del Chocó, en la costa norte del pacífico colombiano, se encuentra bajo la jurisdicción de los municipios de Bahía Solano, Nuquí, Alto Baudó y Bojayá, departamento del Chocó. Cerca del 80% de su territorio se encuentra traslapado con tres resguardos de la etnia Embera, y es también territorio ancestral de comunidades afro descendientes que dependen de los bienes y servicios provistos por el área protegida.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-pacifico/parque-nacional-natural-utria/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/08/Utrr%C3%ADa.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/08/s032.jpg',
    gview:  '',
  }, {
    id: 1,
    region: 1,
    name:   'Parque Nacional Natural Gorgona',
    desc:   'Gorgona es un pequeño paraíso de diversidad y un lugar privilegiado para la investigación científica. Uno de los rasgos más sorprendentes de Gorgona salta a la vista desde alta mar: una frondosa y exuberante selva tropical desciende directamente desde las pequeñas cumbres nubladas hasta el azul intenso de las aguas misteriosas del océano Pacífico. Pero las verdaderas sorpresas son las que se esconden bajo estas deslumbrantes superficies, tanto en tierra como en el mar. En Gorgona se encuentran especies propias de la selva húmeda tropical, formaciones coralinas, gran variedad de especies marinas, colonias de nidación de aves marinas y de migración de aves playeras y marinas. Sus aguas son frecuentadas por delfines, cachalotes y la ballena jorobada, entre otros.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-pacifico/parque-nacional-natural-gorgona/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Gorgona2.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/gorgona-11-fto-patrick-del-castillo.jpg',
    gview:  '',
  },{
    id: 2,
    region: 1,
    name:   'Santuario de Flora y Fauna de Malpelo',
    desc:   'Durante todo el año, en los alrededores de la isla pueden observarse, concentraciones de más de 300 tiburones martillo. Unesco la declaró como “Sitio de patrimonio mundial natural” en 2006.',
    url:    'http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-pacifico/parque-nacional-natural-gorgona/',
    ficha:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/Gorgona2.jpg',
    image:  'http://www.parquesnacionales.gov.co/portal/wp-content/uploads/2013/07/gorgona-11-fto-patrick-del-castillo.jpg',
    gview:  '',
  },];

  return {
    all: function() {
      return parques;
    },
    remove: function(parque) {
      parques.splice(parques.indexOf(parque), 1);
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
