
// 点击叉叉关闭弹框
function handleCloseMobileMask () {
  document.getElementById('mobileInput').value = ''
  document.getElementById('mobileError').style.visibility = 'hidden'
  document.getElementsByClassName('online-mobile-wrap')[0].style.display = 'none'
}

// 点击在线客服按钮
function handleOnline () {
  document.getElementsByClassName('online-mobile-wrap')[0].style.display = 'block'
}

// 点击登录在线客服遮罩
function handleMobileMask (event) {
  var target = event.target;  
  while (target && target !== document.body) {  
    if (target.classList.contains('online-mobile-content-wrap')) {  
      return;  
    }  
    target = target.parentNode;  
  }  
  handleCloseMobileMask()
}

// 点击立即咨询验证用户手机号
function handleConsult () {
  var mobileInput = document.getElementById('mobileInput');  
  var mobileError = document.getElementById('mobileError');  
  
  var mobileNumber = mobileInput.value.trim();
  var mobilePattern = /^1[3456789]\d{9}$/;  
  if (!mobilePattern.test(mobileNumber)) {  
    mobileError.style.visibility = 'visible';  
  } else {  
    mobileError.style.visibility = 'hidden';  
    // todo---打开客服链接
    handleCloseMobileMask()
  } 
}