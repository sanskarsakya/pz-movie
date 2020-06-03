import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

// ACTIONS
import { movieActions } from "../actions/movie.actions";

// COMPONENTS
import { ActorList } from "../components/Actor/ActorList";
import { Recommendation } from "../components/Recommendation/Recommendation";
import { MovieInfo } from "../components/MovieInfo/MovieInfo";

export const MovieDetail = props => {
    const { match } = props;
    const id = match.params.id;
    console.log(match.params.id);

    const dispatch = useDispatch();

    // SELECTORS
    const movie = useSelector(state => state.movies.item);
    const {casts, crews} = useSelector(state => state.actors);
    const recommendations = useSelector(state => state.recommendations.items);

    // LOCAL STATES
    const [images, setImages] = React.useState({});

    // EFFECTS
    useEffect(() => {
        fetchMovieDetail(id);
        fetchActors(id)
        fetchRecommendations(id)
    }, [id]);

    function fetchMovieDetail(id) {
        dispatch(movieActions.getMovieDetail(id));
    }
    function fetchActors(id) {
        dispatch(movieActions.getActors(id));
    }
    function fetchRecommendations(id) {
        dispatch(movieActions.getRecommendations(id));
    }

    return (
        <div className="w-screen h-screen">
           
            <div className="overflow-hidden relative w-full h-full">
                <div
                    className="w-full h-full absolute"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 1.53%, rgba(9, 9, 98, 0.8) 100%)"
                    }}
                >
                    <div className="relative w-full h-full overflow-y-scroll">
                        {/* start content here */}
                        <div className="max-w-6xl mx-auto py-8 text-white">
                            {/* start back btn */}
                            <Link to={"/movie"}>

                                <div className="flex items-center cursor-pointer">
                                    <svg
                                        width="37"
                                        height="37"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.5 33.917c8.515 0 15.417-6.903 15.417-15.417S27.015 3.083 18.5 3.083C9.986 3.083 3.084 9.986 3.084 18.5S9.986 33.917 18.5 33.917z"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M18.5 12.333L12.334 18.5l6.166 6.167M24.667 18.5H12.333"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="ml-3">Back</span>
                                </div>
                            </Link>

                            {/* end back btn */}

                            <MovieInfo movie={movie} />

                            <ActorList label={"cast"} items={casts} />
                            <ActorList label={"crew"} items={crews} />

                            <Recommendation items={recommendations} />
                        </div>
                    </div>
                </div>
                <img
                    className="h-full w-full  object-top object-cover"
                    src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
                    alt=""
                />
            </div>
        </div>
    );

};


const fakeImage = {
    id: 419704,
    backdrops: [
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
            height: 2160,
            iso_639_1: null,
            vote_average: 5.396,
            vote_count: 12,
            width: 3840
        },
        {
            aspect_ratio: 1.779359430604982,
            file_path: "/duengnNbJdTdjR329SmAAJO4stC.jpg",
            height: 1124,
            iso_639_1: null,
            vote_average: 5.392,
            vote_count: 8,
            width: 2000
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/t4z8OlOEzH7J1JRFUN3rcm6XHNL.jpg",
            height: 720,
            iso_639_1: null,
            vote_average: 5.39,
            vote_count: 6,
            width: 1280
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/cs6z1byqL0ffw1948FJI2Jr1HVT.jpg",
            height: 1080,
            iso_639_1: null,
            vote_average: 5.318,
            vote_count: 3,
            width: 1920
        },
        {
            aspect_ratio: 1.777389277389277,
            file_path: "/5DWR5jI0rKpys581EjZ60XKobZJ.jpg",
            height: 1716,
            iso_639_1: null,
            vote_average: 5.318,
            vote_count: 3,
            width: 3050
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/cjytKnwXW8Gy1HA6Ejwso4FmPSv.jpg",
            height: 2160,
            iso_639_1: null,
            vote_average: 5.318,
            vote_count: 3,
            width: 3840
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/AeDS2MKGFy6QcjgWbJBde0Ga6Hd.jpg",
            height: 2160,
            iso_639_1: null,
            vote_average: 5.318,
            vote_count: 3,
            width: 3840
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/axqGyWPzkN8WNdl6wGwOd3EdRKE.jpg",
            height: 1080,
            iso_639_1: null,
            vote_average: 5.318,
            vote_count: 3,
            width: 1920
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/elvVHhtKYFLoGGhfyKhhA0wQ4kc.jpg",
            height: 2160,
            iso_639_1: null,
            vote_average: 5.318,
            vote_count: 3,
            width: 3840
        },
        {
            aspect_ratio: 1.777972027972028,
            file_path: "/zT0qqteZ6qOPvVnFZCx0FNL9OD5.jpg",
            height: 1716,
            iso_639_1: null,
            vote_average: 5.318,
            vote_count: 3,
            width: 3051
        },
        {
            aspect_ratio: 1.777972027972028,
            file_path: "/1GTdTO6h06KvnOzm5u8w4baHrUD.jpg",
            height: 1716,
            iso_639_1: null,
            vote_average: 5.318,
            vote_count: 3,
            width: 3051
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/vbOoMut8n0v8CDqA5R1k9swy8NV.jpg",
            height: 2160,
            iso_639_1: "fr",
            vote_average: 5.312,
            vote_count: 1,
            width: 3840
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/6BT2vjhg6L76O4O74dFikNqZvLA.jpg",
            height: 1080,
            iso_639_1: "en",
            vote_average: 5.312,
            vote_count: 1,
            width: 1920
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/p3TCqUDoVsrIm8fHK9KOTfWnDjZ.jpg",
            height: 2160,
            iso_639_1: null,
            vote_average: 5.27,
            vote_count: 10,
            width: 3840
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/daopuCgMszXMpibP9Ycb5X0Ee8z.jpg",
            height: 2160,
            iso_639_1: null,
            vote_average: 5.264,
            vote_count: 8,
            width: 3840
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/lkM7OuQiRdnyIyhf9hZaha3NTZT.jpg",
            height: 2160,
            iso_639_1: null,
            vote_average: 5.252,
            vote_count: 4,
            width: 3840
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/2Lmo131KlAbJ5lo90AJ48sEHXGJ.jpg",
            height: 1080,
            iso_639_1: "en",
            vote_average: 5.246,
            vote_count: 2,
            width: 1920
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/8dH3tP7RCy7ie2u0ZKy1sc7rPQI.jpg",
            height: 2160,
            iso_639_1: "en",
            vote_average: 5.246,
            vote_count: 2,
            width: 3840
        },
        {
            aspect_ratio: 1.777389277389277,
            file_path: "/oZibj2AItah70g4CzFgOw3jiFln.jpg",
            height: 1716,
            iso_639_1: null,
            vote_average: 5.246,
            vote_count: 2,
            width: 3050
        },
        {
            aspect_ratio: 1.777972027972028,
            file_path: "/3lu6iHT189M6SL8q9OSmISYDoop.jpg",
            height: 1716,
            iso_639_1: null,
            vote_average: 5.246,
            vote_count: 2,
            width: 3051
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/pzE9dvOu630Y5A8kIc4NrVRopPr.jpg",
            height: 2160,
            iso_639_1: null,
            vote_average: 5.18,
            vote_count: 3,
            width: 3840
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/4VGR3bzjfVQ0skc8T1O92ieyKLa.jpg",
            height: 2160,
            iso_639_1: null,
            vote_average: 5.172,
            vote_count: 1,
            width: 3840
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/yEcTiowmZS8ZsuuYb8CYQPyA3sl.jpg",
            height: 2160,
            iso_639_1: "en",
            vote_average: 5.172,
            vote_count: 1,
            width: 3840
        },
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/xFYnJ7jwOirq7Gs8mJfY7D9G17c.jpg",
            height: 2160,
            iso_639_1: "pt",
            vote_average: 0,
            vote_count: 0,
            width: 3840
        }
    ],
    posters: [
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/xJUILftRf6TJxloOgrilOTJfeOn.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 6.254,
            vote_count: 34,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 6.098,
            vote_count: 44,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/fpe0eG2TBLJLQiqlhhvaWIfixXz.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 5.838,
            vote_count: 33,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/kK6Oq4JywUNXmJ299efUkv1h6Mn.jpg",
            height: 3000,
            iso_639_1: "es",
            vote_average: 5.588,
            vote_count: 5,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/c8RqP7jZhjiUCLmK1XdwPiR4T70.jpg",
            height: 1350,
            iso_639_1: "en",
            vote_average: 5.564,
            vote_count: 23,
            width: 900
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/cJ0wqaQ9KPzs3fROXUuaWgRg9Pj.jpg",
            height: 2100,
            iso_639_1: "fr",
            vote_average: 5.522,
            vote_count: 6,
            width: 1400
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg",
            height: 3000,
            iso_639_1: "pt",
            vote_average: 5.456,
            vote_count: 5,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/lNnomQxXpRP9mgUwMuSZhA8LXfA.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 5.398,
            vote_count: 14,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/uaNDkWm4RTR86ALHsexe0G42wCy.jpg",
            height: 3000,
            iso_639_1: "zh",
            vote_average: 5.388,
            vote_count: 4,
            width: 2000
        },
        {
            aspect_ratio: 0.7005253940455342,
            file_path: "/kOBCDrMrWSGRDquMcW5vfKGxxB9.jpg",
            height: 1142,
            iso_639_1: "zh",
            vote_average: 5.388,
            vote_count: 4,
            width: 800
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/hjKvEstzP2eSH42JPXTrvOzkH26.jpg",
            height: 1800,
            iso_639_1: "uk",
            vote_average: 5.384,
            vote_count: 2,
            width: 1200
        },
        {
            aspect_ratio: 0.6675,
            file_path: "/l3JgqdqILmpSq5VFZA69mP6bmME.jpg",
            height: 800,
            iso_639_1: "tr",
            vote_average: 5.384,
            vote_count: 2,
            width: 534
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/6sdHVhi1i1EuUmjw5LENjKx1vDC.jpg",
            height: 3000,
            iso_639_1: "de",
            vote_average: 5.384,
            vote_count: 2,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/dJ3VPQTg2gST26IKIk75TNHViB0.jpg",
            height: 1500,
            iso_639_1: "pt",
            vote_average: 5.384,
            vote_count: 2,
            width: 1000
        },
        {
            aspect_ratio: 0.675,
            file_path: "/hptAYzhNFIAPSoPjCEKobBnist6.jpg",
            height: 1080,
            iso_639_1: "es",
            vote_average: 5.384,
            vote_count: 2,
            width: 729
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/iR8TvOxTQNiTXFHs1S43RE2j0kg.jpg",
            height: 3000,
            iso_639_1: "es",
            vote_average: 5.318,
            vote_count: 3,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/7L65GcRJmX3YafTLtlB9ShWktq9.jpg",
            height: 3000,
            iso_639_1: "de",
            vote_average: 5.318,
            vote_count: 3,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/9YoXy8k4UExKhwa2VJkrB9RHWzZ.jpg",
            height: 3000,
            iso_639_1: null,
            vote_average: 5.312,
            vote_count: 1,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/dprgggZS8dSxVinLIVmaScrfetc.jpg",
            height: 1500,
            iso_639_1: "de",
            vote_average: 5.312,
            vote_count: 1,
            width: 1000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/yoLCsWOWdhDvWjVGxj6GVIateXF.jpg",
            height: 3000,
            iso_639_1: null,
            vote_average: 5.312,
            vote_count: 1,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/hdlJQ199maWeT2j8ATTCOwe1UKR.jpg",
            height: 3000,
            iso_639_1: null,
            vote_average: 5.312,
            vote_count: 1,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/bZB2G15aG3CXYKXN82s3mK8LG6Z.jpg",
            height: 3000,
            iso_639_1: null,
            vote_average: 5.312,
            vote_count: 1,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/1XUZq3UZJNYOsfjUGPjzT6vqeZk.jpg",
            height: 3000,
            iso_639_1: null,
            vote_average: 5.312,
            vote_count: 1,
            width: 2000
        },
        {
            aspect_ratio: 0.66650390625,
            file_path: "/tHtuh6JE8vbq42FvsmzBwCnLolG.jpg",
            height: 2048,
            iso_639_1: null,
            vote_average: 5.312,
            vote_count: 1,
            width: 1365
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/bWCYVnNv7cSEnbGws15R1tIRsDz.jpg",
            height: 3000,
            iso_639_1: null,
            vote_average: 5.312,
            vote_count: 1,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/dUHAZOM7CG1RZ2VIGtaPsRotOPY.jpg",
            height: 3000,
            iso_639_1: "zh",
            vote_average: 5.312,
            vote_count: 1,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/zZKauX8RNzT8VCV2XN78Wc9dVIH.jpg",
            height: 3000,
            iso_639_1: "es",
            vote_average: 5.312,
            vote_count: 1,
            width: 2000
        },
        {
            aspect_ratio: 0.6927816901408451,
            file_path: "/9BD0VONUxYWItmrYxI90hU0gVI9.jpg",
            height: 1136,
            iso_639_1: "uk",
            vote_average: 5.312,
            vote_count: 1,
            width: 787
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/dcbPgUymJt6tbUbs7U6L2Jc0wXD.jpg",
            height: 1500,
            iso_639_1: "ru",
            vote_average: 5.312,
            vote_count: 1,
            width: 1000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/5xPrQe647ThVzyAGCgJcQhH42H7.jpg",
            height: 1500,
            iso_639_1: "he",
            vote_average: 5.312,
            vote_count: 1,
            width: 1000
        },
        {
            aspect_ratio: 0.66650390625,
            file_path: "/6e1P7OVSQT4O2h6vnJiOj90s7gT.jpg",
            height: 2048,
            iso_639_1: "en",
            vote_average: 5.304,
            vote_count: 24,
            width: 1365
        },
        {
            aspect_ratio: 0.689453125,
            file_path: "/jth7ixO3LpaUV1lkOJsyXf2Oson.jpg",
            height: 2048,
            iso_639_1: "bg",
            vote_average: 5.246,
            vote_count: 2,
            width: 1412
        },
        {
            aspect_ratio: 0.7000705716302047,
            file_path: "/yUJJzKiAi5akgRYVJVw6nIEYTOi.jpg",
            height: 1417,
            iso_639_1: "it",
            vote_average: 5.246,
            vote_count: 2,
            width: 992
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/7Rq7TKeeuEyQ6UkwyGBtarBbZHB.jpg",
            height: 3000,
            iso_639_1: null,
            vote_average: 5.246,
            vote_count: 2,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/zY3aEnyaOrYa4BfI31V9XkRNMDp.jpg",
            height: 3000,
            iso_639_1: null,
            vote_average: 5.246,
            vote_count: 2,
            width: 2000
        },
        {
            aspect_ratio: 0.6697061803444783,
            file_path: "/37M8j1nwMs8wu2H2tMtDjqhTSnd.jpg",
            height: 1974,
            iso_639_1: "ko",
            vote_average: 5.246,
            vote_count: 2,
            width: 1322
        },
        {
            aspect_ratio: 0.675,
            file_path: "/1IZTnT0FTRlnI1JgJZrRWBwXZ4P.jpg",
            height: 1080,
            iso_639_1: "ru",
            vote_average: 5.246,
            vote_count: 2,
            width: 729
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/rp3PS9hl0sTZ6eOrXQF95Ben2N8.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 5.244,
            vote_count: 21,
            width: 2000
        },
        {
            aspect_ratio: 0.6663732394366197,
            file_path: "/5j04RLgNLEpeO5eYMg0GtSRfTVF.jpg",
            height: 1136,
            iso_639_1: "uk",
            vote_average: 5.238,
            vote_count: 0,
            width: 757
        },
        {
            aspect_ratio: 0.6668435013262599,
            file_path: "/oAhyIRR8Q2g91tqoPKz2sy1EIDQ.jpg",
            height: 1885,
            iso_639_1: "ko",
            vote_average: 5.238,
            vote_count: 0,
            width: 1257
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/z1iK14guSF73riOiqwfpzCFjjpd.jpg",
            height: 3000,
            iso_639_1: "sv",
            vote_average: 5.238,
            vote_count: 0,
            width: 2000
        },
        {
            aspect_ratio: 0.66993006993007,
            file_path: "/cbQk4P2AZasQSsgdbwvCQziLhgi.jpg",
            height: 1430,
            iso_639_1: "ko",
            vote_average: 5.238,
            vote_count: 0,
            width: 958
        },
        {
            aspect_ratio: 0.695,
            file_path: "/sQmYfYPFbs0pa23sZhXXA2yA6WL.jpg",
            height: 800,
            iso_639_1: "tr",
            vote_average: 5.238,
            vote_count: 0,
            width: 556
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/4ewdaXQEHY5vCW6YqSLbLpzk3Zv.jpg",
            height: 3000,
            iso_639_1: "fr",
            vote_average: 5.238,
            vote_count: 0,
            width: 2000
        },
        {
            aspect_ratio: 0.66650390625,
            file_path: "/ws8PCtGUlOFcSvmANfYrfM2UWiT.jpg",
            height: 2048,
            iso_639_1: "en",
            vote_average: 5.226,
            vote_count: 15,
            width: 1365
        },
        {
            aspect_ratio: 0.676,
            file_path: "/50VHX4ovYODxU0Xg5vSENqUHNtH.jpg",
            height: 1500,
            iso_639_1: "en",
            vote_average: 5.206,
            vote_count: 9,
            width: 1014
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/b87O065XKc5xtD3r8vD8RGM8K2D.jpg",
            height: 1920,
            iso_639_1: "en",
            vote_average: 5.19,
            vote_count: 5,
            width: 1280
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/eGeqCn3dEcQNQ0A7N0ahLUfFwe4.jpg",
            height: 1500,
            iso_639_1: "en",
            vote_average: 5.18,
            vote_count: 3,
            width: 1000
        },
        {
            aspect_ratio: 0.6746666666666666,
            file_path: "/8d7SqSJXSf6TeyQI6A4iBtWrSmX.jpg",
            height: 750,
            iso_639_1: "it",
            vote_average: 5.172,
            vote_count: 1,
            width: 506
        },
        {
            aspect_ratio: 0.6664691943127962,
            file_path: "/nojihgl6KhMWZKBENH2lmyA1m4P.jpg",
            height: 1688,
            iso_639_1: "uk",
            vote_average: 5.172,
            vote_count: 1,
            width: 1125
        },
        {
            aspect_ratio: 0.70068359375,
            file_path: "/jrAVI5SnmMFpD0oDxUhEkOSJ7Jz.jpg",
            height: 2048,
            iso_639_1: "zh",
            vote_average: 5.172,
            vote_count: 1,
            width: 1435
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/g1mu0RZHbKztGR7Wt2QV9YUwyrr.jpg",
            height: 3000,
            iso_639_1: "es",
            vote_average: 5.172,
            vote_count: 1,
            width: 2000
        },
        {
            aspect_ratio: 0.6751054852320675,
            file_path: "/bGVMk9upC9WBRF7vdfPHsTnGng5.jpg",
            height: 1896,
            iso_639_1: "it",
            vote_average: 5.172,
            vote_count: 1,
            width: 1280
        },
        {
            aspect_ratio: 0.666046511627907,
            file_path: "/1eZGehhy52PkeRegDVxBvBjRcEA.jpg",
            height: 1075,
            iso_639_1: "fr",
            vote_average: 5.172,
            vote_count: 1,
            width: 716
        },
        {
            aspect_ratio: 0.6944444444444444,
            file_path: "/wcTICyta60bfwGs01y0meHQuKpP.jpg",
            height: 1080,
            iso_639_1: "es",
            vote_average: 5.172,
            vote_count: 1,
            width: 750
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/6ZFP9gO20FKBzur2tEJi4uV8lKV.jpg",
            height: 3000,
            iso_639_1: "fr",
            vote_average: 5.172,
            vote_count: 1,
            width: 2000
        },
        {
            aspect_ratio: 0.7032176121930568,
            file_path: "/aaTxbmV9EEkkhpE9hs8c0FuxyLm.jpg",
            height: 2362,
            iso_639_1: "ru",
            vote_average: 5.172,
            vote_count: 1,
            width: 1661
        },
        {
            aspect_ratio: 0.7032176121930568,
            file_path: "/dkOKQOXBZsKZCHtbfYncZQnJgXI.jpg",
            height: 2362,
            iso_639_1: "ru",
            vote_average: 5.172,
            vote_count: 1,
            width: 1661
        },
        {
            aspect_ratio: 0.67724609375,
            file_path: "/aF10E5vpm6znVyFtSDT9fXqsui.jpg",
            height: 2048,
            iso_639_1: "fr",
            vote_average: 5.172,
            vote_count: 1,
            width: 1387
        },
        {
            aspect_ratio: 0.66650390625,
            file_path: "/6By839wAuutS3OoLTPqu8wuUet2.jpg",
            height: 2048,
            iso_639_1: "fr",
            vote_average: 5.172,
            vote_count: 1,
            width: 1365
        },
        {
            aspect_ratio: 0.6956521739130435,
            file_path: "/oIhQtWk3gwSnuNGEpMSUzftYrvy.jpg",
            height: 1725,
            iso_639_1: "he",
            vote_average: 5.172,
            vote_count: 1,
            width: 1200
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/k83X5734QpiaFneztMzogZP3qHi.jpg",
            height: 1674,
            iso_639_1: "uk",
            vote_average: 5.172,
            vote_count: 1,
            width: 1116
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/6YOjKjiPR5mconVH0o0Jaz4QExg.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 5.128,
            vote_count: 6,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/ornesywpBIAUhgRucwyjEGWplno.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 5.128,
            vote_count: 6,
            width: 2000
        },
        {
            aspect_ratio: 0.6689453125,
            file_path: "/xTUCXDdtHTX1r4egULvnA0akftF.jpg",
            height: 2048,
            iso_639_1: "en",
            vote_average: 5.128,
            vote_count: 6,
            width: 1370
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/2E5mtctzTuJ5mVsRzAtVC8kNAia.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 5.118,
            vote_count: 4,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/7VKbrr64P7waI9wcl5tm3eOaHFa.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 5.106,
            vote_count: 2,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/thAqDMNP9xPHpAFCHrSmJNL2v6F.jpg",
            height: 1500,
            iso_639_1: "en",
            vote_average: 5.106,
            vote_count: 2,
            width: 1000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/sHOmM3bSS2X6f1eFfjxJroGhbt1.jpg",
            height: 1500,
            iso_639_1: "en",
            vote_average: 5.068,
            vote_count: 7,
            width: 1000
        },
        {
            aspect_ratio: 0.6751343429408891,
            file_path: "/7ZSWdLKatrlke9Vn010lTbfjVmh.jpg",
            height: 2047,
            iso_639_1: "en",
            vote_average: 5.056,
            vote_count: 5,
            width: 1382
        },
        {
            aspect_ratio: 0.66650390625,
            file_path: "/xuG42A25oOma39nt0idMFSrOSNC.jpg",
            height: 2048,
            iso_639_1: "en",
            vote_average: 5.056,
            vote_count: 5,
            width: 1365
        },
        {
            aspect_ratio: 0.670465973851827,
            file_path: "/gTgchCxfgYmmdzCPyFtL2tqkuTS.jpg",
            height: 2983,
            iso_639_1: "en",
            vote_average: 5.044,
            vote_count: 3,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/l4DHLds7hMSdqMsfpUxKzdldn5b.jpg",
            height: 3000,
            iso_639_1: "de",
            vote_average: 5.044,
            vote_count: 3,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/mL2EWtydn3HW1cqaVa7ssvc1tEt.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 4.922,
            vote_count: 5,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/yzPgWf2pNHkSEPoWAt58VRWA22Q.jpg",
            height: 1080,
            iso_639_1: "pt",
            vote_average: 0,
            vote_count: 0,
            width: 720
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/hyiYLUOmf4EyC3TSaFgkGgsCB3T.jpg",
            height: 3000,
            iso_639_1: "pt",
            vote_average: 0,
            vote_count: 0,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/ijzHDXqpPjpS92jr678hWDDlb7O.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 0,
            vote_count: 0,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/1B6hQDtLdKLEkBPVrvwfIRUCgXa.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 0,
            vote_count: 0,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/hRfpPbhwvZ9zaqgxTxhUbsPErBp.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 0,
            vote_count: 0,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/9OjdiDiIPxAuzyMCLR2ebw0bZBR.jpg",
            height: 3000,
            iso_639_1: "pl",
            vote_average: 0,
            vote_count: 0,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/DVJnFIAa0cob9zpJNleQ9smx93.jpg",
            height: 3000,
            iso_639_1: "pl",
            vote_average: 0,
            vote_count: 0,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/84Kyu6zJqoEhIZX9dU85h2NkzUp.jpg",
            height: 1035,
            iso_639_1: "tr",
            vote_average: 0,
            vote_count: 0,
            width: 690
        },
        {
            aspect_ratio: 0.7258485639686684,
            file_path: "/kaxjkjtKpCFmGhJMbJSPttcaaHt.jpg",
            height: 1149,
            iso_639_1: "en",
            vote_average: 0,
            vote_count: 0,
            width: 834
        },
        {
            aspect_ratio: 0.7016666666666667,
            file_path: "/kLAXAYfK27NnYgTpVAW0FPdGdMu.jpg",
            height: 1200,
            iso_639_1: "ro",
            vote_average: 0,
            vote_count: 0,
            width: 842
        },
        {
            aspect_ratio: 0.7012622720897616,
            file_path: "/locR7Fq8Cw3O1avo7nrazbsaoB9.jpg",
            height: 1426,
            iso_639_1: "es",
            vote_average: 0,
            vote_count: 0,
            width: 1000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/iIXuzH42MVDYRQfzwWFvpQdb7TB.jpg",
            height: 1410,
            iso_639_1: "pl",
            vote_average: 0,
            vote_count: 0,
            width: 940
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/zLvWkjIJLIyvlJGboz46tyXXTq5.jpg",
            height: 1200,
            iso_639_1: "it",
            vote_average: 0,
            vote_count: 0,
            width: 800
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/4E2Bj9DLW207N4deQZ4y4IuUBd1.jpg",
            height: 1200,
            iso_639_1: "it",
            vote_average: 0,
            vote_count: 0,
            width: 800
        },
        {
            aspect_ratio: 0.6758333333333333,
            file_path: "/uxdQpoF8KQZ4VYcKwKFfeDJYeeJ.jpg",
            height: 1200,
            iso_639_1: "it",
            vote_average: 0,
            vote_count: 0,
            width: 811
        },
        {
            aspect_ratio: 0.6999140154772141,
            file_path: "/jpBI7t1W49oiurrDuDRrYeFJzeC.jpg",
            height: 1163,
            iso_639_1: "it",
            vote_average: 0,
            vote_count: 0,
            width: 814
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/AlkcwpnR8Fk5txukMQBBUWN2Dj7.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 0,
            vote_count: 0,
            width: 2000
        },
        {
            aspect_ratio: 0.7051909892262488,
            file_path: "/rwUxqbuVrUGqDNNlCjuMttifgIW.jpg",
            height: 1021,
            iso_639_1: "th",
            vote_average: 0,
            vote_count: 0,
            width: 720
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/hLymZB8RLjxCgmX2tXQ5U96hZ9C.jpg",
            height: 3000,
            iso_639_1: "en",
            vote_average: 0,
            vote_count: 0,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/ccNt5Rx4slOPRolacPfACqza70W.jpg",
            height: 3000,
            iso_639_1: "hu",
            vote_average: 0,
            vote_count: 0,
            width: 2000
        },
        {
            aspect_ratio: 0.69970703125,
            file_path: "/wc22DC0eh2IL6jeNStZTWb4gmJs.jpg",
            height: 2048,
            iso_639_1: "el",
            vote_average: 0,
            vote_count: 0,
            width: 1433
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/Al8dDMOtPr5a3V3ZSG65NICx7CI.jpg",
            height: 3000,
            iso_639_1: "cs",
            vote_average: 0,
            vote_count: 0,
            width: 2000
        },
        {
            aspect_ratio: 0.6666666666666666,
            file_path: "/ih2W8u7vozm9vd3RUfXTkj0Usr3.jpg",
            height: 3000,
            iso_639_1: "sv",
            vote_average: 0,
            vote_count: 0,
            width: 2000
        }
    ]
};
