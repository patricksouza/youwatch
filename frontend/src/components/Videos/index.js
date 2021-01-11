import React from "react";

//Estilo
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import './style.css';
//Backend
const axios = require('axios');

class VideosCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            videos: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3333/videos')
            .then(function (response) {
                this.setState({
                    isLoaded: true,
                    videos: response
                })
            })
            .catch((error) => {
                this.setState({
                    isLoaded: true,
                    error,
                });
            });
    }

    render() {
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
                slidesToSlide: 3,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1,
            },
        };
        const { error, isLoaded, videos } = this.state;
        var count_popular = 1;

        if (error) {
            return <div className="center-loading "><div className="loading"></div></div>;
        } else if (!isLoaded) {
            return <div className="center-loading "><div className="loading"></div></div>;
        } else {
            return (
                <div className="container-content py-2">
                    <div className="container">
                        <h4>Vitrine de mais populares</h4>
                    </div>
                    <h5 className="center-text">Mais Vendidos</h5>
                    <div className="container py-2">
                        <Carousel
                            ssr={true}
                            itemClass="carousel-item-padding-40-px"
                            responsive={responsive}
                        >
                            {videos.map((item) => (
                                <p>{item.video_title}</p>
                            ))}
                        </Carousel>
                    </div>
                    <div>
                        <div className="container py-5">
                            <h4>Vitrine de ofertas</h4>
                        </div>
                        <h5 className="center-text">Produtos que baixaram de preço</h5>
                    </div>
                </div>
            );
        }
    }
}

export default VideosCarousel;
