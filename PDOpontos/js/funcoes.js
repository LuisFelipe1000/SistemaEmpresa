
	/*inserir planilhas*/	
		function inlcuirlinhatabela(){
			var nomeplan = $("#plancons").val();
			var val0a = $("#idusu").val();
			var varplan = "PLANILHA";
			if(nomeplan.length > 3){
				$.post("incluiplanilha.php", {idusu:val0a,nomeacess:nomeplan,docacess:varplan}, function(planinser){
					$(".table tbody").append(planinser);	
				});					
					$("#plancons").val('');
					$("#plancons").focus();
			}else{
					$("#plancons").val('');
					$("#plancons").focus();	
				};	
		};	

	/*excluir planilhas*/
		function excluirlinhatabela(a){
			idacessat = a;
			$.post("excluiplanilha.php", {idacess:idacessat}, function(planexcl){
				idacessat = a;
				var par = $(".trlist"+a).empty();
				par.remove();
			});
		};
		
	/*atualiz null de planilhas*/
		function numplan(null1){

		};