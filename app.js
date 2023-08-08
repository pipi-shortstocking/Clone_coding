const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 막음
    console.log(loginInput.value);
}

// 내부 함수는 직접 실행되는 것이 아님 브라우저가 실행과 동시에 event에 대한 정보도 담아줌
loginForm.addEventListener("submit", onLoginSubmit);