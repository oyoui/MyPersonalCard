//事件监听三要素

//获取事件源
const toggleButton = document.querySelector('#toggle-button');

//获取要改变样式的元素：整个body
const bodyElement = document.querySelector('body');

//定义事件处理函数
function toggleDarkMode() {
    bodyElement.classList.toggle('dark-mode');
    
    //判断当前是否处于暗黑模式
    if (bodyElement.classList.contains('dark-mode')) {
        //如果包含dark-mode类，说明是暗黑模式
        toggleButton.textContent = "切换到日间模式"; //按钮文字改为切换到明亮模式
    } else {
        //如果不包含dark-mode类，说明是明亮模式
        toggleButton.textContent = "切换到夜间模式"; //按钮文字改为切换到暗黑模式
    }
    
}

//绑定事件监听器
//告诉按钮，当监听到click信号，执行toggleDarkMode这个任务
toggleButton.addEventListener('click', toggleDarkMode);



//获取座右铭按钮
const showMottoButton = document.querySelector('#show-motto-button');
console.log("抓到的按钮：", showMottoButton);

//获取座右铭元素
const mottoElement = document.querySelector('#motto');
console.log("抓到的座右铭元素：", mottoElement);



//n定义显示座右铭的函数
function toggleMotto() {
    //切换座右铭的显示状态
    mottoElement.classList.toggle('show');
    console.log("座右铭已显示！"); // 打印日志

    // ---- 逻辑判断开始 -----
    // 检查：在切换之后，mottoElement 现在是否包含 'show' 这个 class？
    if (mottoElement.classList.contains('show')) {
        //如果包含说明显示
        //那么按钮文字应该是隐藏
        showMottoButton.textContent = "隐藏座右铭"; 
    } else {
        //如果不包含说明隐藏
        //那么按钮文字应该是显示
        showMottoButton.textContent = "显示座右铭"; 
    }
    // ---- 逻辑判断结束 -----
    
}

//绑定事件监听器
//告诉按钮，当监听到click信号，执行toggleMotto这个任务
showMottoButton.addEventListener('click', toggleMotto);


