<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>HOA Dashboard</title>
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
	<style>
		body {
			display: flex;
			min-height: 100vh;
			flex-direction: column;
		}

		.content {
			flex: 1;
		}

		.sidebar {
			background-color: #f8f9fa;
			padding: 15px;
		}

		.dark-mode .sidebar {
			background-color: #343a40;
		}

		.dark-mode .navbar,
		.dark-mode .footer {
			background-color: #343a40;
			color: white;
		}

		.dark-mode .content {
			background-color: #495057;
			color: white;
		}
	</style>
</head>

<body>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#">HOA Dashboard</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					<a class="nav-link" href="#">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Contact</a>
				</li>
				<li class="nav-item">
					<button class="btn btn-outline-secondary" id="darkModeToggle">Dark Mode</button>
				</li>
			</ul>
		</div>
	</nav>

	<div class="container-fluid">
		<div class="row">
			<nav class="col-md-2 d-none d-md-block sidebar">
				<div class="sidebar-sticky">
					<ul class="nav flex-column">
						<li class="nav-item">
							<a class="nav-link active" href="#">
								<i class="fas fa-home"></i>
								Dashboard
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<i class="fas fa-users"></i>
								Members
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<i class="fas fa-calendar"></i>
								Events
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<i class="fas fa-file-alt"></i>
								Documents
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 content">
				<h1 class="h2">Dashboard</h1>
				<div class="row">
					<div class="col-md-6">
						<div class="card mb-4">
							<img src="https://via.placeholder.com/150" class="card-img-top" alt="Sample Image">
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="card mb-4">
							<img src="https://via.placeholder.com/150" class="card-img-top" alt="Sample Image">
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>

	<footer class="footer bg-light text-center py-3">
		<div class="container">
			<span class="text-muted">© 2023 HOA Dashboard</span>
		</div>
	</footer>

	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<script>
		document.getElementById('darkModeToggle').addEventListener('click', function() {
			document.body.classList.toggle('dark-mode');
		});
	</script>
</body>

</html>