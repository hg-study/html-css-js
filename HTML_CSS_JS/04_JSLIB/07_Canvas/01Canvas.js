// canvas 요소와 2D 그리기 도구(context)
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 그리기 상태(마우스를 누른 동안 true)와 선택한 색, 굵기
let painting = false;
let color = document.getElementById('color').value;
let size = document.getElementById('size').value;

// 마우스를 누르면 그리기 시작, 떼면 종료, 움직이면 그린다
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

// 색상 선택(change)과 굵기 슬라이더(input)가 바뀌면 값을 갱신
document.getElementById('color').addEventListener('change', (e) => color = e.target.value);
document.getElementById('size').addEventListener('input', (e) => size = e.target.value);

// 그리기 시작 : 누른 지점에도 점을 찍기 위해 draw를 한 번 호출
function startPosition(e) {
    painting = true;
    draw(e);
}

// 그리기 종료 : beginPath()로 경로를 끊어 다음에 그리는 선이 이어지지 않게 한다
function endPosition() {
    painting = false;
    ctx.beginPath();
}

// 마우스 위치까지 선을 그린다. 좌표는 canvas의 위치(offsetLeft, offsetTop)를 빼서 canvas 안의 좌표로 변환
function draw(e) {
    if (!painting) return;

    ctx.lineWidth = size;       // lineWidth : 선 굵기
    ctx.lineCap = 'round';      // lineCap : 선 끝 모양(둥글게)
    ctx.strokeStyle = color;    // strokeStyle : 선 색

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);   // lineTo : 현재 위치까지 선 경로 추가
    ctx.stroke();                                                              // stroke : 경로를 실제로 그린다

    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);   // moveTo : 다음 선의 시작점 이동
}

// clearRect(x, y, 너비, 높이) : 지정한 영역을 지운다. canvas 전체를 지워 초기화
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
