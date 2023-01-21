const app = () => {
    return {
        isInscricoesAbertas: true,

        atualSecao: "",
        isOpenMenuMobile: false,
        isOpenMenuMais: false,

        grupos: [
            {
                "titulo": "Democracia Líquida",
                "link": "breve.html",
                "slug": "democracia-liquida"
            },
            {
                "titulo": "Smart Cities",
                "link": "breve.html",
                "slug": "smart-cities"
            },
            {
                "titulo": "Transparência algorítmica",
                "link": "https://www.instagram.com/transparencia.dd/",
                "slug": "transparencia-algoritmica"
            },
            {
                "titulo": "Propriedade Intelectual",
                "link": "https://www.instagram.com/propriedadeintelectual.dd/",
                "slug": "propriedade-intelectual"
            },
            {
                "titulo": "Tributec",
                "link": "https://www.instagram.com/tributec.dd/",
                "slug": "tributec"
            },
            {
                "titulo": "Proteção de Dados e Privacidade",
                "link": "breve.html",
                "slug": "protecao-de-dados-e-privacidade"
            }
        ],

        colaboradores: [
            {
                "nome": "Amália Camara",
                "biografia": "Cofundadora da Liga Pernambucana de Direito Digital, Professora da UPE, Doutora em Direito e Ciência Política. Coordenadora de pós-Graduação na áera de Direito Digital da CERS.",
                "redes": {
                    "facebook": "https://www.facebook.com/arrudacamara",
                    "instagram": "https://www.instagram.com/amaliacamara/",
                    "linkedin": "https://www.linkedin.com/in/am%C3%A1lia-camara-4a100a140/?originalSubdomain=nl"
                },
                "avatar": "/public/assets/avatars/membro-1.webp"
            },
            {
                "nome": "Paloma Saldanha",
                "biografia": "Doutora em Direito pela UNICAP.  Professora da Universidade Católica de Pernambuco. Coordenadora da Pós-Gradução em Direito Digital na UNICAP.",
                "redes": {
                    "instagram": "https://www.instagram.com/palomasaldanha__/",
                    "linkedin": "https://www.linkedin.com/in/paloma-mendes-saldanha-b52b73205/"
                },
                "avatar": "/public/assets/avatars/membro-2.webp"
            },
            {
                "nome": "Alexandre Pimentel",
                "biografia": "Professor da UFPE e UNICAP. Desembargador Substituto do TJPE. Coordenador de Proteção de Dados da Ouvidoria Geral e dos cursos internacionais da Escola Judicial do TJPE.",
                "redes": {
                    "instagram": "https://www.instagram.com/alexandre.freirepimentel/"
                },
                "avatar": "/public/assets/avatars/membro-3.webp"
            },
            {
                "nome": "Anna Priscylla",
                "biografia": "Doutora em Direito e Professora  de Direito Tributário do Centro Universitário Maurício de Nassau. Coordenadora do Grupo TRIBUTEC de Pesquisa em Tributação e Tecnologia.",
                "redes": {
                    "facebook": "https://www.facebook.com/anna.priscyllalimaprado/",
                    "instagram": "https://www.instagram.com/profa.annapriscylla/?hl=pt-br",
                    "linkedin": "https://br.linkedin.com/in/anna-priscylla-lima-prado-2039a5168/"
                },
                "avatar": "/public/assets/avatars/membro-4.webp"
            },
            {
                "nome": "Walter Rodrigues",
                "biografia": "Cofundador da Liga de Direito Digital, Professor de Direito Digitale Mestrando no Centro de Informática da UFPE. Encarregado de Dados.",
                "redes": {
                    "facebook": "https://www.facebook.com/pag42/",
                    "instagram": "https://www.instagram.com/walter.adv/",
                    "linkedin": "https://www.linkedin.com/in/walter-de-macedo-rodrigues-bb39241b4/"
                },
                "avatar": "/public/assets/avatars/membro-5.webp"
            },
            {
                "nome": "Renata Oliveira",
                "biografia": "Sócia-fundadora e Advogada do Oliveira, Ventura & Beltrão Advogados. Mestre em Propriedade Intelectual pela UFPE.",
                "redes": {
                    "facebook": "https://www.facebook.com/oliveiraeventura.adv/?eid=ARCuRNWg2QSFuwnd2ypBKSNrGhSw2uXsTAu2LLaNpKtINWRC2s0FpBFyuI4NAw5n0xBzTqfhayPvisJJ/",
                    "instagram": "https://www.instagram.com/renataoliveira.adv/?hl=pt-br",
                    "linkedin": "https://www.linkedin.com/in/renataoliveiraadv/"
                },
                "avatar": "/public/assets/avatars/membro-6.webp"
            },
            {
                "nome": "Gabriel Lins",
                "biografia": "Mestre em Neuroengenharia pelo Instituto Santos Dumont. Pesquisador no Grupo de Estudos de Proteção de Dados e Privacidade.",
                "redes": {
                    "facebook": "https://www.facebook.com/GabrielHLins/",
                    "instagram": "https://www.instagram.com/gabrielh.lins/?hl=pt-br",
                    "linkedin": "https://www.linkedin.com/in/gabriel-lins-1b0913141/?originalSubdomain=br"
                },
                "avatar": "/public/assets/avatars/membro-7.webp"
            },
            {
                "nome": "Rosalina Freitas",
                "biografia": "Doutora em Direito Processual Civil, Doutoranda no CIn-UFPE, Assessora no Tribunal de Justiça de Pernambuco.",
                "redes": {
                    "facebook": "https://web.facebook.com/profile.php?id=100007570785070&_rdc=1&_rdr",
                    "instagram": "https://www.instagram.com/rosalina.freitas/",
                    "linkedin": "https://www.linkedin.com/in/rosalina-freitas-95b49b207/?trk=public_profile_browsemap&originalSubdomain=br"
                },
                "avatar": "/public/assets/avatars/membro-8.webp"
            },
        ],

        cronograma: [
            {
                "titulo": "Início das Inscrições",
                "data": "05/12/2022 - 08:00"
            },
            {
                "titulo": "Término 1ª Chamada",
                "data": "09/01/2023 - 23:59"
            },
            {
                "titulo": "Chamada dos Aprovados",
                "data": "16/01/2023 - 23:59"
            },
            {
                "titulo": "Primeira Reunião",
                "data": "22/01/2023 - 14:00"
            },
            {
                "titulo": "Início de Fluxo Contínuo",
                "data": "16/01/2023 - 08:00"
            },
            {
                "titulo": "Término do Fluxo Contínuo",
                "data": "30/05/2022 - 23:59"
            }
        ],

        scrollSpy() {
            const ancoras = document.querySelectorAll('.ancora');

            window.onscroll = () => {
                let headerHeight = document.querySelector('header').offsetHeight;
                const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
                for (let s in ancoras)
                    if (ancoras.hasOwnProperty(s) && ancoras[s].offsetTop <= (scrollPos + headerHeight)) {
                        this.atualSecao = ancoras[s].id || "";
                    }
            }
        },

        init() {
            this.scrollSpy();
        }
    }
}