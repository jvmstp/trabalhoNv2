// Implementação do algoritmo Bubble Sort
function bubble_sort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// Implementação do algoritmo Selection Sort
function selection_sort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
}

// Implementação do algoritmo Quick Sort
function quick_sort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;
  const pivot = arr[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  quick_sort(arr, left, j);
  quick_sort(arr, i, right);
}

// Função para misturar um array
function shuffle(arr, times) {
  const len = arr.length;
  for (let i = 0; i < times; i++) {
    const idx1 = Math.floor(Math.random() * len);
    const idx2 = Math.floor(Math.random() * len);
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
}






// Função para adicionar valor à primeira lista
function add() {
    const input = document.getElementById('valor');
    const lista = document.getElementById('valores');
    const node = document.createElement('li');
    const textNode = document.createTextNode(input.value);
    node.appendChild(textNode);
    node.className = 'list-group-item';
    lista.appendChild(node);
  }

  // Função para adicionar valor à segunda lista
  function add2() {
    const input = document.getElementById('valor2');
    const lista = document.getElementById('valores2');
    const node = document.createElement('li');
    const textNode = document.createTextNode(input.value);
    node.appendChild(textNode);
    node.className = 'list-group-item';
    lista.appendChild(node);
  }

  // Função para ordenar a primeira lista de valores
  function ordenar() {
    const lista = document.getElementById('valores');
    const algoritmo = document.getElementById('algoritmo').value;
    const valores = Array.from(lista.children).map(item => parseInt(item.innerHTML));
    
    switch (algoritmo) {
      case 'bubble':
        bubble_sort(valores);
        break;
      case 'selection':
        selection_sort(valores);
        break;
      case 'quick':
        quick_sort(valores, 0, valores.length - 1);
        break;
      default:
        console.error('Algoritmo de ordenação inválido');
    }
    
    lista.innerHTML = valores.map(item => `<li class="list-group-item">${item}</li>`).join('');
  }

  // Função para ordenar a segunda lista de valores
  function ordenar2() {
    const lista = document.getElementById('valores2');
    const algoritmo = document.getElementById('algoritmo2').value;
    const valores = Array.from(lista.children).map(item => parseInt(item.innerHTML));
    
    switch (algoritmo) {
      case 'bubble':
        bubble_sort(valores);
        break;
      case 'selection':
        selection_sort(valores);
        break;
      case 'quick':
        quick_sort(valores, 0, valores.length - 1);
        break;
      default:
        console.error('Algoritmo de ordenação inválido');
    }
    
    lista.innerHTML = valores.map(item => `<li class="list-group-item">${item}</li>`).join('');
  }

  // Função para misturar os valores da primeira lista
  function misturar() {
    const lista = document.getElementById('valores');
    const valores = Array.from(lista.children).map(item => parseInt(item.innerHTML));
    shuffle(valores, valores.length * 2); // Número de trocas arbitrário
    lista.innerHTML = valores.map(item => `<li class="list-group-item">${item}</li>`).join('');
  }

  // Função para misturar os valores da segunda lista
  function misturar2() {
    const lista = document.getElementById('valores2');
    const valores = Array.from(lista.children).map(item => parseInt(item.innerHTML));
    shuffle(valores, valores.length * 2); // Número de trocas arbitrário
    lista.innerHTML = valores.map(item => `<li class="list-group-item">${item}</li>`).join('');
  }
