// 첫번째 관문
// 1. 세이브 누를때 공백체크
// 2. 공백시 non-text 클래스 추가
// 3. 추가 후 5초 뒤 클래스 삭제
//======================================

//두번째 관문
//1. 인풋 내용을 스토리지에 넣기

//세번째 관문
//1. 클리어 버튼 클릭시
//2. .card_list의 html 클리어
//3. 스토리지 클리어

//네번째 관문
//1. 로딩시 스토리지에 데이터 불러오기
//2. 카드리스트에 내용 넣기


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
        `<div class="card">
          <div class="card-body">
            <p class="card-num"><small>${todoNum}</small></p>
            <h5 class="card-title">${document.querySelector('#todoTitle').value}</h5>
            <p class="card-text">${document.querySelector('#todoText').value}</p>
            <button type="button" class="btn btn-danger delete-btn">삭제</button>
          </div>
        </div>`


        document.querySelector('.card_list').insertAdjacentHTML('afterbegin',list) // 최근에 만든걸 상단에 올려줌

        var todoCard = [todoTitle, todoText] // 스토리지에 값들 저장 한걸 변수로
        var localTodoCard = JSON.stringify(todoCard)//  스토리지의 값들이 안깨지도록 제이슨으로 저장

        localStorage.setItem(todoNum, localTodoCard);

    }
})

document.querySelector('#clear').addEventListener('click', function(){
        var clearCard = confirm('삭제 하시나요?')


        if(clearCard == true){
            localStorage.clear();
            document.querySelector('.card_list').innerHTML='';
        } else {

        }
})