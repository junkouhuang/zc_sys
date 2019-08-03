function tologin (){
	var pwd=document.getElementById("pwd").value;
	if(pwd){
		$.ajax({
	    url:"",    //请求的url地址
	    dataType:"json",   //返回格式为json
	    async:true,//请求是否异步，默认为异步，这也是ajax重要特性
	    data:{"id":"value"},    //参数值
	    type:"POST",   //请求方式
	    beforeSend:function(){
	        //请求前的处理
	    },
	    success:function(req){
	        //请求成功时处理
	    },
	    complete:function(){
	        //请求完成的处理
	    },
	    error:function(){
	        //请求出错处理
	    }
	});
	}else{
		alert("请输入密码")
	}
}
