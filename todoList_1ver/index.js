var list =  // HTML을 짧게 만들기 위해 변수로 넣었습니다.
`<div class="card">
  <div class="card-body">
    <p class="card-num"><small></small></p>
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    <button type="button" class="btn btn-danger delete-btn">삭제</button>
  </div>
</div>`



$(document).ready(function(){
    var todoNum = localStorage.length;

    // 시작하자마자 로컬스토리지에 개수 체크 후 버튼 출력 유무 조정    
    if(localStorage.length > 0){
        $('#clear').show();
    } else {
        $('#clear').hide();
    }

    //시작하자마자 로컬스토리지에 있는 내용들을 불러오기
    //key값의 순서대로 정렬 시키기

    var localTodoCard = JSON.parse(todoNum)
    localStorage.getItem(todoNum, localTodoCard);
    console.log(localStorage.getItem(todoNum, localTodoCard));


});

$('#save').click(function(){
    var todoNum = localStorage.length;
    var todoTitle = $('#todoTitle').val();
    var todoText = $('#todoText').val();

    //저장버튼 누를때마다 공백체크
    if(todoTitle == ''){
        $('#todoTitle').addClass('non-text');

        setTimeout(function(){
            $('#todoTitle').removeClass('non-text');
        }, 500)
        
    } else if(todoText == '') {
        $('#todoText').addClass('non-text');

        setTimeout(function(){
            $('#todoText').removeClass('non-text');
        }, 500)
    } else {
        $('.card_list').prepend(list);
        
        todoNum++
        // 입력한 내용들 html에 출력 -> 스토리지에서 값을 저장 한 뒤 그걸 출력하는걸로 바꿔야함.
        $('.card-num').html(todoNum);
        $('.card-title').html(todoTitle);
        $('.card-text').html(todoText);
        
        var todoCard = [todoTitle, todoText] // 스토리지에 값들 저장 한걸 변수로
        var localTodoCard = JSON.stringify(todoCard)//  스토리지의 값들이 안깨지도록 제이슨으로 저장

        localStorage.setItem(todoNum, localTodoCard);
        
    }

    //저장버튼 누를때마다 로컬스토리지 체크
    if(localStorage.length > 0){
        $('#clear').show();
    } else {
        $('#clear').hide();
    }

});

$('#clear').click(function(){

    var clearCard = confirm('gdgd')

    if(clearCard == true){
        localStorage.clear();
        $('.card_list').empty();
    } else {

    }


})

