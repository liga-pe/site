const app = () => {
    return {
        isInscricoesAbertas: true,

        atualSecao: "",
        atualInicio: false,
        isOpenMenuMobile: false,
        isOpenMenuMais: false,

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