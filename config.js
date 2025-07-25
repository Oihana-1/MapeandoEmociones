var config = {
    style: 'mapbox://styles/alumn/cmcnr6sxj00e701qz68me5pqw',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYWx1bW4iLCJhIjoiY21ja3htaG82MDNpaTJpc2Q3ZDk0ZW9maCJ9.PGDPZKctVQcshnGj7SpyUw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#C9B037'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Mapeando Emociones',
    subtitle: 'Storymaps: una ruta por la memoria y la identidad vasca.',
    byline: 'Oihana Parra Garzo',
    footer: 'Source: Redacción original de la autora. Recopilación de información e imagenes procedentes de sitios web oficiales de los parques participantes: https://bbkkarpinfauna.eus/ ; https://www.bizkaiaparkabentura.com/ ; https://www.izenaduba.com/ ; https://www.basondo.com/es/index.html ; https://mendexapark.com/ ; https://www.monteigueldo.es/ ; y tres fotografía de medios de cominicación: https://turismo.euskadi.eus/webtur00-content/es/contenidos/k_ocio/0000218796_k3_rec_turismo/es_218796/218796-ficha2.html ; https://turismovasco.com/bizkaia/que-ver-bizkaia/basondo/ ; https://lh3.googleusercontent.com/gps-cs-s/AC9h4noa1VLirEHCD0AOrJF2t1MayPCHcXO0cUue23MU-vB_Xm3JXZQPRjpfwNIXP9CcQMUzZ-G0LitBm6PQr0YDlxNgsnoD6TArOYHZbg8MDNiKW8QdJNTk8bQu5BHBo9oi-92tkQfFOQ=s1360-w1360-h1020-rw. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
       {
            id: 'slug-style-id',
            alignment: 'center',
            hidden: false,
            description: '<stronge> ¿Alguna vez has viajado por la ruta de las emociones para conocer más de cerca una cultura? <br> ¿No? ¿Y si te dijera que sí es posible? <br> Te invito a viajar conmigo a través de estas palabras, donde descubriremos la esencia del País Vasco, más allá de lo superficial. <br> Cada rincón oculto está lleno de magia, tradición y vida salvaje, en los cuales nos invitan a sentir, reflexionar y recordar. <br> Aquí no se trata solo de geolocalizar puntos, sino de mapear emociones; las que nos conectan con nuestra identidad, naturaleza y quienes nos rodean. <br> ¡Acompáñame en este viaje!',
            location: {
                center: [-4.20503, 40.92106],
                zoom: 1.58,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'first-identifier',
            alignment: 'center',
            hidden: false,
            description: '<stronge> La primera estación de nuestro viaje es un lugar que evoca un aroma de montaña y hierba fresca, con un toque a vida salvaje. <br> A medida que nos adentramos por sus senderos, la fauna salvaje comienza a contarnos historias muy duras de supervivencia frente al tráfico ilegal, el cautiverio y el maltrato. <br> Pero cuando los encontramos en sus escondites, se percibe que es su lugar seguro, donde están cuidados con todo el amor que necesitan para recuperarse y vivir tranquilos. <br> Cuando terminamos la visita, nos inunda el cariño a la vida, el respeto a los animales y las fuerzas de seguir luchando por su bienestar.',
            location: {
                center: [ -2.50233, 43.30697 ],
                zoom: 8.50,
                pitch: 44.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Bienvenidos a BBK Karpin Fauna.',
            image: 'https://bbkkarpinfauna.eus/wp-content/uploads/2022/04/lehoinabarra3.jpg',
            description: '<stronge> Es un centro de acogida de fauna silvestre, que ofrece un hogar y protección a más de 55 especies diferentes.',
            location: {
                center: [ -3.3452,43.2477 ],
                zoom: 16.16,
                pitch: 77.98,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'center',
            hidden: false,
            description: '<stronge> Tras abrazar la fragilidad de lo salvaje, avanzamos a la siguiente estación, donde el clima nos deja de importar… <br> Nos hallamos bajo techo, uno que huele a calcetines en movimiento, los cuales corren, saltan, y se deslizan por los túneles o por los aires. <br> Nuestro parque es un lugar único, y el más grande del norte de España, que vibra con la energía de todas las edades y el aire se vuelve juguetón. <br> Por ello, conocer gente de la zona no es solo sencillo, sino inevitable, porque aquí basta con jugar para sentirse parte de algo.',
            location: {
                center: [ -2.50233, 43.30697 ],
                zoom: 8.50,
                pitch: 44.50,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Llueve, truene o brille el sol, Bizkaia Park Abentura siempre abre sus puertas.',
            image: 'https://turismo.euskadi.eus/contenidos/k_ocio/0000218796_k3_rec_turismo/es_218796/images/FP_GOAXENBIZKAIAPARKABENTURA.jpg',
            description: '<stronge> 3000 M² de diversión donde los toboganes no cesan, las risas se multiplican y la vida vibra bajo el techo. ¡Adelante!',
            location: {
                center: [-3.10093,43.21636],
                zoom: 15.70,
                pitch: 85.00,
                bearing: 31.55,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'center',
            hidden: false,
            description: '<stronge> De tanto jugar, el cuerpo se rinde al cansancio, y los parpados se vuelven pesados, tanto que sentimos que pesan como rocas. <br> Nos dejamos mecer por un mar tranquilo y sereno, cuya sal nos acaricia la piel y las olas nos susurran antiguas historias que solo entienden quienes saben escuchar. <br> Dejándonos llevar hacia…',
            location: {
                center: [ -2.50233, 43.30697 ],
                zoom: 8.50,
                pitch: 44.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'center',
            hidden: false,
            description: '<stronge> El paraíso de los sueños, navegamos a través del misterio, donde surcamos un bosque con criaturas que, si te las encuentras, te harán deleitarse con su música y su alegría, y te ofrecerán una cata de quesos y txakoli. <br> Pero... No todo es diversión, ya que, si nos topamos con ciertas criaturas, nos lo harán pasar muy mal. Por ello, nos refugiaremos en un antiguo caserío que lleva 515 años en pie, y protege de todo lo malo, permitiéndonos únicamente disfrutar de un viaje interior hacia lo más hondo de la cultura vasca.',
            location: {
                center: [ -2.50233, 43.30697 ],
                zoom: 8.50,
                pitch: 44.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Navegamos por Izenaduba Basoa, donde las aguas que mecen nos susurran mitos y leyendas ancestrales.',
            image: 'https://www.izenaduba.com/izenaduba-basoa/images/personajes/izenaduba-basoa-lamiak.webp',
            description: '<stronge> Desde el siglo XVI, este caserío ha sido testigo de leyendas, tradiciones y sueños.',
            location: {
                center: [-2.85252,43.35526],
                zoom: 14.00,
                pitch: 0,
                bearing: -154.35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-chapter',
            alignment: 'center',
            hidden: false,
            description: '<stronge> Un rayo de luz se cuela en lo más profundo de nuestros sueños y nos hace despertar para reanudar nuestro viaje. <br> Con los primeros rayos de sol recorreremos los senderos de la vida salvaje y hogar permanente para las almas desaparecidas y los corazones rotos, que por diferentes vivencias no pueden volver a recorrer libremente el territorio. <br> Pasearemos entre la historia de sus vidas, conociendo su pasado y su presente, pero el futuro se lo escribiremos nosotros, cuidándoles y aprendiendo a darles cada vez un lugar mejor con el respeto que merecen.',
            location: {
                center: [ -2.50233, 43.30697 ],
                zoom: 8.50,
                pitch: 44.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Pararada imprescindible para aprender amar, bienvenidos a Basondo.',
            image: 'https://turismovasco.com/wp-content/uploads/2025/05/loros-refugio-de-la-naturaleza-en-Urdaibai-basondo.jpg',
            description: '<stronge> 60.000 m2 donde la vida resurge, es un refugio para fauna silvestre amenazada.',
            location: {
                center: [-2.6386,43.3449],
                zoom: 16.08,
                pitch: 61.08,
                bearing: 139.97
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tenth-chapter',
            alignment: 'centrer',
            hidden: false,
            description: '<stronge> Con el corazón lleno y respetuoso, cambiamos de destino a uno en el que podamos gritar de adrenalina y volar como los pájaros. <br> Aquí se requiere gritar, volar y desmelenarse. Si no es apto para ti, vuela a la próxima parada. Pero si decides quedarte conmigo, vamos a jugar en la naturaleza, nuestro auténtico campo de juego. <br> Por un instante, nos convertiremos en pájaros, monos, Tarzanes o Jane, o en cualquier ser que nuestra imaginación nos permita ser. <br> Y por encima de todo, hay que superar cada paso que se da, cada reto, cada circuito. Porque como todo logró en esta vida, merece celebrarse. Todo lo que se supera viene acompañado de un torbellino de emociones, y todo ello dejará una huella imborrable.',
            location: {
                center: [ -2.50233, 43.30697 ],
                zoom: 8.50,
                pitch: 44.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'eleventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Desmelénate, atrévete, súbete y vuela.',
            image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noa1VLirEHCD0AOrJF2t1MayPCHcXO0cUue23MU-vB_Xm3JXZQPRjpfwNIXP9CcQMUzZ-G0LitBm6PQr0YDlxNgsnoD6TArOYHZbg8MDNiKW8QdJNTk8bQu5BHBo9oi-92tkQfFOQ=s1360-w1360-h1020-rw',
            description: '<stronge> En Mendexa Abentura Park no hay limites, solo redes que atrapan el alma, puentes donde desprendernos de miedo y tirolinas que rasgan el cielo.',
            location: {
                center: [-2.4976,43.3497],
                zoom: 15.41,
                pitch: 54.59,
                bearing: -8.47
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'twelfth-chapter',
            alignment: 'center',
            hidden: false,
            description: '<stronge> Si has volado a esta parada, no creas que la adrenalina se ha esfumado, porque aquí se te cortará la respiración solo con ver el horizonte o sentir que estás en una máquina del tiempo. <br> Este lugar tiene un corazón que late con fuerza desde 1912, y se alimenta de crear risas, emociones y recuerdos que resisten al paso del tiempo. <br> Su respiración es pura inspiración, ya que baña de color todo lo que toca, y con su exhalación salada nos disipa las nubes para contemplar sus impresionantes vistas al mar.',
            location: {
                center: [-2.0099,43.3213],
                zoom: 14.00,
                pitch: 50.79,
                bearing: 28.08
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
         {
            id: 'thirteenth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Un parque con alma, historia y vistas que roban el aliento. Estamos ante el Parque de Atracciones del Monte Igueldo',
            image: 'https://www.monteigueldo.es/upload/secciones-publicas/2016/09/07/9402_grande.jpg',
            description: '<stronge> Desde 1912, conserva sus atracciones, su arquitectura y su legendaria panorámica. <br> Un parque que guarda intacta la emoción de otra época, viva entre las nubes y el mar.',
            location: {
                center: [-2.0099,43.3213],
                zoom: 14.00,
                pitch: 50.79,
                bearing: 28.08
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fourteenth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Más alla del mapa, quedan las emociones.',
            description: '<stronge> Aquí se apagan nuestras fuerzas, pero no por un cansancio cualquiera, sino por habernos entregado en cuerpo y alma a esta aventura. <br> Yacemos, no solo en quietud física, sino con el corazón abigarrado de haber descubierto lo más profundo de la esencia vasca. Hemos explorado los túneles del tiempo que aún subsisten, respirando historias y cultura, navegado por su mar y caminado por sus senderos. <br> En este instante, en que la energía se convierte en emoción, el corazón se impregna de huellas imborrables. <br> El cuerpo se rinde, pero el alma… el alma sigue latiendo con fuerza. <br> Gracias por acompañarme en este viaje tan auténtico como tú, que te has quedado conmigo hasta el final. En cada paso dado, algo de nosotros se quedó, y el entorno el recuerdo nos regaló. <br> Espero haberte acariciado el alma, como a mí me la han tocado estos lugares, y que hayas podido descubrir que se puede mapear emociones, que no son solo puntos en el mapa.<br> Ahora sí, toca descansar. <br> ¡Hasta pronto!',
            location: {
                center: [-4.20503, 40.92106],
                zoom: 1.58,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
