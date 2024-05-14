import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div class="container-fluid bg-dark mb-30">
			    <div class="container">
			        <div class="row align-items-center d-lg-flex">
			            <div class="col-lg-12">
			                <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
			                    <a href="/" class="text-decoration-none d-block d-lg-none">
			                        <span class="h1 text-uppercase text-dark bg-light px-2">RF</span>
			                        <span class="h1 text-uppercase text-light bg-primary px-2 ml-n1">Marketplace</span>
			                    </a>
			    
			                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
			                        <span class="navbar-toggler-icon"></span>
			                    </button>
			    
			                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
			                        <div class="navbar-nav mr-auto py-0">
			                            <Link href="/" class="nav-item nav-link active">Home</Link>
			                            <Link href="/rules" class="nav-item nav-link">Rules & Info</Link>
			                            <Link href="/contact" class="nav-item nav-link">Contacts</Link>
			                            <Link href="https://discord.gg/Yv5HeqqU3V" class="nav-item nav-link">Discord</Link>
			                        </div>

			    
		                            {/* <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
		                                <a href="/shoping-cart" class="btn px-0 ml-3">
		                                    <i class="fas fa-shopping-cart text-primary"></i>
		                                    <span class="badge text-secondary border border-secondary rounded-circle"  style={{ paddingBottom: '2px' }}>
	                                            1
	                                        </span>
	                                        <span class="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
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