const app = () => {
    return {
        isInscricoesAbertas: true,

        isOpenMenuMobile: false,
        isOpenMenuMais: false,

        grupos: [
            {
                "titulo": "Democracia Líquida",
                "slug": "democracia-liquida"
            },
            {
                "titulo": "Smart Cities",
                "slug": "smart-cities"
            },
            {
                "titulo": "Transparência algorítmica",
                "slug": "transparencia-algoritmica"
            },
            {
                "titulo": "Propriedade Intelectual",
                "slug": "propriedade-intelectual"
            },
            {
                "titulo": "Tributec",
                "slug": "tributec"
            },
            {
                "titulo": "Proteção de Dados e Privacidade",
                "slug": "protecao-de-dados-e-privacidade"
            }
        ],

        colaboradores: [
            {
                "nome": "Membro",
                "biografia": "Biografia do membro",
                "redes": {
                    "facebook": "https://facebook.com/",
                    "instagram": "https://instagram.com/",
                    "linkedin": "https://linkedin.com/"
                },
                "avatar": "https://api.dicebear.com/5.x/initials/svg?seed=default"
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

        init() {}
    }
}