import type { ImageMetadata } from 'astro';
import betaniaPhoto from '../assets/images/emaus/betania-grupo.png';
import betaniaLogo from '../assets/images/emaus/betania-logo.png';

interface EmausGroup {
  id: string;
  name: string;
  description: string[];
  photo?: { src: ImageMetadata; alt: string };
  logo?: { src: ImageMetadata; alt: string };
  coordinators?: { role: string; names: string[] }[];
}

// Add each group's description and local photo when provided by the parish.
export const emausGroups: EmausGroup[] = [
  { id: 'renova', name: 'Renova', description: [] },
  { id: 'kerigma', name: 'Kerigma', description: [] },
  {
    id: 'betania',
    name: 'Betânia',
    description: [
      'O Grupo Betânia é um grupo do Emaús que nasceu da continuidade da caminhada das jovens após o curso, como um espaço de amizade, fé, acolhimento e propósito, onde cada uma pudesse encontrar outras pessoas que compartilhassem o mesmo desejo de seguir Jesus Cristo. Ao longo dessa caminhada, em nossas conversas e encontros, surgiu com muita força a percepção de que precisávamos de um lugar onde pudéssemos nos sentir pertencentes, onde fosse possível construir amizades verdadeiras, compartilhar a fé e caminhar juntas. Muitas de nós carregávamos a sensação de não nos encaixarmos no mundo, de sermos diferentes e de estarmos procurando pessoas com os mesmos valores e o mesmo propósito de vida. Foi nesse contexto que encontramos no nome Betânia uma expressão muito bonita daquilo que desejamos viver.',
      'Betânia era um lugar muito especial para Jesus. Era a cidade onde Ele encontrava seus amigos Lázaro, Marta e Maria, e onde viveu momentos de profunda amizade, intimidade, acolhimento, oração, alegria e confraternização. Jesus voltava a Betânia, e ali encontrava um lugar onde podia estar com aqueles que amava. Foi também em Betânia que aconteceu um dos sinais mais marcantes de sua vida pública: a ressurreição de Lázaro. Ao longo das Escrituras, Betânia aparece como um lugar de encontro e de manifestação do amor de Cristo. Por isso, escolhemos esse nome porque queremos que o nosso grupo também seja uma espécie de Betânia: um lugar para voltar, para encontrar amigas, para rezar, conversar, celebrar, partilhar a vida e, acima de tudo, encontrar Jesus. Um lugar onde cada uma possa chegar como é e sentir que tem um espaço, que pertence e que não precisa caminhar sozinha.',
      'O Grupo Betânia foi fundado no dia 13 de maio de 2026, data em que celebramos Nossa Senhora de Fátima, que se tornou nossa padroeira e uma presença muito especial em nossa caminhada. Mesmo sendo um grupo ainda jovem, com poucos meses de existência, já vivemos momentos muito significativos de formação e crescimento espiritual. Percorremos as aparições de Nossa Senhora, aprofundamos o conhecimento sobre os dogmas marianos e refletimos sobre temas relacionados às emoções, à fé e à nossa vida interior, buscando compreender cada vez mais como Deus se manifesta em nossa história e como podemos viver uma fé verdadeira e concreta no nosso dia a dia.',
      'Maria também ocupa um lugar especial no caminho do Betânia. Nela encontramos o exemplo de uma mulher que soube dizer “sim” a Deus, confiar mesmo sem compreender tudo e permanecer fiel ao longo de toda a caminhada de Jesus. Por isso, o Santo Rosário faz parte da nossa espiritualidade e do nosso propósito. Queremos aprender com Maria a contemplar Jesus, levando para a oração nossas alegrias, nossas dores, nossas dúvidas, nossas famílias, nossos sonhos e tudo aquilo que somos.',
      'O Betânia é, assim, um espaço de continuidade da experiência vivida no Emaús, onde queremos fortalecer os vínculos construídos, cultivar amizades verdadeiras e crescer juntas na fé. Somos mulheres diferentes, com histórias, sonhos, desafios e personalidades diferentes, mas unidas por um mesmo desejo: conhecer, amar e seguir Jesus Cristo. Queremos ser umas para as outras presença, apoio, oração e companhia, lembrando sempre que a caminhada da fé se torna mais bonita quando é feita em comunidade. Assim como Betânia foi para Jesus um lugar de amizade, acolhimento, oração e alegria, desejamos que o nosso grupo também seja esse lugar: um lugar para pertencer, para rezar, para celebrar, para partilhar a vida e para encontrar Jesus. Este é o Betânia: um lugar de amizade, fé e propósito, onde seguimos juntas, com Maria, ao encontro de Cristo.',
    ],
    photo: { src: betaniaPhoto, alt: 'Integrantes do Grupo Betânia reunidas em um encontro, usando camisetas do grupo.' },
    logo: { src: betaniaLogo, alt: 'Betânia — Graça e Amor' },
    coordinators: [
      { role: 'Coordenação adulta', names: ['Joseane Bertoldi', 'Caroline De Bem'] },
      { role: 'Coordenação jovem', names: ['Gabriela Franco'] },
    ],
  },
];
