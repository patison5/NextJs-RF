import Image from 'next/image'

export default function Customers() {
    return (
        <div className="container pt-5 pb-3">
            <h2 className="section-title position-relative text-uppercase mb-4"><span className="bg-secondary pr-3">Customers</span></h2>
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 pb-1 text-center">
                    <Image
                        className="w-100"
                        src="/static/img/default/customers.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt='customers image'
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </div>

                <div className="col-lg-4">


                    <div className="bg-light p-30 mb-30">
                        <h5>My customers map</h5>
                        <ul className="mb-3">
                            <li>Russia</li>
                            <li>China</li>
                            <li>Ukraine</li>
                            <li>USA</li>
                            <li>Germany</li>
                            <li>France</li>
                            <li>Australia</li>
                            <li>Great Britain</li>
                            <li>Australia</li>
                            <li>Spain</li>
                            <li>Israil</li>
                            <li>Georgia</li>
                            <li>Canada</li>
                        </ul>
                        <small>If i forgot someone, write me, i will add =)</small>
                    </div>

                </div>
            </div>
        </div>
    );
}