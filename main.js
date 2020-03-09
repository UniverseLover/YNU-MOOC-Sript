(() => {

    const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

    const start = async function () {
        console.log('中国大学MOOC-YNU全自动刷课器正在启动');

        while (true) {

            var autoNext = document.getElementsByClassName('j-autoNext');
            if (autoNext[0].checked === false & autoNext.length > 0) autoNext[0].click();

            var volumebtn = document.getElementsByClassName("controlbar_btn volumebtn j-volumebtn");
            if (volumebtn.length > 0 && volumebtn[0].classList.length === 3) {
                volumebtn[0].click()
            }
            
            var speedbtn = document.getElementsByClassName("ratebtn_text j-ratebtn_text");
            if (speedbtn.length>0&speedbtn[0].value != "2x") {
                var speedButton = document.getElementsByClassName("m-popover m-popover-rate")[0];
                speedButton.getElementsByClassName('item')[5].click();
            }

            var exam = document.getElementsByClassName("u-tbi");
            if (exam.length > 0) {
                exam[0].click();
                document.getElementsByClassName("u-btn u-btn-default submit j-submit")[0].click();
                document.getElementsByClassName("u-btn u-btn-default cont j-continue")[0].click();
            }

            await sleep(1000)
        }

    }

    start()
    
})();