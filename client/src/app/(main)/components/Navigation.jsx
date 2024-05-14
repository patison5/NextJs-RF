import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="container-fluid bg-dark mb-30">
			    <div className="container">
			        <div className="row align-items-center d-lg-flex">
			            <div className="col-lg-12">
			                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
			                    <a href="/" className="text-decoration-none d-block d-lg-none">
			                        <span className="h1 text-uppercase text-dark bg-light px-2">RF</span>
			                        <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Marketplace</span>
			                    </a>
			    
			                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
			                        <span className="navbar-toggler-icon"></span>
			                    </button>
			    
			                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
			                        <div className="navbar-nav mr-auto py-0">
			                            <Link href="/" className="nav-item nav-link active">Home</Link>
			                            <Link href="/rules" className="nav-item nav-link">Rules & Info</Link>
			                            <Link href="/contact" className="nav-item nav-link">Contacts</Link>
			                            <Link href="https://discord.gg/Yv5HeqqU3V" className="nav-item nav-link">Discord</Link>
			                        </div>

			    
		                            {/* <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
		                                <a href="/shoping-cart" className="btn px-0 ml-3">
		                                    <i className="fas fa-shopping-cart text-primary"></i>
		                                    <span className="badge text-secondary border border-secondary rounded-circle"  style={{ paddingBottom: '2px' }}>
	                                            1
	                                        </span>
	                                        <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
		                                </a>
		                            </div> */}
			                            
			                    </div>
			                </nav>
			            </div>
			        </div>
			    </div>
			</div>
        </header>
    );
};

export default Header;