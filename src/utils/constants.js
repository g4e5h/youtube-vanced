
const GOOGLE_API_KEY='';

export const YOUTUBE_VIDEOS_URL=`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}&fields=items(id,snippet(title,channelTitle,publishedAt,thumbnails(medium)),statistics(viewCount))`;

export const YOUTUBE_SEARCH_VIDEOS_URL="https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&maxResults=50&fields=items(id,snippet(title,channelTitle,publishedAt,thumbnails(medium)))&type=video&key="+GOOGLE_API_KEY+"&q=";

export const SEARCH_API_URL="http://suggestqueries.google.com/complete/search?ds=yt&client=youtube&q=";

export const SEARCH_PARAM_KEY_FOR_VIDEO="v";

export const DEFAULT_USER_IMAGE_FOR_CHAT="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography.png";
export const DG_USER_IMAGE_FOR_CHAT="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wsoWa9qPKRbMSWgki-IWpDfMm9a5J5Jwdg&s";

export const LIVE_CHAT_OFFSET=55;

export const dummyCommentData= [
    {
        name:"Salman Baan",
        text:"Waah bhaijaan, mashallah kya video banai hai!"
    },
    {
        name:"Deepesh Grover",
        text:"Lorem ipsum sit amor lsen, consectuer adip",
        replies:[
            {
                name:"Virat Johri",
                text:"Waah bhai vaah!",
                replies:[
                    {
                        name:"Rohit Gharma",
                        text:"Bhai match khel yrr aakr",
                        replies:[
                            {
                                name:"Rishabh Pantaloons",
                                text:"Thoda right se daal, acha rahega",
                                replies:[]
                            }
                        ]

                    },{
                        name:"Ravichandran Ashwin",
                        text:"Nice nice nice"
                    }
                ]
            },{
                name:"Faf Du Plessis",
                text:"Sabko batadunga tera raaz 😎"
            }

        ]
    },
    {
        name:"Deepesh Grover",
        text:"Lorem ipsum sit amor lsen, consectuer adip",
        replies:[
            {
                name:"Virat Johri",
                text:"Waah bhai vaah!",
                replies:[
                    {
                        name:"Rohit Gharma",
                        text:"Bhai match khel yrr aakr",
                        replies:[
                            {
                                name:"Rishabh Pantaloons",
                                text:"Thoda right se daal, acha rahega.... Theek hai na, chalo thoda sa length kheech lo fir dekho kya hota hai..iska system check karte hain",
                                replies:[
                                    {
                                        name:"Yashashvi Jealous",
                                        text:"Length ball will not have any effect on him, lets have a golgappa break",
                                        replies:[]
                                    }
                                ]
                            }
                        ]

                    }
                ]
            }

        ]
    },
    {
        name:"Deepesh Grover",
        text:"Lorem ipsum sit amor lsen, consectuer adip",
        replies:[
            {
                name:"Virat Johri",
                text:"Waah bhai vaah!",
                replies:[]
            }

        ]
    },
     {
        name:"Deepesh Grover",
        text:"Lorem ipsum sit amor lsen, consectuer adip",
        replies:[
            {
                name:"Virat Johri",
                text:"Waah bhai vaah!",
                replies:[
                    {
                        name:"Rohit Gharma",
                        text:"Bhai match khel yrr aakr",
                        replies:[
                            {
                                name:"Rishabh Pantaloons",
                                text:"Thoda right se daal, acha rahega",
                                replies:[]
                            }
                        ]

                    }
                ]
            }

        ]
    },
    {
        name:"Deepesh Grover",
        text:"Lorem ipsum sit amor lsen, consectuer adip",
        replies:[
            {
                name:"Virat Johri",
                text:"Waah bhai vaah!",
                replies:[
                    {
                        name:"Rohit Gharma",
                        text:"Bhai match khel yrr aakr",
                        replies:[
                            {
                                name:"Rishabh Pantaloons",
                                text:"Thoda right se daal, acha rahega",
                                replies:[]
                            }
                        ]

                    }
                ]
            }

        ]
    },
    
]