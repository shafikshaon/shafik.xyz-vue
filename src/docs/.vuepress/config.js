module.exports = {
    "title": "Shafik",
    "description": "Personal blog",
    "dest": "public",
    "theme": "reco",
    "themeConfig": {
        "nav": [
            {
                "text": "Home",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "TimeLine",
                "link": "/timeLine/",
                "icon": "reco-date"
            },
            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "GitHub",
                        "link": "https://github.com/recoluan",
                        "icon": "reco-github"
                    },
                ]
            }
        ],
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "Category"
            },
            "tag": {
                "location": 3,
                "text": "Tag"
            }
        },
        fourOhFour:"/404.jpeg",
        "logo": "/head.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "searchPlaceholder": 'Search...',
        "sidebar": "auto",
        "lastUpdated": "Last Updated",
        "author": "Shafikur Rahman Shaon",
        "record": "0",
        "startYear": "2019",
        "smoothScroll": true,
        valineConfig: {
            visitor: true
        },
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'shafikshaon/shafik.xyz-vue',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Contribute!',

        // Optional options for generating "Edit this page" link

        // if your docs are in a different repo from your main project:
        docsRepo: 'shafikshaon/shafik.xyz-vue',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        // defaults to false, set to true to enable
        editLinks: true,
        // default value is true. Allows to hide next page links on all pages
        nextLinks: true,
        // default value is true. Allows to hide prev page links on all pages
        prevLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!'
    },
    "markdown":
        {
            "lineNumbers": true
        }
    ,
    "plugins":
        [
            "@vuepress/medium-zoom",
            "flowchart",
            "vuepress-plugin-reading-time",
            '@vuepress/nprogress',
            [
                '@vuepress/google-analytics',
                {
                    ga: 'UA-42600555-6'
                }
            ],
            [
                'vuepress-plugin-clean-urls',
                {
                    normalSuffix: '/',
                    indexSuffix: '/',
                    notFoundPath: '/404.html',
                },
            ],
        ],
    "head": [
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.png'}],
        ['link', {rel: 'icon', sizes: '32x32', href: '/logo.png'}],
        ['link', {rel: 'icon', sizes: '16x16', href: '/logo.png'}],
        ['link', {rel: 'manifest', href: '/site.webmanifest'}],
        ['link', {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'}],
        ['meta', {name: 'msapplication-TileColor', content: '#da532c'}],
        ['meta', {name: 'theme-color', content: '#ffffff'}],
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ]
}