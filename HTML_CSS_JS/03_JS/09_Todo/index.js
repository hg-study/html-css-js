// =======================================
// TO DO 앱
// 할일 추가, 완료 표시, 수정, 삭제
// =======================================

// --- 요소 선택 ---
const itemsEl = document.querySelector('.items');
const addInputEl = document.querySelector('.add-input');
const addIconEl = document.querySelector('.add');

// --- 할일 추가 ---
// 입력창에서 Enter를 누르거나 + 아이콘을 클릭하면 추가
addInputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodo();
});
addIconEl.addEventListener('click', addTodo);

function addTodo() {
    const text = addInputEl.value.trim();
    if (text === '') {
        alert('할일을 입력하세요.');
        return;
    }
    createItem(text);
    addInputEl.value = '';
}

// --- 항목 노드 생성 ---
// .item 안에 fragment, 할일 input, 완료 버튼, 수정과 삭제 아이콘을 만들어 연결
function createItem(text) {
    const itemEl = document.createElement('div');
    itemEl.className = 'item';

    const fragmentEl = document.createElement('div');
    fragmentEl.className = 'fragment';

    const todoEl = document.createElement('input');
    todoEl.className = 'todo';
    todoEl.value = text;
    todoEl.readOnly = true;                 // readOnly : 수정 버튼을 누르기 전에는 입력 불가

    const doneEl = document.createElement('div');
    doneEl.className = 'done';
    const doneAEl = document.createElement('a');
    doneAEl.href = 'javascript:void(0)';
    doneAEl.textContent = '완료';

    const editEl = document.createElement('div');
    editEl.className = 'edit';
    const editAEl = document.createElement('a');
    const deleteAEl = document.createElement('a');
    editAEl.href = 'javascript:void(0)';
    deleteAEl.href = 'javascript:void(0)';
    editAEl.innerHTML = '<span class="material-symbols-outlined">edit</span>';
    deleteAEl.innerHTML = '<span class="material-symbols-outlined">delete</span>';

    // 완료 : doneStyle class를 토글해 DONE 표시를 켜고 끈다
    doneAEl.addEventListener('click', () => {
        itemEl.classList.toggle('doneStyle');   // classList.toggle : class가 있으면 제거, 없으면 추가
    });

    // 수정 : 수정 아이콘을 누르면 입력 가능 상태로 바꾸고, 다시 누르거나 Enter를 누르면 저장
    editAEl.addEventListener('click', () => toggleEdit(todoEl, editAEl));
    todoEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !todoEl.readOnly) toggleEdit(todoEl, editAEl);
    });

    // 삭제 : 해당 항목 노드 제거
    deleteAEl.addEventListener('click', () => {
        itemEl.remove();
    });

    // --- 노드 연결 ---
    doneEl.appendChild(doneAEl);
    editEl.appendChild(editAEl);
    editEl.appendChild(deleteAEl);
    itemEl.appendChild(fragmentEl);
    itemEl.appendChild(todoEl);
    itemEl.appendChild(doneEl);
    itemEl.appendChild(editEl);
    itemsEl.prepend(itemEl);                // prepend : 최신 항목이 맨 위
}

// --- 수정 모드 전환 ---
function toggleEdit(todoEl, editAEl) {
    const iconEl = editAEl.querySelector('span');
    if (todoEl.readOnly) {
        // 수정 시작
        todoEl.readOnly = false;
        todoEl.focus();
        iconEl.textContent = 'check';
    } else {
        // 저장 : 빈 값이면 되돌리지 않고 그대로 두고 수정 모드 유지
        if (todoEl.value.trim() === '') {
            alert('내용을 입력하세요.');
            return;
        }
        todoEl.readOnly = true;
        iconEl.textContent = 'edit';
    }
}
