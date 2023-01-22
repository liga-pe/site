const app = () => {
    return {
        isInscricoesAbertas: true,

        atualSecao: "",
        atualInicio: false,
        isOpenMenuMobile: false,
        isOpenMenuMais: false,

        grupos: [
            {
                "titulo": "Democracia Líquida",
                "link": "breve/",
                "slug": "democracia-liquida"
            },
            {
                "titulo": "Smart Cities",
                "link": "breve/",
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
                "link": "breve/",
                "slug": "protecao-de-dados-e-privacidade"
            }
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