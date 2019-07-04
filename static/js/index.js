$(function(){
  $(".activity-btn").click(function(){
    if($(this).innerWidth() > 100 ){
      $(this).innerWidth(60)
      $(".layui-side").width(60)
      $(".layui-nav-tree").width(60)
      setTimeout(() => {
        $(".layui-side-scroll .layui-nav .shrink").show().css({
          'display':'block',
        })     
      },300);
      $(".layui-side-scroll .layui-nav .develop").hide()
    }
    else{
      $(this).innerWidth(200)
      $(".layui-side").width(200)
      $(".layui-nav-tree").width(200)
      $(".layui-side-scroll .layui-nav .shrink").hide()
      setTimeout(() => {
        $(".layui-side-scroll .layui-nav .develop").show()  
      },200);
    }
  })
  //*********使用情况页面下拉功能********************************************* */
  $('.shrink,.develop').click(function(){
    let src = $(this).data('src')
    $(this).parent().addClass('layui-this')
    $('#iframe').attr('src',src)
  })
  $('.shrink').get(0).click()
})