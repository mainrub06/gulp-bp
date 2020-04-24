const smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
const settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '20px', /* gutter width px || % || rem */
    mobileFirst: true, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '20px' /* side fields */
    },
    breakPoints: {
        fullhd: {
          width: '1920px', /* -> @media (max-width: 1100px) */
          fields: '20px' /* set fields only if you want to change container.fields */
        },
        desktop: {
          width: '1600px',
          fields: '15px'
        },
        laptop: {
          width: '1200px'
        },
        tablet: {
          width: '768px'
        },
        iphone7: {
          width: '375px'
        },
        iphone5: {
          width: '320px'
        }

        /*
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

smartgrid('./source/styles/smart-grid', settings);
