import Image from 'next/image'

export default function MainCarousel() {
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col-lg-8">
                    <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                        <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to="<%= index %>" className="active"></li>
                        <li data-target="#header-carousel" data-slide-to="<%= index %>"></li>
                        <li data-target="#header-carousel" data-slide-to="<%= index %>"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item position-relative active"  style={{ height: "430px" }}>
                                <Image
                                    className="position-absolute w-100 h-100"
                                    src="/static/img/products/air1.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                    alt='customers image'
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                />
                                
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{maxWidth: "700px"}}>
                                        <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Airdrops</h1>
                                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Very high-configured event mod. Cool and interesting event will never makes yours players procrastinating.</p>
                                        <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/product/<%= item.id %>">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item position-relative"  style={{ height: "430px" }}>
                                <Image
                                    className="position-absolute w-100 h-100"
                                    src="/static/img/products/silent1.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                    alt='customers image'
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                />

                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{maxWidth: "700px"}}>
                                        <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Airdrops</h1>
                                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Very high-configured event mod. Cool and interesting event will never makes yours players procrastinating.</p>
                                        <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/product/<%= item.id %>">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item position-relative"  style={{ height: "430px" }}>
                                <Image
                                    className="position-absolute w-100 h-100"
                                    src="/static/img/products/mining1.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                    alt='customers image'
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                />
                                
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{maxWidth: "700px"}}>
                                        <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Airdrops</h1>
                                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Very high-configured event mod. Cool and interesting event will never makes yours players procrastinating.</p>
                                        <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/product/<%= item.id %>">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="product-offer mb-30"  style={{ height: "200px" }}>
                        <Image
                            className="img-fluid"
                            src="/static/img/products/killfeed1.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt='customers image'
                            style={{ width: '100%', height: 'auto'}}
                        />

                        <div className="offer-text">
                            <h6 className="text-white text-uppercase">Spoiler</h6>
                            <h3 className="text-white mb-3">Comming soon</h3>
                        </div>
                    </div>
                    <div className="product-offer mb-30"  style={{ height: "200px" }}>
                        <Image
                            className="img-fluid"
                            src="/static/img/products/silent1.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt='customers image'
                            style={{ width: '100%', height: 'auto'}}
                        />

                        <div className="offer-text">
                            <h6 className="text-white text-uppercase">save 10%</h6>
                            <h3 className="text-white mb-3">Special Offer</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}