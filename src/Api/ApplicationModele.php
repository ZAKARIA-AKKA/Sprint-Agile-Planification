<?php

	# Connect : Pour établir la Connexion avec la base de donnée
	# cette fonction return un objet nommé : $cnx
	# $dsn : Data Source Name
	function Connect($database_name,$user = 'root',$passwd = '')
	{
		$dsn = 'mysql:host=localhost;dbname=' . $database_name;
		$user = $user;
		$pass = $passwd;
		try
		{
			$cnx = new PDO($dsn,$user,$pass,array(PDO::ATTR_ERRMODE =>PDO::ERRMODE_EXCEPTION));
		}
		catch(PDOException $ex)
		{
			die('Error ' . $ex->getMessage());
		}

		return $cnx;
	}
	function React_Php()
	{
		if (isset($_SERVER['HTTP_ORIGIN'])) { 
			header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
			header('Access-Control-Allow-Credentials: true');
			header('Access-Control-Max-Age: 86400');    // cache for 1 day
		}
		if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
			if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
				header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 
			if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
				header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
		}
	}
	function Login($email,$passwd)
	{
		$cnx = Connect('agencetransfert');
		$req = $cnx->prepare('select count(*) as isHere from managerclient where Email = :email and Password = :passwd');
		$req->execute(array('email' => $email,'passwd' => $passwd));
		return $req;
	}
	function SaveImage()
	{
		
	}



	# Fonctions Pour l'aide : 
	
	function msg($txt) 
    { 
        echo $txt; 
    }

	function msg_err($code_err)
	{
		$tableau_err = array(
					'404' => 'Page not Found',
					'101' => 'Format d\'émail est Incorrecte !',
					'202' => 'Format de Téléphone est Incorrecte !',
					'505' => 'les champs sont vide !',
					'606' => 'Format de Telephone ou Email sont incorrecte !',
					'707' => 'les valeurs des champs n\'éxiste pas');
		echo $tableau_err[$code_err];
	}

	# les Expressions régulière
	function Validation($pattern,$txt)
	{
		return $test = preg_match('#'. $pattern .'#',$txt);
	}







