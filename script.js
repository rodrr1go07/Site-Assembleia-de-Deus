const dados = [
  {
    area: "Área 1",
    setores: [
      {
        nome: "Setor 1",
        congregacoes: [
          { nome: "PTE. Bandeira", polo: true },
          { nome: "Cidade Alta" },
          { nome: "Nova Galiléia" },
          { nome: "Novo Viver" },
          { nome: "Passo da Pátria" },
          { nome: "Rosa de Sarom" }
        ]
      },
      {
        nome: "Setor 6",
        congregacoes: [
          { nome: "Lagoa Seca", polo: true },
          { nome: "Barro Vermelho" },
          { nome: "Morro Branco" },
          { nome: "Novo Alvorecer" },
          { nome: "Tirol" }
        ]
      },
      {
        nome: "Setor 7",
        congregacoes: [
          { nome: "Dix-sept Rosado", polo: true },
          { nome: "Fonte de Refrigério" },
          { nome: "Nascidos em Cristo" },
          { nome: "Nova Vida" },
          { nome: "Novo Horizonte" }
        ]
      },
      {
        nome: "Setor 15",
        congregacoes: [
          { nome: "Rocas", polo: true },
          { nome: "Beth Shalom" },
          { nome: "Farol I" },
          { nome: "Farol II" },
          { nome: "Liberdade" },
          { nome: "Mãe Luiza" },
          { nome: "Petrópolis" }
        ]
      },
      {
        nome: "Setor 24",
        congregacoes: [
          { nome: "Ebenézer", polo: true },
          { nome: "Aprisco das Ovelhas" },
          { nome: "Betel" },
          { nome: "Chama Viva" },
          { nome: "Rio Potengi" }
        ]
      },
      {
        nome: "Setor 38",
        congregacoes: [
          { nome: "Bela Vista", polo: true },
          { nome: "Bela Vista II" },
          { nome: "Filadélfia" },
          { nome: "Leão de Judá" },
          { nome: "Mário Lira" },
          { nome: "Mário Lira II" }
        ]
      },
      {
        nome: "Setor 40",
        congregacoes: [
          { nome: "Nova Descoberta", polo: true },
          { nome: "Mirassol" },
          { nome: "Monte Tabor" },
          { nome: "Nova Descoberta II" },
          { nome: "Potilândia" }
        ]
      },
      {
        nome: "Setor 41",
        congregacoes: [
          { nome: "Quintas", polo: true },
          { nome: "Belém Efrata" },
          { nome: "Nova Jerusalém" },
          { nome: "Porta da Salvação" },
          { nome: "Vau de Jaboque" }
        ]
      }
    ]
  },

  {
    area: "Área 6",
    setores: [
      {
        nome: "Setor 20",
        congregacoes: [
          { nome: "Cidade Praia", polo: true },
          { nome: "Alvorecer" },
          { nome: "Cidade Santa" },
          { nome: "Jardim Progresso" },
          { nome: "Jardim Progresso II" },
          { nome: "Novo Amanhecer" },
          { nome: "Jardim Divino" }
        ]
      },
      {
        nome: "Setor 30",
        congregacoes: [
          { nome: "Vale Dourado I", polo: true },
          { nome: "Bom Jardim" },
          { nome: "Canaã" },
          { nome: "Gerezim Norte" },
          { nome: "Maranata" }
        ]
      },
      {
        nome: "Setor 32",
        congregacoes: [
          { nome: "Santa Catarina II", polo: true },
          { nome: "Filhos do Rei" },
          { nome: "Galiléia" },
          { nome: "Porta das Ovelhas" },
          { nome: "Renascer" },
          { nome: "Solidade I" }
        ]
      },
      {
        nome: "Setor 34",
        congregacoes: [
          { nome: "Boa Sorte I", polo: true },
          { nome: "Boa Sorte II" },
          { nome: "Boas Novas ", especial: true },
          { nome: "Novas de Alegria" },
          { nome: "Tanque de Siloé" }
        ]
      },
      {
        nome: "Setor 36",
        congregacoes: [
          { nome: "Boa Esperança", polo: true },
          { nome: "Arcada do Concerto" },
          { nome: "Carvalhais de Manre" },
          { nome: "Grande Natal" },
          { nome: "Nordelândia" },
          { nome: "Sub. Luz da Aurora" }
        ]
      },
      {
        nome: "Setor 37",
        congregacoes: [
          { nome: "Nova Aliança", polo: true },
          { nome: "Aliança com Cristo" },
          { nome: "Centenário" },
          { nome: "Maanaim" },
          { nome: "Monte Carmelo" },
          { nome: "Nova Esperança" }
        ]
      }
    ]
  }
];

const selectArea = document.getElementById("selectArea");
const selectSetor = document.getElementById("selectSetor");
const congregacoesDiv = document.getElementById("congregacoes");

function popularAreas() {
  dados.forEach(item => {
    const option = document.createElement("option");
    option.value = item.area;
    option.textContent = item.area;
    selectArea.appendChild(option);
  });
}

selectArea.addEventListener("change", () => {
  congregacoesDiv.innerHTML = "";
  selectSetor.innerHTML = `<option selected disabled>Escolha o Setor</option>`;
  selectSetor.disabled = false;

  const areaObj = dados.find(a => a.area === selectArea.value);

  areaObj.setores.forEach(setor => {
    const option = document.createElement("option");
    option.value = setor.nome;
    option.textContent = setor.nome;
    selectSetor.appendChild(option);
  });
});

selectSetor.addEventListener("change", () => {
  congregacoesDiv.innerHTML = "";

  const areaObj = dados.find(a => a.area === selectArea.value);
  const setorObj = areaObj.setores.find(s => s.nome === selectSetor.value);

  setorObj.congregacoes.forEach(cong => criarCard(cong));
});

function criarCard(cong) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (cong.polo) card.classList.add("polo");
  if (cong.especial) card.classList.add("especial");

  card.innerHTML = `
    <h3>${cong.nome}</h3>
    <p>
      ${cong.especial
        ? "A melhor congregação 🔥"
        : cong.polo
        ? "Congregação Polo ⭐"
        : "Congregação"}
    </p>
  `;

  congregacoesDiv.appendChild(card);
}

popularAreas();