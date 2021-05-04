//og설정
$(function() {
    let url = window.location.href;
    let img = $('.result_img img').attr('src');

    $("meta[property='og\\:url']").attr("content", url);
    $("meta[property='og\\:image']").attr("content", img);
});

//url 복사
const copyBtn = document.querySelector('.copy_btn');
function copyUrl() {
    let tmp = document.createElement('input');
    let url = location.href;

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
	  document.execCommand("copy");
    document.body.removeChild(tmp);
    
	  alert("URL이 복사되었습니다"); 
}
copyBtn.addEventListener('click', copyUrl);

//페이스북 공유
const facebookShare = document.querySelector('.fackbook_share');
function sharefacebook(){
    let url = window.location.href;
    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    let link = facebook + url;
    window.open(link);
}
facebookShare.addEventListener('click', sharefacebook);
