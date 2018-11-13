//线上的他们都在用微管家
$(".wgjia-c_w_list>li").mouseenter(function(){
  $(this).siblings("li").children(".list__info").stop().animate({"top":"155px"});
  $(this).children(".list__info").stop().animate({"top":0});
}).mouseleave(function(){
  $(this).children(".list__info").stop().animate({"top":"155px"});
});

var ArrayIndexOf =function(arr,value){
　　for(var i=0;i<arr.length;i++){
　　　　if(arr[i]===value){
　　　　　　return i;
　　　　}
　　}
　　return -1;
};

//配置域名和需要显示的板块  
var config=[
  {
    "host":"retail.wechatone.com",
    "del":true,
    "versions":2, //显示那个版块  备注：1 线上版 2 线下版
    "wechatone": true
  },
  {
    "host":"wgjx.aliagain.com",
    "del":true,
    "versions":2//显示那个版块  备注：1 线上版 2 线下版
  },
  {
    "host":"wgjx.168shuadan.com",
    "del":false,
    "versions":2, //显示那个版块  备注：1 线上版 2 线下版
    "delClass": ".del--login,.del--message"
  },
  {
    "host":"wgj.168haoping.com",
    "del":false,
    "versions":1, //显示那个版块  备注：1 线上版 2 线下版
    "delClass": ".del--login"
  },
  {
    "host":"www.wechatone.com",
    "del":true,
    "versions":1, //显示那个版块  备注：1 线上版 2 线下版
    "wechatone": true
  },
  {
    "host":"wgj.aiagain.com",
    "del":true,
    "versions":1, //显示那个版块  备注：1 线上版 2 线下版
    "delClass": ".del--login"
  }
];
//1 线上版
var _versions01=function(){
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone"];
  for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
          window.location = "/Mobile/online/index.html";
          break;
      }
  }
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?4ade9ca9f3713735807343b8bdf77026";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
  (function(b,a,e,h,f,c,g,s){b[h]=b[h]||function(){(b[h].c=b[h].c||[]).push(arguments)};
    b[h].s=!!c;g=a.getElementsByTagName(e)[0];s=a.createElement(e);
    s.src="//s.union.360.cn/"+f+".js";s.defer=!0;s.async=!0;g.parentNode.insertBefore(s,g)
  })(window,document,"script","_qha",168240,false);
  $(".retail").remove();
  $("#title").text("微管家-微信个人号运营系统，聚合管理高效成单");
};
//2 线下版
var _versions02=function(){
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone"];
  for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
          window.location = "/Mobile/offline/index.html";
          break;
      }
  }
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?414f614ac7feb65999ff5356a593ef84";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
  $(".online").remove();
  $("#title").text("微管家-员工微信统一管理软件，微管家助力业绩增长");
};
for(var i=0;i<config.length;i++){
  if(window.location.host.indexOf(config[i].host) > -1){
    if(config[i].versions==1){
      _versions01();
      $("#host").html(config[i].host);
    }else if(config[i].versions==2){
      _versions02();
      $("#host").html(config[i].host);
    }else{
      _versions01();
      $("#host").html(config[i].host);
    };
    if(config[i].del==true){
      console.log(config[i].del)
      $("#mainCompany").remove();
    };
    if(config[i].wechatone==true){
      $(".is-wechatone").css("display","inline-block");
      $(".not-wechatone").hide();
    }
    if(!!config[i].delClass){
      $(config[i].delClass).remove();
    }
  }
};


var setCookie =function(name,value){
  var Days = 1;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days*60*60*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
};

var getCookie = function (name) {
  var arr;
  var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
};
var getQueryString = function(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null){
    return unescape(r[2]);
  }else{
    return null;
  };  
};
(function() {
  var regHref = $(".register").attr("href");
  var TRENCH = getCookie("TRENCH");
  var trench = null;
  var source = getQueryString("source");
  if(source!=null){
    trench="source="+source;
  }
  if(TRENCH==null&&!!source){
    setCookie("TRENCH",trench);
  }else if(!!TRENCH){
    trench=TRENCH;
    setCookie("TRENCH",trench);
  };
  if(!!trench){
    if (ArrayIndexOf(regHref,"?") != -1) {   
      trench ="&"+trench; 
    }
    regHref = regHref+trench;
    $(".register").attr({"href":regHref});
  }
})();

//回到顶部
$(".back-top").click(function(){
  $('html,body').animate({ scrollTop: 0 }, 500);
});


// 导航锚点跳转
$(".nav>li a").click(function(){
  $(".nav>li a").removeClass("active");
   var s=$(this).attr("href");
  if (ArrayIndexOf(s,"#") == -1){
    $("#"+s).ScrollTo(500);
  }else if(ArrayIndexOf(s,"/")== 0){
    $(s.slice(1)).ScrollTo(500);
  }else{
    $(s).ScrollTo(500);
  };
  $(this).addClass("active");
});

var scrollToSite = function (id) {
  if(id==''){
    return false;
  }
  if (ArrayIndexOf(id,'#') == -1) id = '#' + id;
  $(".nav>li a").each(function () {
    $(this).removeClass("active");
    if (this.hash == id) {
      $(this).addClass("active");
    }
  });
  $(id).ScrollTo(500);
};
scrollToSite(window.location.hash || '');

//轮播图
//线上
var onlinePlay = new Swiper('.swiper-container', {
  paginationClickable: true,
  speed: 2000,
  loop: true,
  observer:true,
  observeParents:true,
  autoplayDisableOnInteraction : false, 
  autoplay:4000,
  pagination:'.tmre-swiper__pagination'
});
// 线下
var retailPlay =  new Swiper('.retail-banner', {
  paginationClickable: true,
  speed: 2000,
  loop: true,
  observer:true,
  observeParents:true,
  autoplayDisableOnInteraction : false, 
  autoplay:4000,
  pagination:'.retail-banner__pagination'
});

$(".wgjia-swiper-container").mouseenter(function(){
  onlinePlay.stopAutoplay();
}).mouseleave(function(){
  onlinePlay.startAutoplay();
});
$(".retail-banner").mouseenter(function(){
  retailPlay.stopAutoplay();
}).mouseleave(function(){
  retailPlay.startAutoplay();
});

$(".telephoneHover").mouseenter(function(){
  $(".telephone").animate({"right":"45px"});
}).mouseleave(function(){
  $(".telephone").animate({"right":"-300px"});
});
$(".markCodeHover").mouseenter(function(){
  $(".markCode").animate({"right":"45px"});
}).mouseleave(function(){
  $(".markCode").animate({"right":"-300px"});
});
$(".consultHover").mouseenter(function(){
  $(".consult").animate({"right":"45px"});
}).mouseleave(function(){
  $(".consult").animate({"right":"-300px"});
});

$(".dropdown-btn").on("click", function() {
  $(this).siblings(".dropdown-content").toggleClass("show");
});

$(window).on("click", function(e) {
  if (!$(e.target).hasClass("dropdown-btn")) {
    $(".dropdown-content").removeClass("show");
  }
});