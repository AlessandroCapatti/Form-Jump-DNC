const form = document.getElementById('form');
const nameError = document.getElementById('usernameError');
const cpfError = document.getElementById('cpfError');
const telError = document.getElementById('telephoneError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const notResgistered = document.getElementById('not-registered');
const registered = document.getElementById('registered');
const campos = document.querySelectorAll('.inputs-required')




      /* ADICIONANDO UMA FUNÇÃO AO BOTÃO */
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

/* FUNÇÃO EM QUE ESTÁ VERIFICANDO O CAMPO NOME COMPLETO, SE ESTIVER VAZIO APARECERA O ERRO "*CAMPO OBRIGATÓRIO*", CASO AO CONTRÁRIO NENHUM ERRO SERÁ APRESENTADO AO USUÁRIO */
function checkInputs() {
  if (campos[0].value === ''){
    registered.style.visibility = 'hidden';
    nameError.style.visibility = 'visible';
    notResgistered.style.visibility = 'visible'; 
    } else {
      nameError.style.visibility = 'hidden';
      notResgistered.style.visibility = 'hidden';
    }

/* ESTA VERIFICANDO O CAMPO EMAIL, SE ESTIVER VAZIO APARECERÁ O ERRO "*CAMPO OBRIGATÓRIO*", CASO AO CONTRÁRIO NENHUM ERRO SERÁ APRESENTADO AO USUÁRIO */
  if (campos[1].value === ''){
    emailError.style.visibility = 'visible';
    notResgistered.style.visibility = 'visible';
    } else {
      emailError.style.visibility = 'hidden';
      notResgistered.style.visibility = 'hidden';
    }

    /* ESTA VERIFICANDO O CAMPO TELEFONE, SE ESTIVER VAZIO APARECERÁ O ERRO "*CAMPO OBRIGATÓRIO*", CASO AO CONTRÁRIO NENHUM ERRO SERÁ APRESENTADO AO USUÁRIO */
  if (campos[2].value === ''){
    telError.style.visibility = 'visible';
    notResgistered.style.visibility = 'visible';
    } else {
      telError.style.visibility = 'hidden';
      notResgistered.style.visibility = 'hidden';
    }
  /* ESTA SENDO VERIFICADO O CAMPO NOME CPF, SE ESTIVER VAZIO APARECERÁ O ERRO "*CAMPO OBRIGATÓRIO*", CASO AO CONTRÁRIO NENHUM ERRO SERÁ APRESENTADO AO USUÁRIO */
  if (campos[3].value === ''){
    cpfError.style.visibility = 'visible';
    notResgistered.style.visibility = 'visible';
    } else {
      cpfError.style.visibility = 'hidden';
      notResgistered.style.visibility = 'hidden';
    }

  /* ESTÁ VERIFICANDO O CAMPO SENHA, SE ESTIVER VAZIO APARECERÁ O ERRO "*CAMPO OBRIGATÓRIO", CASO AO CONTRÁRIO NENHUM ERRO SERÁ APRESENTADO AO USUÁRIO */
  if (campos[4].value === ''){
    passwordError.style.visibility = 'visible';
    notResgistered.style.visibility = 'visible';
    } else {
      passwordError.style.visibility = 'hidden';
      notResgistered.style.visibility = 'hidden';
    }

    /* FUNÇÃO QUE DETERMINA A PALAVRA SUCESSO CASO TODOS OS INPUTS ESTIVEREM PREENCHIDOS */
    for (var i = 0; i < campos.length; i++){
      if (campos[i].value === ''){
        registered.style.visibility = 'hidden';
        notResgistered.style.visibility = 'visible';
        ;break;
      }

      if (i === campos.length - 1){
        registered.style.visibility = 'visible'
      }

    }
    
};



/* QUANDO TODOS CAMPO ESTIVEREM PREECHIDOS NENHUM ERRO SERÁ APRESENTADO,
 E O TEXTO "SUCESSO" APARECERÁ EMBAIXO DO BOTÃO "CADASTRAR". SE CASO UM DOS CAMPOS ESTIVEREM VAZIOS,
 UM TEXTO "*CAMPO OBRIGATÓRIO*" APARECERÁ EMBAIXO DO RESPECTIVO INPUT QUE ESTIVER VAZIO E 
 SE A MAIORIA DOS INPUTS ESTIVER VAZIO APARECERÁ TAMBÉM OUTRO AVISO "Campos obrigatórios não registrados." EM BAIXO
 DO BOTÃO "CADASTRAR". */

