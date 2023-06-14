<?php
/*    $buscaMes = $_POST["buscaMes"];
   $buscaAno = $_POST["buscaAno"];
  /*  $startano = (@($_POST["ano"])); */
        /* echo consultAno($startano); */ 
        include("funtion.php");
        include("Class/ClassConexao.php");
       
        


class Prefix extends PDOCONNECT{
 
    public function validateGroupPrefix($buscaMes,$buscaAno){

            $current_date = date('Y-m-d H:i:s');
            
            $sql = "SELECT tb_pessoa.nome, tb_pontos.fk_id_pessoa, tb_pontos.mes, tb_pontos.ano, Sum(tb_pontos.qtd_pontos) AS SomaDeqtd_pontos
             FROM tb_pessoa LEFT JOIN tb_pontos ON tb_pessoa.id_pessoa = tb_pontos.fk_id_pessoa
            GROUP BY tb_pessoa.nome, tb_pontos.fk_id_pessoa, tb_pontos.mes, tb_pontos.ano
            HAVING (((tb_pontos.mes)='".$buscaMes."') AND ((tb_pontos.ano)='".$buscaAno."'))
            ORDER BY Sum(tb_pontos.qtd_pontos) ASC";
            $sql = $this->pdo->prepare($sql);

            $consulta = $sql->execute();
            while ($linha = $consulta->fetch(PDO::FETCH_ASSOC)) {
                $point = array("y" => $linha['SomaDeqtd_pontos'],"label" => $linha['nome']);
                 array_push($dataPoints, $point);
              //  echo "Nome: {$linha['nome']} - E-mail: {$linha['email']}<br />";
                }
                echo"
                <script>
                    $(document).ready(function(){
                        CanvasJS.addColorSet(\"greenShades\",
                        [ //colorSet Array cor do grafico
                            \"#2F4F4F\",
                            \"#008080\",
                            \"#2E8B57\",
                            \"#3CB371\",
                            \"#90EE90\"
                        ]);
                        var chartgf1 = new CanvasJS.Chart(\"grafico1\", {
                            zoomEnabled: true,
                            exportEnabled: true,
                            colorSet: \"greenShades\",
                            theme: \"light2\", //\"light1\", \"dark1\", \"dark2\" tema do grafico
                            backgroundColor: \"#F5DEB3\",
                            animationEnabled: true,
        
                            title:{
                                text: \"Painel de Vendas\",
                                fontColor: \"#2f4f4f\",
                                fontSize: 30,
                                padding: 10,
                                margin: 15,
                                backgroundColor: \"#FFFFE0\",
                                borderThickness: 1,
                                cornerRadius: 5,
                                fontWeight: \"bold\"
                            },
                            subtitles:[
                                {
                                    text: \"Persis Internet\"
                                    //Uncomment properties below to see how they behave
                                    //fontColor: \"red\",
                                    //fontSize: 30
                                }
                                ],
                               /*  toolTip:{             
                                   //texto dentro do grafico 
                                    fontColor:  \"#fff\",
                                    backgroundColor: \"#000\",
                                    borderColor: \"#2f4f4f\"
                                  }, */
        
                            axisX : {
                                interval: 1,
                                labelFontSize: 15,
                               /*  labelFontColor: \"#000\" */
                               
                               
                               tickLength: 5,
                               tickColor: \"#000\" ,
                               tickThickness: 2
                              },
                              
                              //tamanho da legendaa
                           /*  legend: {
                                fontSize: 10,
                                fontColor:  \"#fff\",
                                fontStyle: \"oblique\"
                            }, */
                            axisY : {
                                fontSize: 5,
                                title: \"Pontos\",
                                interlacedColor: \"#F6D9A6\"
                           
                              },
        
                            data: [{
                                type: \"bar\",
                                yValueFormatString: '#',
                                indexLabel: \"{y}\",
                                indexLabelPlacement: \"inside\",
                                indexLabelFontWeight: \"bolder\",
                                indexLabelFontColor: \"white\",
                                dataPoints:".json_encode($dataPoints,JSON_NUMERIC_CHECK)."
                            }]
                        });
                        chartgf1.render();
                    });
                </script>";
               fclose(stmt);
    }

    

        /* public function TelaPontselect($buscaMes,$buscaAno){
            $cmd = $this->pdo->prepare("SELECT tb_pessoa.nome, tb_pontos.fk_id_pessoa, tb_pontos.mes, tb_pontos.ano, Sum(tb_pontos.qtd_pontos) AS SomaDeqtd_pontos
            FROM tb_pessoa LEFT JOIN tb_pontos ON tb_pessoa.id_pessoa = tb_pontos.fk_id_pessoa
            GROUP BY tb_pessoa.nome, tb_pontos.fk_id_pessoa, tb_pontos.mes, tb_pontos.ano
            HAVING (((tb_pontos.mes)='".$buscaMes."') AND ((tb_pontos.ano)='".$buscaAno."'))
            ORDER BY Sum(tb_pontos.qtd_pontos) ASC");
                    
        } */

        /**
         * Converte datas entre os padrões ISO e brasileiro
         * Fonte: http://rberaldo.com.br/php-conversao-de-datas-formato-brasileiro-e-formato-iso/
         */

        
        public function consultAno($startano)
        {
            if($startano == 10){

                $sql = "SELECT tb_pontos.ano FROM tb_pontos GROUP BY tb_pontos.ano";
                $stm = $this->pdo->prepare($sql);
                $consultar = $stm->execute();
                if ($consultar->num_rows > 0) {
                while ($linhar = $consultar->fetch(PDO::FETCH_ASSOC)) {
                
                    echo '<option value="'.$linhar["ano"].'">'.$linhar["ano"].'</option><br>';
                    }
                }
            
            }
        }
        function dateConvert($date)
        {
            if ( ! strstr( $date, '/' ) )
            {
                // $date está no formato ISO (yyyy-mm-dd) e deve ser convertida
                // para dd/mm/yyyy
                sscanf($date, '%d-%d-%d', $y, $m, $d);
                return sprintf('%02d/%02d/%04d', $d, $m, $y);
            }
            else
            {
                // $date está no formato brasileiro e deve ser convertida para ISO
                sscanf($date, '%d/%d/%d', $d, $m, $y);
                return sprintf('%04d-%02d-%02d', $y, $m, $d);
            }
        
            return false;
        }
        
        
        /**
         * Calcula a idade a partir da data de nascimento
         *
         * Sobre a classe DateTime: http://rberaldo.com.br/php-usando-a-classe-nativa-datetime/
         */
        function calculateAge($birthdate)
        {
            $now = new DateTime();
            $diff = $now->diff(new DateTime($birthdate));
            
            return $diff->y;
        }
}

 $TESTE = new Prefix();
$TESTE->validateGroupPrefix('1-JANEIRO','2019');

?>