<?php  
	header('content-type:text/html;charset=utf-8');//设置字符编码
     include('./conn.php');
	header('Access-Control-Allow-Origin:*');
	
	if(isset($_GET['sid'])){ //先判断是否存在
		$id=$_GET['sid'];
		$result=$mysqli->query("select * from mainpic where sid=$id ");
	
		$wronglist=$result->fetch_assoc();
		
		echo json_encode($wronglist);

	} 