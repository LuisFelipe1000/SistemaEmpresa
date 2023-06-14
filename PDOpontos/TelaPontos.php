<?php
include("Class/ClassConexao.php");
/* header('Content-Type: application/json');
header("Content-type: text/html;charset=utf-8"); 
error_reporting(1); */

/* session_start();
if ($_SESSION['Xmaster'] != 'shurato') {
	session_start();
	$_SESSION['Xmaster'];
	session_destroy();
	header('location: index.php');
}
 */

/* include ("funtion.php");
$prefixfunc = new prefix();
$result = $prefixfunc->TelaPontselect("5-MAIO", "2019");

print_r($result); */



?>



<!DOCTYPE html>
<html>

<head>
	<title>Tela de Pontos</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Language" content="pt-BR">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/bootstrap-grid.css">
	<link rel="stylesheet" href="css/bootstrap-reboot.css">
	<link rel="stylesheet" href="css/MyCss.css">
	<link rel="stylesheet" href="jj/jquery-ui.css">
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.min.js"></script>
	<script src="grafico_js/3canvasjs.min.js"></script>
	<script src="jj/jquery-ui.js"></script>
	<script src="js/jquery.quick.search.js"></script>
	<script>
		window.onload = function() {
		/* 	$(".grafS").hide();
			$("#chartContainer").hide();
			$("#exepontos").hide(); */
			
		};
	</script>

	 
</head>

<body data-spy="scroll" data-target=".navbar" data-offset="60">
	

<nav class="navbar navbar-transparente " style="background-color: #111;" >
 	<div class="dropdown" border="1">
			<img style="cursor:pointer; " src="img/pla_form.png" onMouseOver="this.src='img/pla_form1.png' " onMouseOut="this.src='img/pla_form.png' " id="menu1" data-toggle="dropdown" />
			<ul border="0" class="dropdown-menu" role="menu" aria-labelledby="menu1">
				<li role="presentation">
					<img  style="cursor:pointer" src="img/sair2f.png" onMouseOver="this.src='img/sairf.png' " onMouseOut="this.src='img/sair2f.png'" id="desconect" />
				</li>
			</ul>
	</div>
	
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
		<span class="navbar-toggler-icon"></span>
	</button>
<!-- <div > -->
	<table class="row" border="1">
			<tr>
				<td class="col-4 ">
					<select class="form-control entra" id="buscaMes" name="buscaMes">
						<option value="">Selecione...</option>
						<option value="1-JANEIRO">1-JANEIRO</option>
						<option value="2-FEVEREIRO">2-FEVEREIRO</option>
						<option value="3-MARÇO">3-MARÇO</option>
						<option value="4-ABRIL">4-ABRIL</option>
						<option value="5-MAIO">5-MAIO</option>
						<option value="6-JUNHO">6-JUNHO</option>
						<option value="7-JULHO">7-JULHO</option>
						<option value="8-AGOSTO">8-AGOSTO</option>
						<option value="9-SETEMBRO">9-SETEMBRO</option>
						<option value="10-OUTUBRO">10-OUTUBRO</option>
						<option value="11-NOVEMBRO">11-NOVEMBRO</option>
						<option value="12-DEZEMBRO">12-DEZEMBRO</option>
					</select>
				</td>
				<td class="col-4">
					<select class="form-control entra" id="buscaAno" name="buscaAno">
						<option value="">Selecione...</option>
						<option value="2019">2019</option>
					</select>
				</td>
				<td class="col-2">
					<button id="btnbuscaset" class="myButton">&#x02315;Buscar</button>
				</td>
				<td class="col-4 dropdown">
					<img id="btnexib" class="dropdown-toggle" style="cursor:pointer" src="img/btnbusc.png" onMouseOver="this.src='img/btnbusc2.png' " onMouseOut="this.src='img/btnbusc.png'" />
				<!-- 	<div class="dropdown-menu row" id="Spawselect">
						<table align="center" class="row">
							<td class="col-4 dropdown" width="400px">
								<select class="form-control entra" id="bustiposet2" name="bustiposet2">
									<option value="0">Selecione...</option>
								</select>
							</td>
							<td class="col-4" width="10px">
							</td>
							<td class="col-2 dropdown" width="100px">
								<select class="form-control entra" id="busano2" name="busano2">
									<option value="0">Selecione...</option>
								</select>
							</td>
							<td class="col-4" width="10px">
							</td>
							<td class="col-4 dropdown">
								<button id="btnBuscaUsuario" type="submit" class="btn btn-primary entra">Buscar</button>
							</td>
						</table>
					</div> -->
				</td>
			</tr>
		</table>
<!-- </div> -->
</nav>

<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">Cadastro</a>
  <a href="#">Grafico</a>

</div>

<div id="main">
	<div class="container ">
				<div class="ali-grafic1 ">
					<br>
					<div id="cabeca" align="center"></div>
					<br>
						<div class="center-block " style="height: 550px; width: 900px;">
							<div id="grafico1" style="height: 480px; width: 900px;"> testeffffffffffffffffffffffff</div>
						</div>
					<div class="center-block " id="chartContainer" style="height: 500px; width: 900px;"></div>
				</div>
				<br>
				<!-- <div class="row">
					<div class="col-sm-4 grafS ">
						<div id="grafico2" style="height: 370px; width: 100%;"> </div>
					</div>
					<div class="col-sm-4 grafS">
						<div id="grafico3" style="height: 440px; width: 100%;"></div>
					</div>
					<div class="col-sm-4 grafS">
						<div id="grafico4" style="height: 500px; width: 100%;"></div>
					</div>

				</div> -->
	<!-- <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span> -->
	</div>
</div>



<!-- <script>
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
</script> -->
</body>

</html>