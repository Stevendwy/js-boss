var phones = "";
var names = "";
var companys = "";
var chancetypes = "";

var phoneok = false;
var companysok = false;

var headData = {
   "msg": "",
   "code": 0,
   "data":  ["123","43453","123","43453","123","43453"],
   "time": 1482201614
}

//手机号码验证
telRuleCheck2 = function(string) {
	var pattern = /^1[34578]\d{9}$/;
	if(pattern.test(string)) {
		return true;
	}
	return false;
};
companysCheck = function(string) {
	var pattern = /^1[34578]\d{9}$/;
	if(pattern.test(string)) {
		return true;
	}
	return false;
};

function timedMsg() {
	
	var t = setTimeout(function(){
		$("#fixeddiv").css("display", "none");
	}, 3000)
}
$(".chancetype").click(function() {
	chancetypes = $(this).text();
	$("#showtype").val($(this).text());
})
//公司不为空

$("#okbtn").click(function() {
	phones = $("#phone").val().replace(/[^\d]/g, '');
	names = $("#name").val();
	companys = $("#company").val().replace(/^ +| +$/g, '');
	//手机号码判断
	if(phones == "") {
		okajax = false;
		$("#phone").val("");
		$("#phone").attr("placeholder", "联系电话不能为空");
	} else {
		if(telRuleCheck2(phones) == false) {
			okajax = false;
			$("#phone").val("");
			$("#phone").attr("placeholder", "联系电话格式不正确");
		} else {
			$("#phone").attr("placeholder", "输入需开通手机号");
			okajax = true;
		}
	};
	//判断公司
	if(companys == "" || companys == "公司不能为空") {
		$("#company").val("");
		$("#company").attr("placeholder", "公司不能为空")
		companysok = false;
	} else {
		$("#company").attr("placeholder", "公司")
		companysok = true;
	}
	if(okajax && companysok) {
		//可以请求
		$.ajax({
			type: "get",
			url: "10.48.108.157:5089/open",
			async: false,
			data: {
				"phone": phones,
				"full_name": names,
				"company": companys,
				"office ": chancetypes
			},
			success: function(data) {
				console.log(data)
				//成功弹框
				$("#fixeddiv").css("display", "block");
				timedMsg();
			},
			error: function(data) {
				console.log(data)
			}
		});
	}
})
$("#refreshimg").click(function(){
	console.log("refreshimg")
})
//最近开通
if(headData.data.length!=0){
	for(let i=0;i<headData.data.length;i++){
		var li = '<li class="dd-item"><span class="liindex">'+i+'</span><span class="licontent">'+headData.data[i]+'</span></li>';
		$("#nearphone .dd-list").append(li);
	}
}
