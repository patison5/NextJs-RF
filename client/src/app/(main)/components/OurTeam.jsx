import Image from 'next/image'

export default function OutTeam() {
    return (
        <div className="container pt-5 pb-3">
            <h2 className="section-title position-relative text-uppercase mb-4"><span className="bg-secondary pr-3">Our Team</span></h2>
            <div className="row">
                <div className="col-md-3">
                    <div className="product-offer mb-30" style={{height: "300px"}}>
                        
                        <Image
                            className="img-fluid"
                            src="/static/img/default/profile1.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="profile image"
                            style={{ width: 'auto', height: '100%' }}
                            />

                        <div className="offer-text">
                            <h3 className="text-white mb-3">Dad.Fedor</h3>
                            <h6 className="text-white text-uppercase text-center mb-3">Programmer  <br /> Owner of server <br /> "Adrenalin"</h6>
                            <a href="" className="btn btn-primary">Discord</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="product-offer mb-30" style={{height: "300px"}}>
                        <Image
                            className="img-fluid"
                            src="/static/img/default/profile2.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="profile image"
                            style={{ width: 'auto', height: '100%' }}
                            />
                        <div className="offer-text">
                            <h3 className="text-white mb-3">RomaBeorn</h3>
                            <h6 className="text-white text-uppercase text-center mb-3">Programmer  <br /> Owner of server <br /> "Adrenalin"</h6>
                            <a href="" className="btn btn-primary">Discord</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="product-offer mb-30" style={{height: "300px"}}>
                        <Image
                            className="img-fluid"
                            src="/static/img/default/profile3.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="profile image"
                            style={{ width: 'auto', height: '100%' }}
                            />
                        <div className="offer-text">
                            <h3 className="text-white mb-3">IMPERATOR</h3>
                            <h6 className="text-white text-uppercase text-center mb-3">3D Designer<br /> Just a cool man<br />Rocking Boss</h6>
                            <a href="" className="btn btn-primary">Discord</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="product-offer mb-30" style={{height: "300px"}}>
                        <Image
                            className="img-fluid"
                            src="/static/img/default/profile4.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="profile image"
                            style={{ width: 'auto', height: '100%' }}
                            />
                        <div className="offer-text">
                            <h3 className="text-white mb-3">S.A.I.M.O.N</h3>
                            <h6 className="text-white text-uppercase text-center mb-3">Handyman <br />  Owner of server <br /> "DZLL"</h6>
                            <a href="" className="btn btn-primary">Discord</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}