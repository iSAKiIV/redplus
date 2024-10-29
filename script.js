const loginBtn = document.getElementById("login-btn");

const modal = document.getElementById("login-modal");

const closeModal = document.querySelector(".close");

loginBtn.onclick = function () {
  modal.style.display = "block";
};
closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;

    const password = document.getElementById("login-password").value;

    if (email === "aluno@escola.com" && password === "123456") {
      alert("Login bem-sucedido!");

      modal.style.display = "none";

      document.getElementById("envio").style.display = "block";
    } else {
      alert("E-mail ou senha incorretos!");
    }
  });
const client = new Appwrite.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")

  .setProject("671e7a16002b7bd3bd51");

const account = new Appwrite.Account(client);

const database = new Appwrite.Database(client);

function enviarRedacao(titulo, conteudo) {
  const promise = database.createDocument(
    "collectionID", // Substitua com o ID da sua coleção

    "unique()", // Cria um ID único para cada redação

    {
      titulo: titulo,

      conteudo: conteudo
    }
  );
  promise
    .then((response) => {
      console.log("Redação enviada com sucesso:", response);
    })
    .catch((error) => {
      console.error("Erro ao enviar redação:", error);
    });
}

function login(email, password) {

  account.createSession(email, password)

    .then(response => {

      console.log('Login realizado com sucesso:', response);

      // Aqui, você pode carregar ou enviar dados ao banco de dados após o login

    })
  .catch(error => {

      console.error('Erro ao fazer login:', error);

    });

}