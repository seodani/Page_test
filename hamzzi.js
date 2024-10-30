            let Q = document.getElementById('Question');
            let A = document.getElementById('Answer');
            let Submit = document.getElementById('Submit');

            let QNAId = 0;

            function QuestionAdd(Qn){
                Q.innerHTML = Qn;
                A.value = "";
            }

            function QuestionAll(Qn){
                console.log(QNAId);
                if (QNAId === 1){
                    QuestionAdd("그러면 지금 당장 햄스터를 사러 갑시다!");
                }
                if (QNAId === 2){
                    QuestionAdd("그래요? 왜 키우기 싫어요?<br>\(비싸서, 무서워서, 알러지, 생명이라서, 죽을까봐)");
                }
                if (QNAId === 3){
                    QuestionAdd("그래요? 그렇다면 제가 사면 되겠네요! (y/n)");
                }
                if (QNAId === 4){
                    QuestionAdd("그래요? 햄스터를 올바르게<br>\핸들링 하고 교육시킨다면<br>\물 확률은 0% 입니다.<br>\그러므로 안심하셔도 좋습니다! (y/n)");
                }
                if (QNAId === 5){
                    QuestionAdd("알러지? 항히스타민제를 먹고 키우면 됩니다요. (y/n)");
                }
                if (QNAId === 6){
                    QuestionAdd("생명이라서?? 더 열심히 키우면 되죠? (y/n)");
                }
                if (QNAId === 7){
                    QuestionAdd("어머나, 밀웜 키우지 마세요. (y/n)");
                }
                if (QNAId === 8){
                    QuestionAdd("또 뭐가 불만이시죠?? (자유롭게 적으세요.)");
                }
                if (QNAId === 9){
                    QuestionAdd("그래요? 그렇군요. 제대로 키우겠습니다. (y/n)");
                }
                if (QNAId === 10){
                    QuestionAdd("그래도 어짜피 칭찬도장으로 다 해결되겠습니다~~ 끝!");
                }
            }

            window.onload = function(){
                QuestionAdd("햄스터를 키우시겠습니까? (y/n)");
            }

            function submitF(){
                if (QNAId === 0){
                    if (A.value === "y"){
                        QNAId = 1;
                        QuestionAll();
                    }
                    if (A.value === "n"){
                        QNAId = 2;
                        QuestionAll();
                    }
                }
                if (QNAId === 2){
                    if (A.value === "비싸서"){
                        QNAId = 3;
                        QuestionAll();
                    }
                    if (A.value === "무서워서"){
                        QNAId = 4;
                        QuestionAll();
                    }
                    if (A.value === "알러지"){
                        QNAId = 5;
                        QuestionAll();
                    }
                    if (A.value === "생명이라서"){
                        QNAId = 6;
                        QuestionAll();
                    }
                    if (A.value === "죽을까봐"){
                        QNAId = 7;
                        QuestionAll();
                    }
                }
                if (QNAId === 3){
                    if (A.value === "y"){
                        QNAId = 1;
                        QuestionAll();
                    }
                    if (A.value === "n"){
                        QNAId = 8;
                        QuestionAll();
                    }
                }
                if (QNAId === 4){
                    if (A.value === "y"){
                        QNAId = 1;
                        QuestionAll();
                    }
                    if (A.value === "n"){
                        QNAId = 8;
                        QuestionAll();
                    }
                }
                if (QNAId === 5){
                    if (A.value === "y"){
                        QNAId = 1;
                        QuestionAll();
                    }
                    if (A.value === "n"){
                        QNAId = 8;
                        QuestionAll();
                    }
                }
                if (QNAId === 6){
                    if (A.value === "y"){
                        QNAId = 1;
                        QuestionAll();
                    }
                    if (A.value === "n"){
                        QNAId = 8;
                        QuestionAll();
                    }
                }
                if (QNAId === 7){
                    if (A.value === "y"){
                        QNAId = 1;
                        QuestionAll();
                    }
                    if (A.value === "n"){
                        QNAId = 8;
                        QuestionAll();
                    }
                }
                if (QNAId === 8){
                    QNAId = 9;
                    QuestionAll();
                }
                if (QNAId === 9){
                    if (A.value === "y"){
                        QNAId = 1;
                        QuestionAll();
                    }
                    if (A.value === "n"){
                        QNAId = 10;
                        QuestionAll();
                    }
                }
            }

            Submit.addEventListener('click', submitF);
