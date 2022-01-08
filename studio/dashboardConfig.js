export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61d95c18bb5c3d0f601541f3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3pwzu7mr',
                  apiId: '04b22906-c9f2-4d6c-81a8-56262afccc5b'
                },
                {
                  buildHookId: '61d95c19b34906368f5e38ee',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gueekj2r',
                  apiId: '80687eba-a767-4662-a81b-ba0f13498566'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zen0bit/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gueekj2r.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
