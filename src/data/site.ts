export const parish = {
	name: 'Paróquia São Pedro',
	address: 'Av. Cristóvão Colombo, 1629 — Porto Alegre, RS',
	phone: '(51) 3209-6009',
	phoneHref: 'tel:+555132096009',
	whatsappHref: 'https://wa.me/555132096009',
	email: 'saopedro@arquipoa.org.br',
	instagram: 'https://www.instagram.com/saopedroportoalegre/',
};

export const massSchedule = [
	{ day: 'Segunda a sexta', times: '12h e 18h' },
	{ day: 'Sábado', times: '16h e 18h' },
	{ day: 'Domingo', times: '9h, 11h e 19h' },
];

export const officeHours = [
	{ day: 'Terça a sexta', times: '9h–11h45 e 14h–17h45' },
];

export const sacraments = [
	{ title: 'Batismo', href: '/sacramentos/batismo/', description: 'Orientações para famílias que desejam iniciar a preparação para o Batismo.' },
	{ title: 'Eucaristia', href: '/sacramentos/eucaristia/', description: 'Informações sobre a preparação e a vida eucarística na comunidade.' },
	{ title: 'Crisma', href: '/sacramentos/crisma/', description: 'Conheça o caminho de preparação para receber o sacramento da Crisma.' },
	{ title: 'Matrimônio', href: '/sacramentos/matrimonio/', description: 'Saiba como iniciar o processo de preparação para o Matrimônio.' },
	{ title: 'Ordem', href: '/sacramentos/ordem/', description: 'Conheça o sacramento da Ordem e o serviço à comunidade.' },
	{ title: 'Confissão', href: '/sacramentos/confissao/', description: 'Saiba mais sobre o sacramento da Reconciliação.' },
	{ title: 'Unção dos Enfermos', href: '/sacramentos/uncao/', description: 'Conheça o sacramento de conforto e cuidado aos enfermos.' },
];

export const pastorals = [
	{ title: 'Pastoral da Liturgia', href: '/pastorais/liturgia/', description: 'Equipes que preparam e animam as celebrações da comunidade.' },
	{ title: 'PASCOM', href: '/pastorais/pascom/', description: 'Pastoral da Comunicação da Paróquia São Pedro.' },
	{ title: 'Coral São Pedro', href: '/pastorais/coral/', description: 'Música sacra e serviço às celebrações paroquiais.' },
	{ title: 'Pastoral do Dízimo', href: '/pastorais/dizimo/', description: 'Partilha e corresponsabilidade na missão da comunidade.' },
	{ title: 'Rosário Vivo', href: '/pastorais/rosario-vivo/', description: 'Um convite à oração e à devoção mariana na comunidade.' },
];

export const movements = [
	{ title: 'ONDA', href: '/movimentos/onda/', description: 'Uma caminhada de fé e amizade para pré-adolescentes de 10 a 14 anos.' },
	{ title: 'Emaús', href: '/movimentos/emaus/', description: 'Formação cristã e vida em comunidade nos grupos Renova, Kerigma e Betânia.' },
	{ title: 'Curso de Liderança Juvenil (CLJ)', href: '/pastorais/clj/', description: 'Encontros de fé, formação e ação para jovens.' },
	{ title: 'Movimento de Casais Jovens (MCJ)', href: '/pastorais/mcj/', description: 'Espiritualidade, partilha e apoio à vida matrimonial e familiar.' },
];

export const communities = [...pastorals, ...movements];

export const navigation = [
	{ label: 'Início', href: '/' },
	{ label: 'A paróquia', href: '/paroquia/' },
	{ label: 'Sacramentos', href: '/sacramentos/' },
	{ label: 'Pastorais', href: '/pastorais/' },
	{ label: 'Movimentos', href: '/movimentos/' },
	{ label: 'Horários', href: '/horarios/' },
	{ label: 'Contato', href: '/contato/' },
];
