// sessionStorage.setItem("userid", 'd124d088-3c2a-c3dd-edb4-1c4cfb59e74d');//方便开发测试用 正式注释掉
// sessionStorage.setItem("stu_name", "李雷");//学生真实姓名
var userid = sessionStorage.getItem("userid"); //大于0 表示登录了
sessionStorage.setItem("login_admin_school_code", "10028"); //学校code 全局变量
sessionStorage.setItem("jobtype", "c7092ffc-ee0d-835b-1a8f-a928f9859878"); //教师人才
sessionStorage.setItem("jobtype1", "1");
sessionStorage.setItem("jobtype2", "2");
sessionStorage.setItem("enrollment_type1", 1); //校招公告  企招 全局变量
sessionStorage.setItem("enrollment_type2", 2); //校招公告  公招 全局变量
sessionStorage.setItem("enrollment_type3", 3); //校招公告  事招 全局变量

// // 测试
// sessionStorage.setItem("school_id", "6f745542-f2f0-61b2-408f-aab3eec8a132"); //学校id 全局变量
// sessionStorage.setItem("newT", "65234669-9352-b52e-3ad2-29b78b59b170"); //通知  /News/newslist.html
// sessionStorage.setItem("newN", "35ce3508-d37b-b258-1b29-557bbdc73832"); //新闻  /News/newslist.html
// sessionStorage.setItem("newG", "ad7d897b-f8ab-ca82-660d-36faa94949f4"); //公告  /News/newslist.html

// // sessionStorage.setItem("zdy1", "e198d7e1-6601-9bb1-03aa-9e687c377134"); //手续办理   /News/shouxu.html  左侧单独
// sessionStorage.setItem("zdy2", "85a01cae-9d50-487d-8b11-d49fd4c355b9"); //就业手续
// sessionStorage.setItem("zdy3", "759d9f8a-70e5-8d2b-c923-7e7e080743a0"); //中心概览   /News/shengyuan.html   //左侧单独
// sessionStorage.setItem("zdy4", "b0aa818a-637e-ff36-1219-af0728b798d4"); //下载专区	/News/xuzhi.html       //左侧单独
// sessionStorage.setItem("zdy5", "102debc2-d933-b5f3-e713-8f9e375f727a"); //联系我们
// sessionStorage.setItem("zdy6", "0ebea318-c287-32e8-df33-725edcc1bd9d"); //政策法规
// sessionStorage.setItem("zdy7", "a305cc2d-3761-775c-799c-86df011f85f4"); //创新创业
// sessionStorage.setItem("zdy8", "d2217ee2-7d0d-c713-5b86-e138fae1ba33"); //精品课程
// sessionStorage.setItem("zdy9", "7c2cbaa3-c02c-13d0-a16e-5944f6bd38c3"); //生涯咨询
// sessionStorage.setItem("zdy10", "7f4bd487-5138-0f61-c58c-ecc97d3616ef"); //职业测评
// sessionStorage.setItem("zdy11", "c57f32aa-676a-e6b8-a2bc-0945afad3069"); //生源信息





// 线上
sessionStorage.setItem("school_id", "0501615a-065c-3353-baca-58c239243654");        //学校id 全局变量
sessionStorage.setItem("newT","2ff61556-ded0-0276-aab6-5faf883aee46")       //通知  /News/newslist.html
sessionStorage.setItem("newN","909ba040-a9f3-7376-08f7-49ef104ff4bc")       //新闻  /News/newslist.html
sessionStorage.setItem("newG","4625200b-7e3e-baac-413d-d46806a04a9c")       //公告  /News/newslist.html

// sessionStorage.setItem("zdy1","1ae29318-4fb2-f92c-88d2-1e8ad2f8963c")       //手续办理   /News/shouxu.html  左侧单独
sessionStorage.setItem("zdy2","76741183-4e52-3c01-c403-d4502974bcd1")       //就业手续
sessionStorage.setItem("zdy3","5256641f-cf5f-1c09-184a-ff75417218ec")       //中心概览   /News/shengyuan.html   //左侧单独
sessionStorage.setItem("zdy4","30aeecb6-d74d-5d8f-29b8-f5006317996e")       //下载专区	/News/xuzhi.html       //左侧单独
sessionStorage.setItem("zdy5","2bacbf15-75f6-804d-69b9-b0e4efb6b9d4")       //联系我们
sessionStorage.setItem("zdy6","38a60e32-9acf-8b07-928b-6b803f46c1ba")       //政策法规
sessionStorage.setItem("zdy7","d081c64b-96c0-ebc8-fa33-212f44981d63")       //创新创业
sessionStorage.setItem("zdy8","5a2722c3-d49b-5604-8c84-e5acd0045705")       //精品课程
sessionStorage.setItem("zdy9","7f0911d9-b9b0-a89c-9954-4f420179bad7")       //生涯咨询
sessionStorage.setItem("zdy10","0288f991-4408-74e7-eeec-393cfaf7186b")       //职业测评
sessionStorage.setItem("zdy11","55b7f40a-ed50-5f45-7fef-dc118c8022c7")       //生源信息
sessionStorage.setItem("zdy12","609eeffa-b348-3557-c738-740402727a8d")       //师资队伍



$.getScript("//t.jiuyeb.cn/public/static/js/scanlogin.js", function() {
  var stu_id = sessionStorage.getItem("userid");
  var school_id = sessionStorage.getItem("school_id");
  $.scanlogin.scanInit({
    el: "#stuModal",
    school_id: school_id,
    stu_id: stu_id
  });
});
