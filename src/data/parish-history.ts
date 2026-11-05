import capela from '../assets/images/capela-primitiva.jpg';
import igreja1922 from '../assets/images/igreja-1922.jpeg';
import igreja1930 from '../assets/images/igreja-1930.jpeg';
import igrejaAntes1946 from '../assets/images/igreja-antes-1946.png';
import igreja1966 from '../assets/images/igreja-1966.jpeg';
import interior from '../assets/images/interior.jpg';
import centenario from '../assets/images/centenario.png';

// Fonte principal: pesquisa histórica do pedido de tombamento de 2023.
// As páginas e ressalvas estão registradas em docs/parish-history-sources.md.
export const parishHistory = [
  {
    id: 'origens', years: '1887–1888', label: 'A doação e a primeira capela',
    title: 'Uma pequena capela no arraial da Floresta',
    paragraphs: [
      'Em 14 de novembro de 1887, Eduardo de Azevedo Souza Filho e sua esposa, Luciana de Azevedo, doaram um terreno na então rua da Floresta, em frente à rua Conde de Porto Alegre, para a construção de uma capela dedicada a São Pedro. A licença eclesiástica para a obra foi concedida em 21 de novembro daquele ano.',
      'A comunidade se organizou na Devoção de São Pedro, cujo compromisso foi aprovado pelo bispo em 21 de abril de 1888. Ainda naquele ano, em 22 de outubro, a pequena igreja recebeu a bênção e acolheu sua primeira missa. A capela se tornaria um ponto de referência para o bairro em formação.',
    ],
    image: capela, alt: 'A primeira capela de São Pedro, com um anexo de madeira aos fundos.',
    caption: 'A capela primitiva em abril de 1917, após as ampliações daquele ano.',
  },
  {
    id: 'festas-curato', years: '1894–1912', label: 'Festejos e o Curato de São Manoel',
    title: 'A fé que reúne e faz crescer o bairro',
    paragraphs: [
      'Os jornais de 1894 já registravam a festa de São Pedro, com celebrações religiosas e diversões populares diante da capela. No ano seguinte, a programação anunciava novenas, missa solene, procissão pelas ruas do bairro, música e leilões de ofertas. A festa do padroeiro ajudava a aproximar os moradores e a sustentar a comunidade.',
      'Em 20 de abril de 1912, foi criado o Curato de São Manoel, ao qual a capela de São Pedro passou a pertencer. O padre Antônio Pereira dos Santos, primeiro vigário do curato, registrou naquele ano a celebração de missas dominicais na São Pedro, com pregação, confissões e comunhões.',
    ],
  },
  {
    id: 'matriz', years: '1917', label: 'São Pedro torna-se sede do curato',
    title: 'Uma nova sede para a comunidade',
    paragraphs: [
      'Por portaria de 27 de janeiro de 1917, Dom João Becker transferiu a sede do Curato de São Manoel para a capela de São Pedro. O padre Emílio Lottermann tomou posse como cura em 28 de janeiro. Começava uma longa caminhada de colaboração entre o sacerdote e os fiéis.',
      'Uma comissão de obras, presidida por Henrique Pünder, providenciou a ampliação provisória da capela. O Apostolado da Oração de Senhoras já aparece nos registros de junho, e a Conferência de São Vicente de Paulo foi instalada em setembro. Em agosto, diante da crescente participação dos fiéis, a comissão escolheu o projeto neogótico de José Hruby para um templo maior, com duas torres.',
    ],
  },
  {
    id: 'nova-igreja', years: '1918–1920', label: 'Construção do templo e criação da paróquia',
    title: 'Da capelinha à nova igreja matriz',
    paragraphs: [
      'O projeto recebeu aprovação definitiva em 10 de janeiro de 1918, e as escavações dos alicerces começaram em 28 de janeiro. A capela original foi demolida para dar lugar ao novo templo. Em outubro daquele ano, a nova capela-mor já era utilizada para as celebrações, separada da futura nave por uma parede de madeira.',
      'Em 28 de junho de 1919, Dom João Becker elevou o Curato de São Pedro à categoria de paróquia. Na Páscoa seguinte, em 4 de abril de 1920, a vasta matriz foi inaugurada provisoriamente: faltavam ainda teto, reboco, portas, janelas e torres, mas a comunidade já dispunha de espaço para acolher os fiéis.',
    ],
    image: igreja1922, alt: 'Igreja de São Pedro ainda sem reboco externo, com as torres incompletas.',
    caption: 'A igreja por volta de 1922, ainda sem reboco externo e com as torres inconclusas.',
  },
  {
    id: 'obras-educacao', years: '1922–1938', label: 'Obras, educação e formação do Coral',
    title: 'Uma comunidade que constrói e educa',
    paragraphs: [
      'Após uma interrupção por falta de recursos, as obras foram retomadas em março de 1922. A Casa João Vicente Friedrichs executou trabalhos no teto, no reboco interno e nas janelas. Em 1923, foram feitos o assoalho e os mosaicos dos corredores, e Fernando Schlatter decorou a capela-mor.',
      'A educação também ganhou espaço: em 1º de março de 1927, os Irmãos Maristas iniciaram as aulas da Escola São Pedro em dependências da paróquia. Na vida musical, o coro organizado pelo padre Leopoldo Hoff em 1919 deu origem ao coral de vozes mistas fundado por João Scharnberg em 7 de agosto de 1931.',
      'A campanha dos Legionários, lançada em 1929, permitiu avançar no reboco, na pintura externa e na elevação das torres. Os trabalhos tiveram a direção de Franz Rhoden e a participação da firma de Vitorino Zani nos ornamentos góticos. O portal foi concluído em 1938. A construção seguiu sendo aperfeiçoada nas décadas seguintes.',
    ],
    image: igreja1930, alt: 'Vista da Igreja São Pedro em 1930, a partir da rua Conde de Porto Alegre.',
    caption: 'A matriz em 1930, vista da rua Conde de Porto Alegre, com uma das torres já concluída e pintada.',
  },
  {
    id: 'arte', years: 'Década de 1940', label: 'Pinturas, órgão e melhorias internas',
    title: 'Arte sacra, música e devoção',
    paragraphs: [
      'Na década de 1940, a ornamentação interna ganhou novos capítulos. O Livro de Tombo registra em 1946 o projeto de Paulo Curci e a campanha dos Legionários da Pintura, que reuniu contribuições da comunidade para decorar a igreja. As pinturas dos irmãos Curci integraram à arquitetura cenas da vida cristã, entre elas o martírio de São Pedro e a conversão de São Paulo.',
      'No Natal de 1946, foi inaugurado o órgão adquirido da firma Bohn Irmãos. Também foram melhoradas as janelas das torres, a sacristia, a casa canônica e o calçamento diante do templo. Em 1948, a preparação para o Congresso Eucarístico Nacional motivou novas obras na capela-mor e no salão paroquial.',
    ],
    image: igrejaAntes1946, alt: 'Fotografia histórica da fachada da Igreja São Pedro, antes das melhorias no calçamento frontal.',
    caption: 'Fotografia sem data, atribuída pela pesquisa ao período anterior às reformas de 1946.',
  },
  {
    id: 'torres', years: '1953–1957', label: 'Novos sinos e acabamento das torres',
    title: 'Os sinos e as torres da São Pedro',
    paragraphs: [
      'Quatro sinos encomendados à fábrica Bochumer Verein, na Alemanha, chegaram à paróquia em novembro de 1953 e foram abençoados no dia 22 daquele mês. Dedicados a São Pedro, São Paulo, Nossa Senhora e São José, vieram acompanhados de motores para seu acionamento.',
      'Em 1955, as torres foram adaptadas para receber o maquinário, e novos vitrais enriqueceram a igreja. Em 1956, o piso foi substituído e prosseguiram as obras no alto das torres, com a colocação das cruzes e da cobertura de cobre. Essa etapa foi concluída em janeiro de 1957, distinguindo-se da elevação das torres realizada décadas antes.',
    ],
  },
  {
    id: 'renovacao', years: '1964–1968', label: 'Novos párocos e renovação comunitária',
    title: 'Uma nova etapa na caminhada paroquial',
    paragraphs: [
      'Em 4 de janeiro de 1964, após 47 anos à frente da comunidade, Monsenhor Emílio Lottermann deixou o cargo de pároco e permaneceu como cooperador. O padre Emílio Weizemann assumiu a paróquia e nela permaneceu até o final de 1966. Naquele ano, Lottermann publicou suas Reminiscências da Paróquia de São Pedro.',
      'Monsenhor Atílio Fontana assumiu em 1º de janeiro de 1967. Nesse período, a comunidade acolheu mudanças litúrgicas decorrentes do Concílio Vaticano II. As obras do salão paroquial, iniciadas em 1966, foram concluídas em junho de 1968.',
    ],
    image: igreja1966, alt: 'Fachada da Igreja São Pedro em 1966, vista entre árvores.',
    caption: 'A Igreja São Pedro em 1966, em fotografia publicada nas Reminiscências de Monsenhor Lottermann.',
  },
  {
    id: 'movimentos', years: '1974–1978', label: 'CLJ, MCJ e ONDA',
    title: 'Jovens e famílias renovam a comunidade',
    paragraphs: [
      'A nova casa paroquial foi inaugurada em 2 de maio de 1974. Naquele mesmo ano, o padre Zeno Hastenteufel, a irmã Jocélia Scherer e jovens ligados ao Emaús organizaram o retiro de crismandos que deu origem ao Curso de Liderança Juvenil, o CLJ.',
      'Em 1975, onze casais da São Pedro iniciaram o Movimento de Casais Jovens, o MCJ, com um retiro na Vila Betânia. Em 1978, por iniciativa de Monsenhor Atílio Fontana, surgiu o ONDA, para acompanhar crianças após a Primeira Comunhão. Essas iniciativas ampliaram os caminhos de formação e participação na vida paroquial.',
    ],
  },
  {
    id: 'restauros', years: '1983–2010', label: 'Conservação e restaurações',
    title: 'Cuidar do patrimônio recebido',
    paragraphs: [
      'O órgão voltou a ser inaugurado após uma reforma em 1983. Em 1º de dezembro de 1984, o padre José Inácio Steffen assumiu como pároco, sucedendo a Monsenhor Fontana. No ano seguinte, os restos mortais de Monsenhor Lottermann foram trasladados para a igreja.',
      'As campanhas comunitárias continuaram a sustentar a conservação do templo: houve obras no telhado e nas pinturas em 1985 e 1986, seguidas da restauração de imagens no final da década. Uma nova campanha de restauro interno, acompanhada pelo irmão Renato Koch, culminou na reinauguração de 9 de junho de 1996.',
      'Entre 2006 e 2007, foram realizados reparos na estrutura e nas pinturas externas, além de serviços internos. Uma campanha iniciada em 2008 apoiou a restauração dos vitrais, recuperados em 2009. Em 2010, novas obras recuperaram rachaduras no forro da igreja, novamente com donativos da comunidade.',
    ],
    image: interior, alt: 'Vista atual do interior da Igreja São Pedro, com altares, pinturas e vitrais.',
    caption: 'O interior da igreja em registro atual: um patrimônio preservado por gerações da comunidade.',
  },
  {
    id: 'centenario', years: '2019', label: 'O centenário da paróquia',
    title: 'Cem anos de vida paroquial',
    paragraphs: [
      'Em 2019, a comunidade celebrou o centenário da criação da paróquia com novena e procissão pelo bairro Floresta. Um grande banner instalado em uma das torres marcou a data: 1919–2019.',
      'Para celebrar a ocasião, a comunidade participou de um concurso para escolher um hino comemorativo. A composição vencedora foi criada por Clodoaldo Ramos Junior, compositor e músico conhecido na Arquidiocese de Porto Alegre.',
    ],
    image: centenario, alt: 'Banner do centenário da Paróquia São Pedro instalado em uma das torres.',
    caption: 'O banner comemorativo do centenário da Paróquia São Pedro, celebrado em 2019.',
  },
  {
    id: 'presente', years: '2023', label: 'Memória, preservação e continuidade',
    title: 'Uma história que continua',
    paragraphs: [
      'Em 2023, o pedido de tombamento da igreja reuniu uma pesquisa histórica e iconográfica baseada nos Livros de Tombo, em jornais, fotografias e documentos do acervo paroquial. Esse trabalho ajuda a compreender as diferentes etapas da construção e a participação dos moradores na formação da comunidade.',
      'Em 21 de dezembro de 2023, o padre Lívio Masuero assumiu como pároco, sucedendo ao padre Luciano da Costa Massullo. A história continua nas celebrações, na formação cristã e no serviço das pastorais e movimentos, com o cuidado com a igreja e com as pessoas que fazem parte dela.',
    ],
  },
];
