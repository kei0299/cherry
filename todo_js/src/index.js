const onClickAdd = () => {
    // テキストボックスの値を取得、nullに
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // 未完成リストに追加
    createIncompTodo(inputText);
};

// 渡された引数を基に未完了のTODOを作成
const createIncompTodo = (todo) => {
 // li生成
 const li = document.createElement("li");

 // div生成
 const div = document.createElement("div");
 div.className = "list-row"

 // p生成
 const p = document.createElement("p");
 p.className = "todo-item"
 p.innerText = todo;

 // 完了button生成
 const compButton = document.createElement("button");
 compButton.innerText = "完了";
 compButton.addEventListener("click",() => {
   // 押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
   const moveTarget = compButton.closest("li");
   compButton.nextElementSibling.remove();
   compButton.remove();
   const backButton = document.createElement("button");
   backButton.innerText = "戻す";
   backButton.addEventListener("click", () =>{
    // TODO取得し、未完了リストに追加
    const todoText = backButton.previousElementSibling.innerText;
    createIncompTodo(todoText);
    // 押した戻すボタンの親にあるliタグを削除
    backButton.closest("li").remove();
   });
   moveTarget.firstElementChild.appendChild(backButton);
   // 完了リストに移動
   document.getElementById("comp-list").appendChild(moveTarget);
 });

 // 削除button生成
 const deleteButton = document.createElement("button");
 deleteButton.innerText = "削除";
 deleteButton.addEventListener("click",() => {
   // 押された削除ボタンの親にあるliタグを未完成リストから削除
   const deleteTarget = deleteButton.closest("li");
   document.getElementById("incomp-list").removeChild(deleteTarget);
 });

 // liタグの子要素に各要素設定
 div.appendChild(p);
 div.appendChild(compButton)
 div.appendChild(deleteButton)
 li.appendChild(div);

 // 未完了リストに追加
 document.getElementById("incomp-list").appendChild(li);

};

document.getElementById("add-button").addEventListener("click",onClickAdd);
