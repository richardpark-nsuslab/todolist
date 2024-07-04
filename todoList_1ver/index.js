// 1. 저장 후 폼 클리어 okey
// 2. 수정/삭제 기능 추가 
// 3. 로컬스토리지 불러오기 okey




document.querySelector('#save').addEventListener('click', function(){

    if(document.querySelector('#todoTitle').value == ''){
        document.querySelector('#todoTitle').classList.add('non-text');
        
        setTimeout(function(){
            document.querySelector('#todoTitle').classList.remove('non-text');
        }, 500);
    } else if(document.querySelector('#todoText').value == ''){
        document.querySelector('#todoText').classList.add('non-text');
        
        setTimeout(function(){
            document.querySelector('#todoText').classList.remove('non-text');
        }, 500);
    } else{
        var todoTitle = document.querySelector('#todoTitle').value;
        var todoText = document.querySelector('#todoText').value;

        var todoNum = localStorage.length;
        todoNum++;

        var list =  // HTML을 짧게 만들기 위해 변수로 넣었습니다.
        `<div class="card" id="${todoNum}">
          <div class="card-body">
            <p class="card-num"><small>${todoNum}</small></p>
            <input value="${todoTitle}" class="card-title">
            <input value="${todoText}" class="card-text">
            <button type="button" class="btn btn-primary edit-btn" id="edit">수정</button>
            <button type="button" class="btn btn-danger delete-btn" id="delete">삭제</button>
          </div>
        </div>`


        document.querySelector('.card_list').insertAdjacentHTML('afterbegin',list) // 최근에 만든걸 상단에 올려줌

        var todoCard = [todoTitle, todoText] // 스토리지에 값들 저장 한걸 변수로
        var localTodoCard = JSON.stringify(todoCard)//  스토리지의 값들이 안깨지도록 제이슨으로 저장

        localStorage.setItem(todoNum, localTodoCard);
        document.querySelector('#todoTitle').value = null;
        document.querySelector('#todoText').value = null;



    }
});

document.addEventListener('DOMContentLoaded', function(){

    let keys = [];



    for(let i = 0; i < localStorage.length; i++){
        keys.push(localStorage.key(i)); // i번째 배열 추가
    }

    keys.sort((a, b) => parseInt(a) - parseInt(b));
    
    keys.forEach(key => { // Arr을 배열을 정렬 하기 위해 forEach 사용
        const value = JSON.parse(localStorage.getItem(key));

        
        var list =  // HTML을 짧게 만들기 위해 변수로 넣었습니다.
        `<div class="card" id="${key}">
        <div class="card-body">
        <p class="card-num"><small>${key}</small></p>
        <input value="${value[0]}" class="card-title">
        <input value="${value[1]}" class="card-text">
        <button type="button" class="btn btn-primary edit-btn" id="edit">수정</button>
        <button type="button" class="btn btn-danger delete-btn" id="delete">삭제</button>
        </div>
        </div>`
        
        document.querySelector('.card_list').insertAdjacentHTML('afterbegin',list);
        // console.log(`${key}: ${value}`);
        
    });
    






});


document.addEventListener('click', function(event) {
    // 클릭된 요소의 부모의 부모 요소가 존재할 경우, 그 id를 가져옴
    var parentElement = event.target.parentElement;
    var grandParentElement = parentElement ? parentElement.parentElement : null;
    var grandParentElementId = grandParentElement ? grandParentElement.id : null;

    if (grandParentElementId) {
        if(event.target.id == 'delete'){

            console.log(localStorage.getItem(grandParentElementId));
            
            var clearCard = confirm('삭제 하시나요?')
    
            if(clearCard == true){
                localStorage.removeItem(grandParentElementId);
                grandParentElement.remove();
            }
        } else if (event.target.id == 'edit'){
            var clearCard = confirm('수정 하시나요?')

            if(clearCard == true){


                var cardNum = document.querySelector('.card-num small').textContent; 
                var cardTitle = document.querySelector('.card-title').value; 
                var cardText = document.querySelector('.card-text').value; // 카드 인풋에 있는걸 변수로

                var editCard = [cardTitle, cardText] // 스토리지에 값들 저장 한걸 변수로
                var localEditCard = JSON.stringify(editCard)//  스토리지의 값들이 안깨지도록 제이슨으로 저장

                localStorage.setItem(cardNum, localEditCard);

                


                console.log(cardNum, cardTitle, cardText)



            }
        }
        

    }


});


document.querySelector('#clear').addEventListener('click', function(){
        var clearCard = confirm('삭제 하시나요?')


        if(clearCard == true){
            localStorage.clear();
            document.querySelector('.card_list').innerHTML='';
        } else {

        }
});