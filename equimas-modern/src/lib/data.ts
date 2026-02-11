export interface SystemDetail {
    id: string;
    name: string;
    category: 'vertical' | 'horizontal' | 'puc' | 'platina' | 'iluminado' | 'especial';
    description: string;
    longDescription: string;
    features: string[];
    materials: string;
    image: string;
    images?: string[];
}

export const systemsData: SystemDetail[] = [
    // Verticales
    {
        id: 'sistema-d',
        name: 'Sistema D',
        category: 'vertical',
        description: 'Cremalleras verticales de gran porte.',
        longDescription: 'Es un sistema que se sustenta en cremalleras o columnas verticales de aluminio extruido, de gran porte estructural. Se complementa con una importante variedad de accesorios en acero inoxidable, permitiendo una exhibición de alta resistencia y estética técnica.',
        features: ['Aluminio extruido de alto porte', 'Accesorios en acero inoxidable', 'Versatilidad de niveles', 'Compatible con percheros y estantes'],
        materials: 'Aluminio y Acero Inoxidable',
        image: '/images/systems/sistema-d/d1.jpg',
        images: [
            '/images/systems/sistema-d/d1.jpg',
            '/images/systems/sistema-d/d2.jpg',
            '/images/systems/sistema-d/D001.jpg',
            '/images/systems/sistema-d/D002.jpg',
            '/images/systems/sistema-d/D003.jpg',
            '/images/systems/sistema-d/D004.jpg',
            '/images/systems/sistema-d/D005.jpg',
            '/images/systems/sistema-d/D007E.jpg',
            '/images/systems/sistema-d/D009.jpg',
            '/images/systems/sistema-d/D013.jpg'
        ]
    },
    {
        id: 'sistema-f',
        name: 'Sistema F',
        category: 'vertical',
        description: 'Perfil vertical con varillas de acero.',
        longDescription: 'Con un aspecto refinado y diferente, este sistema vertical se basa en un perfil de aluminio extruido en forma de “U”, que se fija a la pared o placa a modo de columna, y en cuyo frente presenta insertas una secuencia de finas varillas de acero cromadas, horizontalmente y en paralelo. Sobre las mismas se aplican los distintos accesorios que acompañan este producto. En el fondo del perfil y por detrás de las varillas, una ranura en ambos laterales está dispuesta especialmente para aplicarle una faja plástica de color, para acompañar cromáticamente con los tonos o colores que caracterizan a la tienda, a la marca que se exhibe, o al logo del comercio según se desee.',
        features: ['Perfil en forma de U', 'Varillas de acero cromadas', 'Personalización cromática con fajas', 'Estética refinada'],
        materials: 'Aluminio y Acero Cromado',
        image: '/images/systems/sistema-f/1.jpg',
        images: [
            '/images/systems/sistema-f/1.jpg',
            '/images/systems/sistema-f/2.jpg',
            '/images/systems/sistema-f/F001.png',
            '/images/systems/sistema-f/F002.png',
            '/images/systems/sistema-f/F004.png',
            '/images/systems/sistema-f/F005.png',
            '/images/systems/sistema-f/F011.png',
            '/images/systems/sistema-f/varilla-barra.jpg'
        ]
    },
    {
        id: 'sistema-h',
        name: 'Sistema H',
        category: 'vertical',
        description: 'Rieles verticales minimalistas.',
        longDescription: 'El sistema de rieles verticales modelo H está pensado para una exhibición que requiera de terminaciones muy finas y puras. Los delicados accesorios que componen el mismo, parecen surgir desde el fondo de la placa, sustentados por una cremallera casi imperceptible por su frente muy delgado, a modo de líneas verticales que delimitan los módulos. El conjunto logra una presentación liviana y minimalista, en donde el producto exhibido es el único protagonista.',
        features: ['Cremallera casi imperceptible', 'Terminaciones finas y puras', 'Diseño minimalista', 'Presentación liviana'],
        materials: 'Aluminio y Metal',
        image: '/images/systems/sistema-h/1.jpg',
        images: [
            '/images/systems/sistema-h/1.jpg',
            '/images/systems/sistema-h/2.jpg',
            '/images/systems/sistema-h/3.jpg',
            '/images/systems/sistema-h/H001.png',
            '/images/systems/sistema-h/H002.png',
            '/images/systems/sistema-h/HA006.png',
            '/images/systems/sistema-h/HA010.png',
            '/images/systems/sistema-h/HA024.png'
        ]
    },
    {
        id: 'sistema-l',
        name: 'Sistema L',
        category: 'vertical',
        description: 'Perfil vertical metálico personalizable.',
        longDescription: 'Nuestro Perfil Vertical L y sus accesorios son fabricados en metal, lo que permite la personalización del color dependiendo la necesidad del cliente. El perfil de metal tiene 2600mm de altura y puede ser cortado a medida adaptándose a cualquier espacio de exhibición. Puede ser utilizado directo sobre pared, yeso o placa de MDF.',
        features: ['Fabricado en metal', 'Personalización de color', 'Altura ajustable (hasta 2600mm)', 'Instalación versátil'],
        materials: 'Metal pintado o cromado',
        image: '/images/systems/sistema-l/1.jpg',
        images: [
            '/images/systems/sistema-l/1.jpg',
            '/images/systems/sistema-l/2.jpg',
            '/images/systems/sistema-l/AD-1200.png',
            '/images/systems/sistema-l/L001-300.png',
            '/images/systems/sistema-l/L003.png',
            '/images/systems/sistema-l/L004.png',
            '/images/systems/sistema-l/L005.png',
            '/images/systems/sistema-l/L011.png'
        ]
    },
    {
        id: 'sistema-r',
        name: 'Sistema R',
        category: 'vertical',
        description: 'Columnas verticales de gran robustez.',
        longDescription: 'Es un sistema novedoso, de fácil armado y gran robustez. Se compone tubos con forma de "L" invertida, que se apoyan sobre piso y pared fijados mediante platinas previamente amuradas, las que se empipan en ambos extremos para total rigidez. Los tubos de 2" de diámetro, llevan por detrás, y contra la pared a la que se fijan, el calado propio de las cremalleras, lo que permite que tanto las barras horizontales para colgar perchas, brazos percheros y accesorios en general, aparezcan integrados a las columnas, siempre con la posibilidad de regulación a las alturas deseadas.',
        features: ['Tubos de 2 pulgadas de diámetro', 'Fijación a piso y pared', 'Gran robustez estructural', 'Accesorios integrados'],
        materials: 'Acero de alta resistencia',
        image: '/images/systems/sistema-r/r1.jpg',
        images: ['/images/systems/sistema-r/r1.jpg']
    },
    // Horizontales
    {
        id: 'sistema-e',
        name: 'Sistema E',
        category: 'horizontal',
        description: 'Perfil horizontal para paneles de MDF.',
        longDescription: 'Se trata de un perfil de aluminio extruido, que se inserta horizontalmente en paneles de MDF melamínico, previamente calados para recibirlos, y fijarlos a la placa por detrás. En este sistema se arman los paneles fijando dichos perfiles en las alturas requeridas de acuerdo al tipo de productos que se quiera exhibir. Los accesorios que lo complementan, tienen un atractivo diseño, y están fabricados en aluminio químicamente tratado, de muy fina textura y presentación. Es apropiado para la exhibición de diferentes productos, ya sea en el área de vestimenta, calzado y accesorios, como también para todo lo referente a electrónica, bazar, perfumería, etc. y todo aquello que requiera de un ordenamiento puro y lineal.',
        features: ['Aluminio extruido', 'Inserción en paneles MDF', 'Textura fina y presentación elegante', 'Versatilidad de productos'],
        materials: 'Aluminio tratado',
        image: '/images/systems/sistema-e/1.jpg',
        images: ['/images/systems/sistema-e/1.jpg', '/images/systems/sistema-e/2.jpg']
    },
    {
        id: 'sistema-p',
        name: 'Sistema P',
        category: 'horizontal',
        description: 'Protección para panel ranurado.',
        longDescription: 'Se trata de perfiles de aluminio para aplicar en panel ranurado (slat-wall), los que se insertan fácilmente en las ranuras del mismo. Ello permite lograr una prolija presentación, a la vez que actúan como protección al desgaste natural que se produce en los filos de la madera donde apoyan los distintos accesorios. Conjuntamente con este perfil, ofrecemos una gran variedad de accesorios, apropiados para distintos tipos de productos.',
        features: ['Para panel ranurado (slat-wall)', 'Protege filos de madera', 'Fácil inserción', 'Presentación prolija'],
        materials: 'Aluminio',
        image: '/images/systems/sistema-p/p1.jpg',
        images: ['/images/systems/sistema-p/p1.jpg']
    },
    {
        id: 'sistema-t',
        name: 'Sistema T',
        category: 'horizontal',
        description: 'Perfil horizontal de 10cm con ranuras.',
        longDescription: 'El sistema "T", lo compone un ancho perfil de 10 cm. con cuatro ranuras en paralelo cada uno, donde descansan los distintos accesorios que lo componen. Está fabricado en aluminio tratado, y se aplica horizontalmente, posibilitando el armado de las superficies convenientes para la exhibición deseada, ya que se pueden acoplar, entre sí formando un cuadro uniforme. Sumamente vistoso y delicado, permite exhibir aquellos elementos de pequeño porte, siendo ideal para bijou, relojería, marroquinería, etc. y todo aquello que requiera de una venta asistida.',
        features: ['Perfil de 10cm de ancho', 'Cuatro ranuras en paralelo', 'Acoplable para cuadros uniformes', 'Ideal para artículos pequeños'],
        materials: 'Aluminio tratado',
        image: '/images/systems/sistema-t/1.jpg',
        images: ['/images/systems/sistema-t/1.jpg', '/images/systems/sistema-t/2.jpg', '/images/systems/sistema-t/3.jpg']
    },
    {
        id: 'sistema-u',
        name: 'Sistema U',
        category: 'horizontal',
        description: 'Perfil horizontal de vista delgada.',
        longDescription: 'El perfil de aluminio de 1200mm de largo, con vista de 45mm, logra una clara delineación horizontal de las paredes del local. Se puede colocar tanto sobre la pared como sobre placas de MDF. Sus accesorios de planchuela de aluminio hacen posible una exhibición simple y elegante. Adecuado para la exhibición de moda y calzado.',
        features: ['Largo de 1200mm', 'Vista de 45mm', 'Delineación horizontal clara', 'Accesorios de planchuela'],
        materials: 'Aluminio',
        image: '/images/systems/sistema-u/1.jpg',
        images: [
            '/images/systems/sistema-u/1.jpg',
            '/images/systems/sistema-u/2.jpg',
            '/images/systems/sistema-u/U001.jpg',
            '/images/systems/sistema-u/U003.jpg',
            '/images/systems/sistema-u/U004.jpg',
            '/images/systems/sistema-u/U007.jpg',
            '/images/systems/sistema-u/U013.jpg'
        ]
    },
    {
        id: 'sistema-xh',
        name: 'Sistema XH',
        category: 'horizontal',
        description: 'Exhibición lineal reforzada.',
        longDescription: 'Versión reforzada de la línea horizontal para productos de mayor peso o volumen, manteniendo la limpieza visual característica.',
        features: ['Reforzado horizontalmente', 'Limpieza visual', 'Carga media-alta'],
        materials: 'Aluminio extruido reforzado',
        image: '/images/systems/sistema-xh/XH001.jpg',
        images: ['/images/systems/sistema-xh/XH001.jpg']
    },
    // PUC
    {
        id: 'sistema-g',
        name: 'Sistema G',
        category: 'puc',
        description: 'Aplique redondo de aluminio.',
        longDescription: 'Como elemento principal cuenta con un aplique circular de aluminio con un diámetro de 22mm, que va inserto en placas de MDF. El diseño simple y elegante del aplique y de los accesorios, hacen que este sistema sea adecuado para incorporarse a espacios en los que el minimalismo sea una de sus características. Ideal para exhibir artículos de moda, calzado y complementos.',
        features: ['Aplique circular de 22mm', 'Diseño minimalista', 'Elegancia y simplicidad', 'Versatilidad de uso'],
        materials: 'Aluminio',
        image: '/images/systems/sistema-g/g1.jpg',
        images: [
            '/images/systems/sistema-g/g1.jpg',
            '/images/systems/sistema-g/g2.jpg',
            '/images/systems/sistema-g/G001.png',
            '/images/systems/sistema-g/G002.png',
            '/images/systems/sistema-g/G004.png',
            '/images/systems/sistema-g/G007.png',
            '/images/systems/sistema-g/G015.png'
        ]
    },
    {
        id: 'sistema-j',
        name: 'Sistema J',
        category: 'puc',
        description: 'Aplique soporte redondo de zamac.',
        longDescription: 'Este sistema se caracteriza por un aplique con pequeño frente redondo, el que se inserta sobre las placas de MDF, y se ajusta por detrás mediante tuerca. Son fabricados en inyección de zamac y su terminación es de color gris acero. Dicho aplique permite recibir una amplia variedad de accesorios, intercambiables entre sí, y es frecuentemente utilizado en artículos tales como calzado, textil, bijou, electrónica, etc. Las variedad de accesorios que lo complementan, son de acero con terminación satinada.',
        features: ['Inyección de zamac', 'Ajuste mediante tuerca posterior', 'Color gris acero', 'Accesorios de acero satinado'],
        materials: 'Zamac y Acero',
        image: '/images/systems/sistema-j/1.jpg',
        images: [
            '/images/systems/sistema-j/1.jpg',
            '/images/systems/sistema-j/2.jpg',
            '/images/systems/sistema-j/J001.png',
            '/images/systems/sistema-j/J004-S.png',
            '/images/systems/sistema-j/J010-S.png',
            '/images/systems/sistema-j/JA008-S.png',
            '/images/systems/sistema-j/JA014-S.png'
        ]
    },
    {
        id: 'sistema-s',
        name: 'Sistema S',
        category: 'puc',
        description: 'Aplique soporte cuadrado sofisticado.',
        longDescription: 'El Sistema S cuenta con un aplique cuadrado de 25*25mm, fabricado en ZAMAC, se utiliza inserto en placas de MDF. Su fino diseño y reducidas dimensiones, lo hace adecuado para resaltar determinados sectores donde se dispongan artículos pequeños. Es un sistema ideal para exhibir lencería, complementos, calzado, etc.',
        features: ['Aplique cuadrado de 25x25mm', 'Fabricado en ZAMAC', 'Ideal para artículos pequeños', 'Diseño fino y compacto'],
        materials: 'Zamac',
        image: '/images/systems/sistema-s/s1.jpg',
        images: [
            '/images/systems/sistema-s/s1.jpg',
            '/images/systems/sistema-s/S001.jpg',
            '/images/systems/sistema-s/S002.jpg',
            '/images/systems/sistema-s/S003.jpg',
            '/images/systems/sistema-s/S006.jpg',
            '/images/systems/sistema-s/S010.jpg',
            '/images/systems/sistema-s/S011.jpg',
            '/images/systems/sistema-s/SD011.jpg'
        ]
    },
    // Platina & Especiales
    {
        id: 'sistema-w',
        name: 'Sistema W',
        category: 'platina',
        description: 'Accesorios independientes de aluminio.',
        longDescription: 'Es una línea de accesorios independientes, fabricados en aluminio tratado, y está orientado principalmente a exhibición de vestimenta. Los mismos se pueden amurar directamente a pared, a placa, madera, yeso, etc. Los distintos elementos están fijados a una platina con cuatro agujeros, y lista para atornillar al respaldo. Este sistema disminuye sensiblemente los costos y tiempos de armado de una tienda o sector, manteniendo siempre una prolija y estética presentación.',
        features: ['Accesorios independientes', 'Fijación mediante platina', 'Reducción de costos de armado', 'Estética independiente'],
        materials: 'Aluminio tratado',
        image: '/images/systems/sistema-w/w1.jpg',
        images: ['/images/systems/sistema-w/w1.jpg']
    },
    {
        id: 'sistema-iluminado',
        name: 'Sistemas Iluminados',
        category: 'iluminado',
        description: 'Sistemas con electrificación integrada.',
        longDescription: 'La iluminación es un elemento fundamental en una tienda, capaz de causar sensaciones positivas, destacar la mercadería y atraer al comprador. Una mejor visualización del producto expuesto traerá como consecuencia un aumento de las ventas. Se trata de un sistema de iluminación de bajo consumo, cuyos componentes están integrados dentro de los propios rieles y accesorios, evitando molestos cableados, permitiendo una fácil y rápida conexión. El sistema ofrece facilidad, rapidez y seguridad para adaptar la exposición de productos sin necesidad de contar con un electricista.',
        features: ['Iluminación LED integrada', 'Sin cableados visibles', 'Bajo consumo energético', 'Fácil reposicionamiento'],
        materials: 'Aluminio electrificado',
        image: '/images/systems/iluminado/1.jpg',
        images: ['/images/systems/iluminado/1.jpg', '/images/systems/iluminado/2.jpg']
    },
    {
        id: 'perchas',
        name: 'Línea de Perchas',
        category: 'especial',
        description: 'Perchas de alta calidad en madera y PVC.',
        longDescription: 'Complementamos la exhibición con perchas en madera natural laqueada o PVC reforzado. Diseñadas para cuidar la caída de la prenda. Disponibles en varios tamaños y con puntas redondeadas para una mejor conservación de las prendas.',
        features: ['Madera laqueada', 'PVC reforzado', 'Varios tamaños', 'Puntas redondeadas'],
        materials: 'Madera, Metal y PVC',
        image: '/images/systems/perchas/1.jpg',
        images: ['/images/systems/perchas/1.jpg', '/images/systems/perchas/2.jpg', '/images/systems/perchas/3.jpg']
    }
];
