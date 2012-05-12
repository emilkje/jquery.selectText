<!DOCTYPE HTML>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />

	<title>SelectText Plugin</title>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js"></script>
	<script type="text/javascript" src="jquery.selectText.min.js"></script>
	<script type="text/javascript">
		$(function(){
			$('#arbitrary').click(function(){
				//Click handler initiated
				$(this).selectText();
			});
		});
	</script>
</head>
<body>
	<span id="arbitrary">Click this text to select it.</span>
</body>
</html>
