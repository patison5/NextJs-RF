import Link from 'next/link';
import Image from 'next/image'

const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-secondary">
                <div className="container">
                    <div className="row mx-xl-6 py-4">
                        <div className="col-md-6 px-xl-0">
                            <p className="mb-md-0 text-center text-md-left text-secondary">
                                &copy; <a className="text-primary" href="#">RF</a>. 
                                All Rights Reserved. Created by &nbsp;
                                <span className="text-primary">Dad.Fedor</span>. 
                                Designed by
                                <a className="text-primary" href="https://htmlcodex.com">&nbsp;HTML Codex</a>
                            </p>
                        </div>
                        <div className="col-md-5 px-xl-0 text-center text-md-right">
                            <Image
                                className="img-fluid"
                                src="/static/img/default/payments.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: 'auto', height: '100%' }} // optional
                                />

                            {/* <Image src="/static/img/default/payments.png" alt="" title="" width="100%" height="100%" layout="responsive" objectFit="contain"/> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to top button */}
            <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
        </div>
    );
};

export default Footer;