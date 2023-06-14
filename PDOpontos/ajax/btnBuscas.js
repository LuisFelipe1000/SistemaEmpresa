/* $(function($) { */

$(document).ready(function() {

    $('#btnLog').focus(function() {
        $("#btnLog").addClass('entrabtn');
        $("#btnLog").removeClass('login100-form-btn');
    });

    $('#btnLog').blur(function() {
        $("#btnLog").removeClass('entrabtn');
        $("#btnLog").addClass('login100-form-btn');
    });

    $('.entra').keypress(function(e){
            var tecla = (e.keyCode?e.keyCode:e.which);
            if(tecla == 13){
                campo =  $('.entra');
                indice = campo.index(this);
               if(campo[indice+1] != null){
                  proximo = campo[indice + 1];
                  proximo.focus();
                  
               }else{
                 return true;
               }
            }

            if(tecla == 13){
             e.preventDefault(e);
             return false;
             }else{
             return true;
             }
         });
    
    $("#desconect").click(function(){
      var desconect = "saidere";
        $.post("LLdesconect.php", { Xdesconect: desconect}, function(retlog1) {
            window.location.assign(retlog1);
        });  
    });
    
    $("#btnLog").click(function(){

        login = $("#username").val();
        pass = $("#pass").val();

        $.post("LLvalidalog.php", { loginph: login, passph: pass, idf:8}, function(retlog) {
            var aut = "erro";
            if (aut == retlog) {
                $("#resultlog").html("login ou senha incorreto"); 
            } else{
                window.location.href = retlog;
            }         
        });
    });

        var startano = 10;
        var optionx = '<option value="0">Selecione...</option>';
        $.post("LLconsuano.php", { ano: startano }, function(retano) {
            if (retano.length > 0) {
                $("#buscaAno").html(optionx + retano);
                $("#busano2").html(optionx + retano);
                $("#busano3").html(optionx + retano);
            } 
        });

    data = new Date();
    grafatual(data);

    function grafatual(data) {
        //dia  = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth()+1);
        ano = data.getFullYear();
        mesNome = 0;

        switch (mes) {
            case 1:
                $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\"> JANEIRO  " + ano + "</h3>");
                mesNome = "1-JANEIRO";
                break;
            case 2:
                $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\"> FEVEREIRO " + ano + "</h3>");
                mesNome = "2-FEVEREIRO";
                break;
            case 3:
                $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\"> MARÇO " + ano + "</h3>");
                mesNome = "3-MARÇO";
                break;
            case 4:
                $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\"> ABRIL " + ano + "</h3>");
                mesNome = "4-ABRIL";
                break;
            case 5:
                $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\"> MAIO " + ano + "</h3>");
                mesNome = "5-MAIO";
                break;
            case 6:
                $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\"> JUNHO " + ano + "</h3>");
                mesNome = "6-JUNHO";
                break;
            case 7:
                $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\"> JULHO " + ano + "</h3>");
                mesNome = "7-JULHO ";
                break;
            case 8:
                $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\"> AGOSTO " + ano + "</h3>");
                mesNome = "8-AGOSTO";
                break;
            case 9:
                $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\"> SETEMBRO " + ano + "</h3>");
                mesNome = "9-SETEMBRO";
                break;
            case 10:
                $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\"> OUTUBRO " + ano + "</h3>");
                mesNome = "10-OUTUBRO";
                break;
            case 11:
                $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\"> NOVEMBRO" + ano + "</h3>");
                mesNome = "11-NOVEMBRO";
                break;
            case 12:
                $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\">1 DEZEMBRO" + ano + "</h3>");
                mesNome = "12-DEZEMBRO";
                break;
        }
        $.post("LLgrafico1.php", { buscaMes: mesNome, buscaAno: ano }, function(retAT) {
            $("#grafico1").html(retAT);
        });
    };
    $("#fechamodal").click(function() {
        closeNav()
    });
    $("#btnBuscaUsuario").click(function() { //BOTÃO BUSCA GRAFICO USUARIO UNICO
        $("#Spawselect").toggle();
        bcUsuario = $("#bustiposet2").val();
        nomsu = $("#bustiposet2 :selected").text();
        buscacAno = $("#busano2").val();
        $("#cabeca").html("<br><br><br>") ///cabeçalho onde aparece o mes
        $.post("LLgrafiunico.php", {buscaUsuario:bcUsuario, dequem:nomsu, buscAnoUsu:buscacAno }, function(retornUsus) {
            $("#grafico1").html(retornUsus);
        });
    });

    $("#btncadastro").click(function() {
        $("#modal2").modal();
        $("#qtnpontos").val(0);
        $("#nomeset").val("");
    });

    $("#btnbuscaset").click(function() {
        $(".grafS").show();
        bcMes = $("#buscaMes").val();
        numMes = bcMes.split("-");
        bcAno = $("#buscaAno").val();
        x = bcMes.split("-");

        $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\">" + x[1] + " - " + bcAno + "</h3>") ///cabeçalho onde aparece o mes

        var aa = numMes[0]; // mes atual
        var bb = 0;
        var cc = 0;
        var dd = 0;
        var ee = 0;
        var ff = 0;
        var ano1 = bcAno; // ano atual
        var ano2 = 0;

        if (aa == 1) {
            bb = 12;
            cc = 11;
            ano2 = ano1 - 1;
            $.post("LL3graf.php", { buscaA: aa, buscaB: bb, buscaC: cc, buscaAno1: ano1, buscaAno2: ano2 }, function(retsetsetor) {
                $("#grafico2").html(retsetsetor);
            });
        }

        if (aa == 2) {
            bb = 1;
            cc = 12;
            ano2 = ano1 - 1;
            $.post("LL3graf.php", { buscaA: aa, buscaB: bb, buscaC: cc, buscaAno1: ano1, buscaAno2: ano2 }, function(retsetsetor) {
                $("#grafico2").html(retsetsetor);
            });
        }

        if (aa > 2) {
            ano2 = ano1;
            for (i = 0; i < 3; i++) {
                bb = aa - 1;
                cc = bb - 1;
                if (i <= 3) {
                    break;
                }
            }
            $.post("LL3graf.php", { buscaA: aa, buscaB: bb, buscaC: cc, buscaAno1: ano1, buscaAno2: ano2 }, function(retsetsetor) {
                $("#grafico2").html(retsetsetor);
            });
        }


 /* =--------------------------------------grafico semestre ------------------------------------------------------------------ */

        if (aa == 1) {
            bb = 12;
            cc = 11;
            dd = 10;
            ee = 9;
            ff = 8;
            ano2 = ano1 - 1;
            $.post("LLsemestral.php", { buscaA: aa, buscaB: bb, buscaC: cc, buscaD: dd, buscaE: ee, buscaF: ff, buscaAno1: ano1, buscaAno2: ano2 }, function(retsetsetor1) {
                $("#grafico3").html(retsetsetor1);
            });
        }
        if (aa == 2) {
            bb = 1;
            cc = 12;
            dd = 11;
            ee = 10;
            ff = 9;
            ano2 = ano1 - 1;
            $.post("LLsemestral.php", { buscaA: aa, buscaB: bb, buscaC: cc, buscaD: dd, buscaE: ee, buscaF: ff, buscaAno1: ano1, buscaAno2: ano2 }, function(retsetsetor1) {
                $("#grafico3").html(retsetsetor1);
            });

        }
        if (aa == 3) {
            bb = 2;
            cc = 1;
            dd = 12;
            ee = 11;
            ff = 10;
            ano2 = ano1 - 1;
            $.post("LLsemestral.php", { buscaA: aa, buscaB: bb, buscaC: cc, buscaD: dd, buscaE: ee, buscaF: ff, buscaAno1: ano1, buscaAno2: ano2 }, function(retsetsetor1) {
                $("#grafico3").html(retsetsetor1);
            });

        }
        if (aa == 4) {
            bb = 3;
            cc = 2;
            dd = 1;
            ee = 12;
            ff = 11;
            ano2 = ano1 - 1;
            $.post("LLsemestral.php", { buscaA: aa, buscaB: bb, buscaC: cc, buscaD: dd, buscaE: ee, buscaF: ff, buscaAno1: ano1, buscaAno2: ano2 }, function(retsetsetor1) {
                $("#grafico3").html(retsetsetor1);
            });

        }
        if (aa == 5) {
            bb = 4;
            cc = 3;
            dd = 2;
            ee = 1;
            ff = 12;
            ano2 = ano1 - 1;
            $.post("LLsemestral.php", { buscaA: aa, buscaB: bb, buscaC: cc, buscaD: dd, buscaE: ee, buscaF: ff, buscaAno1: ano1, buscaAno2: ano2 }, function(retsetsetor1) {
                $("#grafico3").html(retsetsetor1);
            });

        }
        if (aa > 5) {
            ano2 = ano1;
            for (i = 0; i < 6; i++) {
                bb = aa - 1;
                cc = bb - 1;
                dd = cc - 1;
                ee = dd - 1;
                ff = ee - 1;
                if (i <= 6) {
                    break;
                }
            }
            $.post("LLsemestral.php", { buscaA: aa, buscaB: bb, buscaC: cc, buscaD: dd, buscaE: ee, buscaF: ff, buscaAno1: ano1, buscaAno2: ano2 }, function(retsetsetor1) {
                $("#grafico3").html(retsetsetor1);
            });
        }


        $.post("LLanual.php", { buscaAno: bcAno }, function(retsetsetor2) {
            $("#grafico4").html(retsetsetor2);
        });

        $.post("LLgrafico1.php", { buscaMes: bcMes, buscaAno: bcAno }, function(retsetsetor3) {
            $("#grafico1").html(retsetsetor3);
        });

    });


});
$(function() {
    $("#fxset").click(function() {
        $( href="LLpontos.php").html(retsetsetor8);
    });
});

$(function() {
    var campo = $("#cadnome");
    campo.keyup(function(e) {
        e.preventDefault();
        campo.val($(this).val().toUpperCase());
    });

    $("#bustiposet").mouseenter(function() {
        var startnome = 10;
        var option = '<option value="0">Selecione...</option>';
        $.post("LLconsusuario.php", { nome: startnome }, function(retnome1) {
            if (retnome1.length > 0) {
                $("#bustiposet").html(option + retnome1);
            } 
        });
    });

    $("#busano3").change(function() {
        pdusu = $("#idpes").val();
        pdmes = $("#mesPonto").val();
        pdano = $("#busano3").val();
        nomtes1 = $("#mesPonto").val();
        nomtes2 = nomtes1.substring(nomtes1.indexOf("-") + 1);
        $("#testmodal").modal("show");
     
        $.post("LLexcluirPontos.php", { startidusu1:pdusu, teste1:nomtes2, startmes1:pdmes, startano1:pdano, func:"sel"}, function(retnome2) {
            $(".teste").html(retnome2);
        });
    });

   

    $("#btnexib").click(function() {
        var startnome = 10;
        var option = '<option value="0">Selecione...</option>';
        $.post("LLconsusuario.php", { nome: startnome }, function(retnome3) {
            if (retnome3.length > 0) {
                $("#bustiposet2").html(option + retnome3);
            } 
        });
    });

    $("#btnLog").click(function() {

    });

    $("#bustiposet").click(function() {
        var val1 = $("#bustiposet").val();
        if (val1 != 0) {
            $('input[val-lui=form1x],select[val-lui=form1x]').removeClass('invalid');
            $.post("LLconsprenchecamp.php", { link: val1 }, function(retorno) {
                var a1 = retorno.split(",");
                $("#idpes").val(a1[0]);
                $("#cadnome").val(a1[1]);
                $("#cadcidade").val(a1[2]);
                $("#cadtipo").val(a1[3]);
				$("#setinf1").html("");
				$("#setinf2").html("");
				$("#setinf3").html("");
                $("#btncad").prop("disabled", true);
                $("#btnedit").prop("disabled", false);
                $("#btnexclu").prop("disabled", false);
            });
        }
    });
    $("#btnBuscaUsuario").click(function() {
        var val1 = $("#bustiposet").val(); 
    });

    $('#fechdal').click(function() { 
        $("#busano3").val("");
        $('#testmodal').modal('hide');
      }); 

    $("#btnexclu").click(function() {
        var val2= $("#idpes").val();
        idlogx2 = $("#idlog").val();
        $.post("LLdeleteusuario.php", {idlog:idlogx2, usulink:val2}, function(excluido){
            var x = "deu ruim";
            if(x == excluido){
                $("okcadpessoa").html("Erro ao excluir !");
                }else{
                        $("#okcadpessoa").html(excluido);
                        $("#cadcidade").val("");
                        $("#cadtipo").val("");
                        $("#cadnome").val("");
                        $("#btncad").prop("disabled", false);
                        $("#cadpontos").prop("disabled", true);
                        $("#btnexclu").prop("disabled", true);
                    }
        });
    });
    $("#btnexclu1").click(function() {
        $('#aviso2').modal('show');
    });
    $("#btnnao2sub").click(function() {
        $('#aviso2').modal('hide');
    });

    $("#exepontos").click(function() {
        pdIDP = $("#idpontos").val();
        pdPsu = $("#qtnRpontos").val();
        idlogx1 = $("#idlog").val();
    

        $.post("LLexcluirPontos.php", { id_pontos:pdIDP, qtd_pontos:pdPsu, func:"upd", idlog:idlogx1}, function(retEXD1) {
            $("#okcadpessoa").html(retEXD1);
        });
    });

 /* -------------------botão que cadastra os pontos e mes  em que foi lançado ----------------------------------------------- */   

    $("#cadpontos").click(function() {
            vidpes = $("#idpes").val();
            pontosx = $("#qtnpontos").val();
            addmes = $("#datepicker").val();
            idlogx = $("#idlog").val();
            rtmes = addmes.split("/");
            mesc1 = addmes.substring(5,3); /* traz o mes 10, 11, 12 */
            mesc2 = addmes.substring(5,4); /* tras o mez cortando o zero */
            anoc4 = addmes.substring(6,10); /* ano */

          if(rtmes[1] <= 9){
            mesF= mesc2;
          } else{
            mesF= mesc1;
          }

         switch (mesF) {
            case "1":
                mesNomex = "1-JANEIRO";
                break;
            case "2":
                mesNomex = "2-FEVEREIRO";
                break;
            case "3":
                mesNomex = "3-MARÇO";
                break;
            case "4":
                mesNomex = "4-ABRIL";
                break;
            case "5":
                mesNomex = "5-MAIO";
                break;
            case "6":
                mesNomex = "6-JUNHO";
                break;
            case "7":
                mesNomex = "7-JULHO ";
                break;
            case "8":
                mesNomex = "8-AGOSTO";
                break;
            case "9":
                mesNomex = "9-SETEMBRO";
                break;
            case "10":
                mesNomex = "10-OUTUBRO";
                break;
            case "11":
                mesNomex = "11-NOVEMBRO";
                break;
            case "12":
                mesNomex = "12-DEZEMBRO";
                break;
        }
       if (mesF !="" || pontosx !="") {
        $.post("LLaddpontos.php", {pessoa: vidpes, addpontos: pontosx, cadmes: mesNomex, cadano: anoc4, idlog:idlogx }, function(resultp) {
            var x = "deu ruim";
            if (x == resultp) {
                $("okcadpessoa").html("Erro ao cadastrar !");
            } else {
                $("#okcadpessoa").html(resultp);
                $("#qtnpontos").val("");
                $("#datepicker").val("");
            }
        });
        }
     });
/* =--------------------------fim do botão de cadastro de pontos -------------------------------------------------------- */     

/* ---------------------------------- botão que cadastra o usuario --------------------------------------------------------------- */
    $("#cadnome").keyup(function()
    {
        proc30 = $("#cadnome").val();
        $.post("LLvalidanome.php", { existenome: proc30, codverific: 30 }, function(resultproc30)
        {
            $("#okcadpessoa").html(resultproc30);
        });
    });
/*-----------------------------------------  fim botão que cadastra o usuario ------------------------------------------------------------ */   

});
function editP1 (editp1,editp2) {
    $("#idpontos").val(editp1);
    $("#qtnRpontos").val(editp2);
    $('#testmodal').modal('hide');
};

/*--------------------------------------------------- validação de campo --------------------------------------------------------------------*/
function cadusuarios(valid_usu) {
    var valid = true;
    var val1 = $("#cadnome").val();
    var val2 = $("#cadcidade").val();
    var val3 = $("#cadtipo").val();
    idlogx3 = $("#idlog").val();

    switch (valid_usu) {
        case 'cadnome':
            if ($("#cadnome").val().length > 6) {
                $("#cadnome").removeClass('invalid');
                $("#setinf1").html("");
            } else {
                $("#cadnome").addClass('invalid')
                $("#setinf1").html("Digite o nome completo");
                valid = false;
            }
            break;
        case 'cadcidade':
            if ($("#cadcidade").val() !="") {
                $("#cadcidade").removeClass('invalid');
                $("#setinf2").html("");
            } else {
                $("#cadcidade").addClass('invalid')
                $("#setinf2").html("Selecione a cidade");
                valid = false;
            }
            break;
        case 'cadtipo':
            if ($("#cadtipo").val() !="") {
                $("#cadtipo").removeClass('invalid');
                $("#setinf3").html("");
            } else {
                $("#cadtipo").addClass('invalid')
                $("#setinf3").html("Selecione o tipo");
                valid = false;
            }
            break;
        case 'btncad':
            $.each($('input[val-lui=form1x],select[val-lui=form1x]'), function() {
                $(this).removeClass('invalid');
                if (!$(this).val()) {
                    var idusuform = $(this).attr('id');
                    $("#" + idusuform).addClass('invalid');
                    valid = false;
                }
            });
            if (valid) {

                $.post("LLcadPessoa.php", {idlog:idlogx3, cadnome: val1, cadcidade: val2, cadtipo: val3}, function(retcadpes) {
                    var x = "deu ruim";
                    if (x == retcadpes) {
                        $("okcadpessoa").html("Erro ao cadastrar !");
                    } else {
                        $("#okcadpessoa").html(retcadpes);
                        $("#cadcidade").val("");
                        $("#cadtipo").val("");
                        $("#cadnome").val("");
                    }
                });
            }
            break;
        case 'btnedit':
            $.each($('input[val-lui=form1x],select[val-lui=form1x]'), function() {
                $(this).removeClass('invalid');
                if (!$(this).val()) {
                    var idusuform = $(this).attr('id');
                    $("#" + idusuform).addClass('invalid');
                    valid = false;
                }
            });
            if (valid) {
                $.post("LLatualusuario.php", { idusu: val0a, nomeusu: val1, filial: val2, setor: val3, gersup: val4, loginusu: val5, senhausu: val6, admusu: val7 }, function(editretornoxb) {
                    var xb = 100;

                    if (xb > editretornoxb) {
                        $("okcadpessoa").innerHTML = "Erro ao atualizar !";
                    } else {
                        $("#okcadpessoa").html(editretornoxb);
                        var option3 = '<option value="">Selecione...</option>';
                        $("#setor").html(option3);
                    }
                });
            }
            break;
        default:
            if ($("#" + valid_usu).val() == "") {
                $("#" + valid_usu).addClass('invalid')
            } else {
                $("#" + valid_usu).removeClass('invalid')
                valid = false;
            }
    }
    return valid;
/* -------------------------------fim validação de campo--------------------------------------------------------------- */    
}

function restart() {
    $("#titulocad").html(
        '<h3 class="modal-title">&nbsp;&nbsp;Cadastro</h3>'
    );
    
    $("#qtnRpontos").prop('disabled', true);
    $("#qtnpontos").prop('disabled', true);
    $("#btnedit").prop('disabled', true);
    $("#nomes").prop('disabled', true);
    $("#btnexclu1").prop('disabled', true);
    $("#exepontos").prop('disabled', true);
    $("#mesPonto").prop('disabled', true);
    $("#cadpontos").prop('disabled', true);
    $("#busano3").prop('disabled', true);
    $("#datepicker").prop('disabled', true);
    $("#datepicker2").prop('disabled', true);
    $("#bustiposet").prop('disabled', true);

    $("#btncad").prop('disabled', false);
    $("#cadnome").prop('disabled', false);
    $("#cadcidade").prop('disabled', false);
    $("#cadtipo").prop('disabled', false);


    $("#datepicker").val("");
    $('input[val-lui=form1x],select[val-lui=form1x]').removeClass('invalid'); //validar o elemento vasio com um simbolo de esclamção
    $("#idpes").val("");
    $("#cadnome").val("");
    $("#cadcidade").val("");
    $("#mesPonto").val("");
    $("#busano3").val("");
    $("#cadtipo").val("");
    $("#setinf1").html("");
    $("#setinf2").html("");
    $("#setinf3").html("");
    $("#datepicker").datepicker("destroy");
}

/* function trazpontos(){
    pdusu = $("#idpes").val();
    pdmes = $("#mesPonto").val();
    pdano = $("#busano3").val();
    nomtes1 = $("#mesPonto").val();
    nomtes2 = nomtes1.substring(nomtes1.indexOf("-") + 1);
    $("#testmodal").modal("show");

    $.post("LLexcluirPontos.php", { startidusu1:pdusu, teste1:nomtes2, startmes1:pdmes, startano1:pdano, func:"sel"}, function(retnome2) {
        $(".teste").html(retnome2);
    });
} */