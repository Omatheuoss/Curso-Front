const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && taskInput.value.trim() !== '') {
        addTask(taskInput.value);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-button">Excluir</button>
    `;
    li.querySelector('button').addEventListener('click', () => {
        li.remove();
    });

    li.addEventListener('click', () => {
        li.classList.toggle('done');
    });

    taskList.appendChild(li);
}
Este exemplo cria uma página da web simples que permite que você insira tarefas, marque-as como concluídas clicando nelas e exclua-as clicando no botão "Excluir". Certifique-se de criar arquivos HTML, CSS e JavaScript separados e vinculá-los corretamente para que a página funcione conforme esperado. Você também pode estilizar e expandir essa página de acordo com suas necessidades.





