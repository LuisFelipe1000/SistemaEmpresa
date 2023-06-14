<?php
    class PDOCONNECT{
        public $pdo;
        public $current_date;
        public function __construct(){
          $this->pdo = new PDO("mysql:host=localhost;dbname=placarponts;charset=utf8","luis", "luis1998");
          date_default_timezone_set("America/Sao_Paulo");
         // $this->current_date = date('Y-m-d H:i:s');
      }
  }
  
// constantes com as credenciais de acesso ao banco MySQL
/* define('DB_HOST', 'localhost');
define('DB_USER', 'luis');
define('DB_PASS', 'luis1998');
define('DB_NAME', 'placarponts'); */
  
// habilita todas as exibições de erros
/* ini_set('display_errors', true);
error_reporting(E_ALL);
 
date_default_timezone_set('America/Sao_Paulo'); */

  
//return $PDO;
// inclui o arquivo de funçõees
//require_once 'functions.php';
?>