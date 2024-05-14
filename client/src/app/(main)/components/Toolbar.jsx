const Toolbar = () => {
    return (
        <toolbar>
			<div className="container-fluid">
			    <div className="container">
			        <div className="row bg-secondary py-3 align-items-center d-lg-flex">

			            <div className="col-lg-5 d-none d-lg-block">
			                <a href="/" className="text-decoration-none">
			                    <span className="h1 text-uppercase text-primary bg-dark px-2">RF</span>
			                    <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Marketplace</span>
			                </a>
			            </div>
			    
			            <div className="col-lg-7 text-center text-lg-right">
			                <div className="d-inline-flex align-items-center">
			                    <div className="btn-group mx-2">
			                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
			                        <div className="dropdown-menu dropdown-menu-right">
			                            <button className="dropdown-item" type="button">EN</button>
			                        </div>
			                    </div>
			                    <div className="btn-group">
									<a className="btn btn-sm btn-light" href="/auth/steam/login" id="js-login-btn">Sign in with steam</a>
			                    </div>
			                </div>
			                <div className="d-inline-flex align-items-center d-block d-lg-none">
			                    <a href="" className="btn px-0 ml-2">
			                        <i className="fas fa-heart text-dark"></i>
			                        <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
			                    </a>
			                    <a href="" className="btn px-0 ml-2">
			                        <i className="fas fa-shopping-cart text-dark"></i>
			                        <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
			                    </a>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
        </toolbar>
    );
};

export default Toolbar;