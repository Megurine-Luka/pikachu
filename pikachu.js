!(function () {
    function pikachu(cssPikachu) {
        let codeContainer = document.querySelector('#code')
        let styleContainer = document.querySelector('#style-draw')
        let n = 0
        let id = setInterval(()=>{
            n+=1
            codeContainer.innerHTML = cssPikachu.substring(0,n)
            styleContainer.innerHTML = cssPikachu.substring(0,n)
            codeContainer.scrollTop = codeContainer.scrollHeight
            if(n>cssPikachu.length){
                clearInterval(id)
            }
        },2)
    }
    let cssPikachu = 
    `
    /* ----------------------
    /*开始*/
    /* 背景颜色 */
    .draw-wrapper{
        background-color: #fee433;
    }
    /* 鼻子 */
    .nose{
        width: 0;
        height: 0;
        border-style: solid;
        border-radius: 11px;
        border-color: black transparent transparent; /*上 左右 下*/
        border-width: 12px;
        position: absolute;
        left: 50%;
        margin-left: -12px;
        top: 28px;
    }
    /* 眼睛 */
    .eye{
        width: 49px;
        height: 49px;
        border: 2px solid black;
        background-color: #2e2e2e;
        border-radius: 50%;
        position: absolute;
    }
    .eye::after{
        content: ''; 
        height: 24px;
        width: 24px;
        background-color: #fff;
        position: absolute;
        border: 2px solid black;
        border-radius: 50%;
        left: 6px;
        top: -1px;
    }
    .eye-left{
        position: absolute;
        right: 50%;
        margin-right: 90px;
    }
    .eye-right{
        position: absolute;
        left: 50%;
        margin-left: 90px;
    }
    /* 脸颊 */
    .face{
        height: 68px;
        width: 68px;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
        background-color: #fc0d1c;
    }
    .face-left{
        right: 50%;
        margin-right: 116px;
    }
    .face-right{
        left: 50%;
        margin-left: 116px;
    }
    /* 上嘴唇 */
    .upperLip{
        background-color: #fee433;
        width: 80px;
        height: 25px;
        border: 2px solid black;
        border-top: none;
        position: absolute;
        top: 50px;
        z-index: 1;
    }
    .upperLip-left{
        right: 50%;
        border-right: none;
        border-bottom-left-radius: 40px 25px;
        transform: rotate(-20deg);
    }
    .upperLip-right{
        left: 50%;
        border-left: none;
        border-bottom-right-radius: 40px 25px;
        transform: rotate(20deg);
    }
    /* 嘴巴容器 */
    .mouth-wrapper{
        height: 105px;
        width: 200px;
        position: absolute;
        left: 50%;
        margin-left: -100px;
        overflow: hidden;
        bottom: 0;
    }
    .mouth{
        height: 3500px;
        width: 300px;
        border: 2px solid black;
        background-color: #990513;
        bottom: 0;
        border-radius: 200px/2000px; 
        position: absolute;
        left: 50%;
        margin-left: -150px;
        overflow: hidden;
    }
    .mouth::after{
        content: '';
        width: 100px;
        height: 100px;
        background-color: #fc4a62;
        position: absolute;
        left: 50%;
        margin-left: -50px;
        border-radius: 50%;
        bottom: -20px;
    }
    /*皮卡丘完成*/
    `
    pikachu(cssPikachu)
})()