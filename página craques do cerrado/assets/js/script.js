function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = ".//assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = ".//assets/img/close_white_36dp.svg";
    }
}

//Chamar a funçao quando o usuario digitar algum valor no campo "nome" - ISSO AQUI DEU ERRADO.

function receberNomeAluno (){

    //Receber os dados do campo "nome" quando o usuario preencher o formulário
    var nomeAluno = document.getElementById("nome").value;
    
    //Enviar os dados para o arquivo index.html utilizado o atributo ID
    document.getElementById("valorNome").innerHTML = nomeAluno;}

class Aluno {

    constructor() {
        this.id = 1;
        this.arrayCadastro = [];
    }
        cadastrar() {
            let cadastro = this.lerDados();
            
            if(this.validaCampos(cadastro)) {
                this.adicionar(cadastro);
            }
            
            this.listaTabela();
        }

        listaTabela() {
            let tbody = document.getElementById('tbody');
            tbody.innterText = '';
            
            for(let i = 0; i < this.arrayCadastro.lenght; i++) {
                let tr = tbody.insertRow();

                let td_nome = tr.insertCell();
                let td_cpf = tr.insertCell();
                let td_email = tr.insertCell();
                let td_idade = tr.insertCell();
                let td_remover = tr.insertCell();

                td_nome.innerText = this.arrayCadastro[i].nomeAluno;
                td_cpf.innerText = this.arrayCadastro[i].cpfAluno;
                td_email.innerText = this.arrayCadastro[i].emailAluno;
                td_idade.innerText = this.arrayCadastro[i].idadeAluno;
                
                let imgRemove = document.createElement('img');
                imgRemove.src = 'img/remove.png';

                td_remover.appendChild(imgRemove);
                //Utilizando o appendChild para inserir a tag img dentro da tag acima dela, ou seja, a tag td_remover
            }
        }

        //O método adicionar terá a função de inserir os elementos na nossa arrayCadastro utilizando a função "push" para adicionar o comprimento à nossa array.
        adicionar(cadastro) {
            this.arrayCadastro.push(cadastro);
            this.id++;
        }
        //O método lerDados funcionará para receber os dados inseridos no input do nosso html
        lerDados() {
            let cadastro = {}

            cadastro.id = this.id;
            cadastro.nomeAluno = document.getElementById('nome').value;
            cadastro.cpfAluno = document.getElementById('CPF').value;
            cadastro.emailAluno = document.getElementById('email').value;
            cadastro.idadeAluno = document.getElementById('idade').value;

            return cadastro;
        }

        //A intenção aqui foi inserir a validação dos campos do nosso formulário, de forma a alertar o usuário quanto a campos não preenchidos. Foram utilizadas condicionais "if" com a quebra de linha ao final "\n" para ajustar a mensagem.
        validaCampos(cadastro) {
            let msg = '';
            if(cadastro.nomeAluno == '') {
                msg += '- Informe o nome do aluno \n'
            }

            if(cadastro.cpfAluno == '') {
                msg += '- Informe o CPF do aluno \n'
            }
            if(cadastro.emailAluno == '') {
                msg += '- Informe o E-mail do aluno \n'
            }
            if(cadastro.idadeAluno == '') {
                msg += '- Informe a idade do aluno \n'
            }

            if(msg != '') {
                alert(msg);
                return false
            }

            return true;
        }

        excluir() {

    }
    
}

//Criar um objeto do tipo "Aluno"
var aluno = new Aluno ();
