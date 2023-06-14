$(document).ready(function() {
$("#btnbuscaset").click(function() {
   /*  $(".grafS").show(); */
    bcMes = $("#buscaMes").val();
    numMes = bcMes.split("-");
    bcAno = $("#buscaAno").val();
    x = bcMes.split("-");

   /*  $("#cabeca").html("<h3 style=\"color: white; font-family: serif;\">" + x[1] + " - " + bcAno + "</h3>") */ ///cabeçalho onde aparece o mes

    /* var aa = numMes[0]; // mes atual
    var bb = 0;
    var cc = 0;
    var dd = 0;
    var ee = 0;
    var ff = 0;
    var ano1 = bcAno; // ano atual
    var ano2 = 0; */

   /*  if (aa == 1) {
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

   /*  if (aa == 1) {
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

    } */
/*     if (aa > 5) {
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
    } */


/*     $.post("LLanual.php", { buscaAno: bcAno }, function(retsetsetor2) {
        $("#grafico4").html(retsetsetor2);
    }); */

    $.post("funtion.php", { buscaMes: bcMes, buscaAno: bcAno }, function(retsetsetor3) {
        $("#grafico1").html(retsetsetor3);
    });

});



    var startano = 10;
    var optionx = '<option value="0">Selecione...</option>';
    $.post("funtion.php", { ano: startano }, function(retano) {
        if (retano.length > 0) {
            $("#buscaAno").html(optionx + retano);
           /*  $("#busano2").html(optionx + retano);
            $("#busano3").html(optionx + retano); */
        } 
    });
});
