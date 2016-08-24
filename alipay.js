var partner = "";
var seller = "";
var rsaPrivate = "";
var rsaPublic = "";

function setInfo()
{
	var notifyUrl = document.getElementById("notifyURL").value;
	uexAliPay.setPayInfo(partner, seller, rsaPrivate, rsaPublic, notifyUrl);
}
/*
* 支付宝支付
*/
function alipay()
{
	var subject 		= document.getElementById("subject").value;
	var body 			= document.getElementById("bodyy").value;
	var fee 			= document.getElementById("fee").value;
	var out_trade_no 	= document.getElementById("out_trade_no").value;
	var paydata = {};
		paydata.out_trade_no	= out_trade_no;
		paydata.user_id 		= document.getElementById("user_id").value;
		paydata.pay_price 		= fee;
		
	$.get('plugin.php?id=tom_love:alipay',paydata,function(json){
		if(json.status == 200){
			setInfo();
			uexAliPay.pay(out_trade_no, subject, body, fee);
		}else{
			uexWindow.toast("1", "5", "创建订单失败,"+json.status, "5000");
		}
	},'json');
}