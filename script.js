const campos = ["nome","telefone","email","cidade","objetivo","experiencia","formacao","habilidades"];

campos.forEach(id => {
  document.getElementById(id).addEventListener("input", atualizarPreview);
});

document.getElementById("modelo").addEventListener("change", atualizarModelo);

function atualizarPreview() {
  document.getElementById("preview-nome").innerText =
    document.getElementById("nome").value || "Seu Nome";

  document.getElementById("preview-contato").innerText =
    document.getElementById("telefone").value + " | " +
    document.getElementById("email").value + " | " +
    document.getElementById("cidade").value;

  document.getElementById("preview-objetivo").innerText =
    document.getElementById("objetivo").value;

  document.getElementById("preview-experiencia").innerText =
    document.getElementById("experiencia").value;

  document.getElementById("preview-formacao").innerText =
    document.getElementById("formacao").value;

  document.getElementById("preview-habilidades").innerText =
    document.getElementById("habilidades").value;
}

function atualizarModelo() {
  const modelo = document.getElementById("modelo").value;
  const preview = document.getElementById("curriculo");

  preview.classList.remove("simples", "premium");

  if(modelo === "premium") {
    preview.classList.add("premium");
  } else {
    preview.classList.add("simples");
  }
}

function gerarPDF() {
  const modelo = document.getElementById("modelo").value;

  if(modelo === "premium") {
    alert("Modelo Premium disponível na versão paga 😎");
    return;
  }

  const element = document.getElementById("curriculo");
  html2pdf().from(element).save("curriculo.pdf");
}