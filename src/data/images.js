// Exercise image mappings - maps exercise names to their step images
// Images are served from /lunes/..., /martes/... etc. via Vite's public folder symlinks
// Note: images live in project root day folders (lunes/, martes/, etc.)

export const exerciseImages = {
  // ── LUNES ──────────────────────────────────────────────────────
  "Estiramiento Axial con Liga": {
    steps: [
      { img: "/lunes/estiramiento_axial/step1.png", label: "Posición inicial — Agarra la liga sobre la puerta" },
      { img: "/lunes/estiramiento_axial/step2.png", label: "Cuélgate — Deja caer la cadera, relaja la columna" },
    ],
  },
  "Postura de la Cobra": {
    steps: [
      { img: "/lunes/postura_cobra/step1.png", label: "Posición inicial — Boca abajo, palmas al pecho" },
      { img: "/lunes/postura_cobra/step2.png", label: "Subida — Extiende brazos, pecho al techo, cadera al piso" },
    ],
  },
  "Pases de Pecho Explosivos con Balón": {
    steps: [
      { img: "/lunes/pases_pecho/step1.png", label: "Preparación — Balón en el pecho, postura atlética" },
      { img: "/lunes/pases_pecho/step2.png", label: "Lanzamiento — Explota con TODA la fuerza hacia la pared" },
    ],
  },
  "Press de Piso con Mancuernas (Floor Press)": {
    steps: [
      { img: "/lunes/floor_press/step1.png", label: "Posición baja — Tríceps en el piso, pausa 1 seg" },
      { img: "/lunes/floor_press/step2.png", label: "Arriba — Bloquea los codos, explota hacia el techo" },
    ],
  },
  "Jalón Vertical con Liga (Espalda en \"V\")": {
    steps: [
      { img: "/lunes/jalon_liga/step1.png", label: "Inicio — Arrodillado, agarra la liga en lo alto" },
      { img: "/lunes/jalon_liga/step2.png", label: "Jalón — Lleva a clavículas, junta los omóplatos" },
    ],
  },
  "Remo con Mancuerna a un brazo (Grosor de espalda)": {
    steps: [
      { img: "/lunes/remo_mancuerna/step1.png", label: "Inicio — Espalda paralela al piso, brazo colgando" },
      { img: "/lunes/remo_mancuerna/step2.png", label: "Jalón — Codo hacia la cadera, roza las costillas" },
    ],
  },
  "Flexiones de Pecho al Fallo (El remate de ácido láctico)": {
    steps: [
      { img: "/lunes/flexiones_fallo/step1.png", label: "Plancha alta — Cuerpo rígido, brazos extendidos" },
      { img: "/lunes/flexiones_fallo/step2.png", label: "Baja al fallo — Pecho casi toca el tapete, repite hasta el colapso" },
    ],
  },
  "Plancha Abdominal de Alta Tensión": {
    steps: [
      { img: "/lunes/plancha/step1.png", label: "Posición — Antebrazos + pies, línea recta perfecta" },
      { img: "/lunes/plancha/step2.png", label: "Tensión MÁXIMA — Aprieta glúteos + piernas + abdomen al 100%" },
    ],
  },

  // ── MARTES ─────────────────────────────────────────────────────
  "Rotaciones Articulares": {
    steps: [
      { img: "/martes/rotaciones_articulares/step1.png", label: "Tobillos — Dibuja círculos amplios con la punta del pie" },
      { img: "/martes/rotaciones_articulares/step2.png", label: "Cadera — Rotaciones de hula-hula, fluidas y amplias" },
    ],
  },
  "Sentadilla Profunda de Apertura": {
    steps: [
      { img: "/martes/sentadilla_apertura/step1.png", label: "Setup — Pies más anchos que hombros, talones al piso" },
      { img: "/martes/sentadilla_apertura/step2.png", label: "Fondo — Cadera al piso, codos empujan rodillas afuera" },
    ],
  },
  "Saltos de Patinador (Skater Jumps)": {
    steps: [
      { img: "/martes/skater_jumps/step1.png", label: "Carga — Equilibrio en una pierna, flexión lateral" },
      { img: "/martes/skater_jumps/step2.png", label: "¡Salta! — Aterriza en el pie contrario, amortiguando con la rodilla" },
    ],
  },
  "Saltos Verticales de Rebote (Potencia Balística)": {
    steps: [
      { img: "/martes/saltos_verticales/step1.png", label: "Carga — Squat rápido, balón al pecho, energía en las piernas" },
      { img: "/martes/saltos_verticales/step2.png", label: "¡EXPLOSIÓN! — Salta al techo, brazos al máximo, a por el rebote" },
    ],
  },
  "Sentadilla Copa (Goblet Squat)": {
    steps: [
      { img: "/martes/goblet_squat/step1.png", label: "Inicio — Mancuerna vertical al pecho como una copa, pies a la anchura" },
      { img: "/martes/goblet_squat/step2.png", label: "Fondo — Codos rozan rodillas por dentro, espalda recta como tabla" },
    ],
  },
  "Sentadilla Búlgara (El destructor de piernas)": {
    steps: [
      { img: "/martes/sentadilla_bulgara/step1.png", label: "Setup — Pie trasero sobre la silla, paso largo adelante, torso erguido" },
      { img: "/martes/sentadilla_bulgara/step2.png", label: "Baja — Rodilla trasera a centímetros del piso, empuja con el talón" },
    ],
  },
  "Elevación de Gemelos a un pie": {
    steps: [
      { img: "/martes/elevacion_gemelos/step1.png", label: "Inicio — Un pie, talón caído, mano en pared, mancuerna al costado" },
      { img: "/martes/elevacion_gemelos/step2.png", label: "Punta máxima — Gemelo contraído al 100%, sostén 1 segundo" },
    ],
  },

  // ── MIÉRCOLES ──────────────────────────────────────────────────
  "Estiramiento Axial con Liga (Nivel Máximo)": {
    steps: [
      { img: "/miercoles/estiramiento_axial_max/step1.png", label: "Cuelga — Agarra la liga, cadera atrás y abajo, columna se alarga" },
      { img: "/miercoles/estiramiento_axial_max/step2.png", label: "Balanceo suave — Cadera de lado a lado, crea micro-espacios vertebrales" },
    ],
  },
  "Postura del Niño (Child's Pose)": {
    steps: [
      { img: "/miercoles/childs_pose/step1.png", label: "Inicio — Arrodillado, sentado sobre los talones" },
      { img: "/miercoles/childs_pose/step2.png", label: "Extensión — Frente al tapete, brazos al frente, lumbar al máximo" },
    ],
  },
  "Caminata de Oxigenación o Manejo Suave de Balón": {
    steps: [
      { img: "/miercoles/caminata_oxigenacion/step1.png", label: "Caminata relajada — Ritmo que te permite hablar, sin esfuerzo" },
      { img: "/miercoles/caminata_oxigenacion/step2.png", label: "Dribbling suave — CERO saltos, CERO pesas, recuperación activa" },
    ],
  },
  "Enfoque de Alta Productividad": {
    steps: [
      { img: "/miercoles/enfoque_productividad/step1.png", label: "BDNF al máximo — Córtex prefrontal listo, abre código o proyectos" },
      { img: "/miercoles/enfoque_productividad/step2.png", label: "Flow state — Resuelve problemas complejos, tu mejor sesión del día" },
    ],
  },

  // ── JUEVES ─────────────────────────────────────────────────────
  "Press Militar de Pie (Hombro Frontal y Fuerza Central)": {
    steps: [
      { img: "/jueves/press_militar/step1.png", label: "Inicio — Mancuernas a hombros, core de roca, pies firmes" },
      { img: "/jueves/press_militar/step2.png", label: "Bloqueo — Brazos extendidos arriba, baja en 3 seg controlado" },
    ],
  },
  "Elevaciones Laterales (Hombro Lateral - El creador de amplitud)": {
    steps: [
      { img: "/jueves/elevaciones_laterales/step1.png", label: "Inicio — Mancuernas al costado, torso levemente inclinado" },
      { img: "/jueves/elevaciones_laterales/step2.png", label: "Sube — Alas abiertas a altura de hombros, giro de muñeca" },
    ],
  },
  "Vuelos Posteriores / Pájaros (Hombro Posterior - El corrector de postura)": {
    steps: [
      { img: "/jueves/vuelos_posteriores/step1.png", label: "Inicio — Torso paralelo al piso, mancuernas colgando" },
      { img: "/jueves/vuelos_posteriores/step2.png", label: "Vuelo — Brazos hacia los lados, aprieta hombro posterior" },
    ],
  },
  "Extensión de Tríceps Copa (El tamaño del brazo)": {
    steps: [
      { img: "/jueves/triceps_copa/step1.png", label: "Inicio — Mancuerna detrás de la nuca, codos al techo" },
      { img: "/jueves/triceps_copa/step2.png", label: "Extiende — Bloquea los codos arriba, tríceps al máximo" },
    ],
  },
  "Curl de Bíceps Alternado Estricto (El pico del brazo)": {
    steps: [
      { img: "/jueves/curl_biceps/step1.png", label: "Inicio — Codos PEGADOS a las costillas, no se mueven" },
      { img: "/jueves/curl_biceps/step2.png", label: "Sube — Gira la muñeca, aprieta bíceps 1 seg, baja en 3 seg" },
    ],
  },
  "Curl de Antebrazo Invertido (Fuerza de Agarre para el Balón)": {
    steps: [
      { img: "/jueves/curl_antebrazo/step1.png", label: "Sentado — Antebrazos en muslos, manos colgando palmas abajo" },
      { img: "/jueves/curl_antebrazo/step2.png", label: "Levanta el dorso — Contrae el antebrazo, hasta el fallo" },
    ],
  },

  // ── VIERNES ────────────────────────────────────────────────────
  "Sentadilla Profunda y Rotaciones": {
    steps: [
      { img: "/viernes/sentadilla_rotaciones/step1.png", label: "Sentadilla profunda — Talones pegados, 30 seg, cadera abierta" },
      { img: "/viernes/sentadilla_rotaciones/step2.png", label: "Rotación — Círculos amplios de cadera, lubrica la pelvis" },
    ],
  },
  "Peso Muerto Rumano Unilateral (El constructor de velocidad)": {
    steps: [
      { img: "/viernes/peso_muerto_rumano/step1.png", label: "Inicio — Un pie, micro-flexión, mancuerna colgando" },
      { img: "/viernes/peso_muerto_rumano/step2.png", label: "Bisagra — Cadera atrás, espalda recta, pierna sube de contrapeso" },
    ],
  },
  "Curl Femoral con Liga (Aislamiento total)": {
    steps: [
      { img: "/viernes/curl_femoral/step1.png", label: "Boca abajo — Liga en tobillos, cadera al piso" },
      { img: "/viernes/curl_femoral/step2.png", label: "Flexiona — Talones a glúteos, aprieta 1 seg, baja en 3 seg" },
    ],
  },
  "Russian Twists (Giros Rusos Balísticos para el choque)": {
    steps: [
      { img: "/viernes/russian_twists/step1.png", label: "Equilibrio — Glúteos en el piso, pies levantados, balón al frente" },
      { img: "/viernes/russian_twists/step2.png", label: "Giro violento — Toca el piso de un lado, dispara al otro" },
    ],
  },
  "Elevación de Piernas Estricta (Abdomen Inferior)": {
    steps: [
      { img: "/viernes/elevacion_piernas/step1.png", label: "Inicio — Boca arriba, manos bajo glúteos, piernas rectas" },
      { img: "/viernes/elevacion_piernas/step2.png", label: "Baja lento — Talones a 1 cm del piso sin tocar, vuelve arriba" },
    ],
  },
  "Plancha Lateral (El blindaje final)": {
    steps: [
      { img: "/viernes/plancha_lateral/step1.png", label: "Apoyo — Antebrazo y pie lateral, cadera elevada" },
      { img: "/viernes/plancha_lateral/step2.png", label: "Tensión — Línea diagonal, aprieta oblicuo 45 seg" },
    ],
  },

  // ── SÁBADO ─────────────────────────────────────────────────────
  "Jumping Jacks (Polichinelas) y Movilidad": {
    steps: [
      { img: "/sabado/jumping_jacks/step1.png", label: "Polichinelas — 30 seg para elevar la temperatura corporal" },
      { img: "/sabado/jumping_jacks/step2.png", label: "Movilidad — Rotaciones de brazos + trote estático" },
    ],
  },
  "Pases de Pecho contra la pared (Máxima Velocidad)": {
    steps: [
      { img: "/sabado/pases_pecho/step1.png", label: "Posición — Frente a la pared, balón al pecho" },
      { img: "/sabado/pases_pecho/step2.png", label: "Frecuencia MÁXIMA — 15 pases en el menor tiempo posible" },
    ],
  },
  "Flexiones Pliométricas (Vuelo Espacial)": {
    steps: [
      { img: "/sabado/flexiones_plio/step1.png", label: "Carga — Baja en 2 seg, energía elástica en el pecho" },
      { img: "/sabado/flexiones_plio/step2.png", label: "DESPEGUE — Explota hasta que las manos vuelen del suelo" },
    ],
  },
  "El Sprint Agónico (6 a 8 Rondas)": {
    steps: [
      { img: "/sabado/sprint/step1.png", label: "Sprint 20 seg — Resistencia media-alta, TODAS las fuerzas" },
      { img: "/sabado/sprint/step2.png", label: "Recuperación 40 seg — Resistencia cero, jala aire profundo" },
    ],
  },
  "Estiramiento Axial y Relajación": {
    steps: [
      { img: null, label: "Bájate de la bici — Piernas temblorosas, ve a la liga" },
      { img: null, label: "Cuélgate — 5 respiraciones profundas, válvula de escape" },
    ],
  },

  // ── DOMINGO ────────────────────────────────────────────────────
  "El Protocolo de Sueño Profundo (8 a 9 horas)": {
    steps: [
      { img: null, label: "8-9 horas ininterrumpidas — HGH al máximo en sueño profundo" },
      { img: null, label: "A oscuras totales — La melatonina es tu mejor aliada" },
    ],
  },
  "Mantenimiento de la Ventana (5:00 PM)": {
    steps: [
      { img: null, label: "Proteínas a las 5 PM — Mantén estable la insulina" },
      { img: null, label: "Hidratación masiva — Discos vertebrales como esponjas" },
    ],
  },
  "Estiramiento Axial con Liga (Previo a dormir)": {
    steps: [
      { img: null, label: "Antes de dormir — 3 series de 60 seg en la liga" },
      { img: null, label: "Columna abierta — Duermes con las vértebras separadas" },
    ],
  },
  "Overclocking y Desarrollo de Proyectos": {
    steps: [
      { img: null, label: "Modo ahorro físico + BDNF máximo = velocidad mental top" },
      { img: null, label: "Zion, inglés, Mozart Audio, circuitos — Destruye problemas" },
    ],
  },
};
