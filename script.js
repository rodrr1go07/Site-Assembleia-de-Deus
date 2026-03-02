// ================= DADOS REAIS =================

const dados = [
  // ================= ÁREA 1 =================
  {
    area: "Área 1",
    setores: [

      {
        nome: "Setor 1",
        congregacoes: [
          { nome: "PTE. Bandeira", polo: true },
          { nome: "Cidade Alta", polo: false },
          { nome: "Nova Galiléia", polo: false },
          { nome: "Novo Viver", polo: false },
          { nome: "Passo da Pátria", polo: false },
          { nome: "Rosa de Sarom", polo: false }
        ]
      },

      {
        nome: "Setor 6",
        congregacoes: [
          { nome: "Lagoa Seca", polo: true },
          { nome: "Barro Vermelho", polo: false },
          { nome: "Morro Branco", polo: false },
          { nome: "Novo Alvorecer", polo: false },
          { nome: "Tirol", polo: false }
        ]
      },

      {
        nome: "Setor 7",
        congregacoes: [
          { nome: "Dix-sept Rosado", polo: true },
          { nome: "Fonte de Refrigério", polo: false },
          { nome: "Nascidos em Cristo", polo: false },
          { nome: "Nova Vida", polo: false },
          { nome: "Novo Horizonte", polo: false }
        ]
      },

      {
        nome: "Setor 15",
        congregacoes: [
          { nome: "Rocas", polo: true },
          { nome: "Beth Shalom", polo: false },
          { nome: "Farol I", polo: false },
          { nome: "Farol II", polo: false },
          { nome: "Liberdade", polo: false },
          { nome: "Mãe Luiza", polo: false },
          { nome: "Petrópolis", polo: false }
        ]
      },

      {
        nome: "Setor 24",
        congregacoes: [
          { nome: "Ebenézer", polo: true },
          { nome: "Aprisco das Ovelhas", polo: false },
          { nome: "Betel", polo: false },
          { nome: "Chama Viva", polo: false },
          { nome: "Rio Potengi", polo: false }
        ]
      },

      {
        nome: "Setor 38",
        congregacoes: [
          { nome: "Bela Vista", polo: true },
          { nome: "Bela Vista II", polo: false },
          { nome: "Filadélfia", polo: false },
          { nome: "Leão de Judá", polo: false },
          { nome: "Mário Lira", polo: false },
          { nome: "Mário Lira II", polo: false }
        ]
      },

      {
        nome: "Setor 40",
        congregacoes: [
          { nome: "Nova Descoberta", polo: true },
          { nome: "Mirassol", polo: false },
          { nome: "Monte Tabor", polo: false },
          { nome: "Nova Descoberta II", polo: false },
          { nome: "Potilândia", polo: false }
        ]
      },

      {
        nome: "Setor 41",
        congregacoes: [
          { nome: "Quintas", polo: true },
          { nome: "Belém Efrata", polo: false },
          { nome: "Nova Jerusalém", polo: false },
          { nome: "Porta da Salvação", polo: false },
          { nome: "Vau de Jaboque", polo: false }
        ]
      }

    ]
  },

  // ================= ÁREA 6 =================
  {
    area: "Área 6",
    setores: [

      {
        nome: "Setor 20",
        congregacoes: [
          { nome: "Cidade Praia", polo: true },
          { nome: "Alvorecer", polo: false },
          { nome: "Cidade Santa", polo: false },
          { nome: "Jardim Progresso", polo: false },
          { nome: "Jardim Progresso II", polo: false },
          { nome: "Novo Amanhecer", polo: false },
          { nome: "Jardim Divino", polo: false }
        ]
      },

      {
        nome: "Setor 30",
        congregacoes: [
          { nome: "Vale Dourado I", polo: true },
          { nome: "Bom Jardim", polo: false },
          { nome: "Canaã", polo: false },
          { nome: "Gerezim Norte", polo: false },
          { nome: "Maranata", polo: false }
        ]
      },

      {
        nome: "Setor 32",
        congregacoes: [
          { nome: "Santa Catarina II", polo: true },
          { nome: "Filhos do Rei", polo: false },
          { nome: "Galiléia", polo: false },
          { nome: "Porta das Ovelhas", polo: false },
          { nome: "Renascer", polo: false },
          { nome: "Solidade I", polo: false }
        ]
      },

      {
        nome: "Setor 34",
        congregacoes: [
          { nome: "Boa Sorte I", polo: true },
          { nome: "Boa Sorte II", polo: false },
          { nome: "Boas Novas I", polo: false },
          { nome: "Novas de Alegria", polo: false },
          { nome: "Tanque de Siloé", polo: false }
        ]
      },

      {
        nome: "Setor 36",
        congregacoes: [
          { nome: "Boa Esperança", polo: true },
          { nome: "Arcada do Concerto", polo: false },
          { nome: "Carvalhais de Manre", polo: false },
          { nome: "Grande Natal", polo: false },
          { nome: "Nordelândia", polo: false },
          { nome: "Sub. Luz da Aurora", polo: false }
        ]
      },

      {
        nome: "Setor 37",
        congregacoes: [
          { nome: "Nova Aliança", polo: true },
          { nome: "Aliança com Cristo", polo: false },
          { nome: "Centenário", polo: false },
          { nome: "Maanaim", polo: false },
          { nome: "Monte Carmelo", polo: false },
          { nome: "Nova Esperança", polo: false }
        ]
      }

    ]
  }

];


// ================= LÓGICA DO SISTEMA =================

const selectArea = document.getElementById("selectArea");
const selectSetor = document.getElementById("selectSetor");
const congregacoesDiv = document.getElementById("congregacoes");

function popularAreas() {
  dados.forEach(item => {
    const o = document.createElement("option");
    o.value = item.area;
    o.textContent = item.area;
    selectArea.appendChild(o);
  });
}

selectArea.addEventListener("change", () => {
  congregacoesDiv.innerHTML = "";
  selectSetor.innerHTML = `<option selected disabled>Escolha o Setor</option>`;
  selectSetor.disabled = false;

  const areaSelecionada = selectArea.value;
  const areaObj = dados.find(a => a.area === areaSelecionada);

  areaObj.setores.forEach(setor => {
    const o = document.createElement("option");
    o.value = setor.nome;
    o.textContent = setor.nome;
    selectSetor.appendChild(o);
  });
});

selectSetor.addEventListener("change", () => {
  congregacoesDiv.innerHTML = "";
  const setorSelecionado = selectSetor.value;
  const areaSelecionada = selectArea.value;

  const areaObj = dados.find(a => a.area === areaSelecionada);
  const setorObj = areaObj.setores.find(s => s.nome === setorSelecionado);

  setorObj.congregacoes.forEach(cong => criarCard(cong));
});

function criarCard(cong) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (cong.polo) {
    card.classList.add("polo");
  }

  card.innerHTML = `
    <h3>${cong.nome}</h3>
    <p>${cong.polo ? "Congregação Polo ⭐" : "Congregação"}</p>
  `;

  congregacoesDiv.appendChild(card);
}

popularAreas();