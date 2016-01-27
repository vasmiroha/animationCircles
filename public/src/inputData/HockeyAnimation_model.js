/**
 * Created by Mykolai_Lytvyn on 10.11.2015.
 */
define([], function(){
    var HockeyAnimation_model =  [

        {   'title':'top',
            'priority': 2,
            'left':"500px",
            'top':"100px",
            'position':'top',
            'background':{
                'red':'244',
                'green':'0',
                'blue':'54',
                'opacity':'0.01'
            }
        },
        {   'title':'left',
            'priority': 5,
            'left':"157px",
            'top':"210px",
            'position':'left',
            'background':{
                'red':'255',
                'green':'235',
                'blue':'59',
                'opacity':'0.25'
            }
        },
        {   'title':'bottom2',
            'priority': 4,
            'left':"500px",
            'top':"400px",
            'position':'bottom',
            'background':{
                'red':'256',
                'green':'175',
                'blue':'88',
                'opacity':'0.25'
            }
        },

        {   'title':'bottom2',
            'priority': 4,
            'left':"500px",
            'top':"500px",
            'position':'bottom',
            'background':{
                'red':'76',
                'green':'175',
                'blue':'88',
                'opacity':'0.25'
            }
        },

    ];

    return function(){
        return HockeyAnimation_model;
    };

});
