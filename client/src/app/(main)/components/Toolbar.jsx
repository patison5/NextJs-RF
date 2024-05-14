const Toolbar = () => {
    return (
        <toolbar>
			<div class="container-fluid">
			    <div class="container">
			        <div class="row bg-secondary py-3 align-items-center d-lg-flex">

			            <div class="col-lg-5 d-none d-lg-block">
			                <a href="/" class="text-decoration-none">
			                    <span class="h1 text-uppercase text-primary bg-dark px-2">RF</span>
			                    <span class="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Marketplace</span>
			                </a>
			            </div>
			    
			            <div class="col-lg-7 text-center text-lg-right">
			                <div class="d-inline-flex align-items-center">
			                    <div class="btn-group mx-2">
			                        <button type="button" class="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
			                        <div class="dropdown-menu dropdown-menu-right">
			                            <button class="dropdown-item" type="button">EN</button>
			                        </div>
			                    </div>
			                    <div class="btn-group">
									<a class="btn btn-sm btn-light" href="/auth/steam/login" id="js-login-btn">Sign in with steam</a>
			                    </div>
			                </div>
			                <div class="d-inline-flex align-items-center d-block d-lg-none">
			                    <a href="" class="btn px-0 ml-2">
			                        <i class="fas fa-heart text-dark"></i>
			                        <span class="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
			                    </a>
			                    <a href="" class="btn px-0 ml-2">
			                        <i class="fas fa-shopping-cart text-dark"></i>
			                        <span class="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
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