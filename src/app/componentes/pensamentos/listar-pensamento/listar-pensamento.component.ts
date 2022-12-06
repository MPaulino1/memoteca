import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
        conteudo: 'Angular',
        autoria: 'Didier',
        modelo: 'modelo3'
    },
    {
        conteudo: 'Como minha empresa trabalha com serviços, as descrições dos trabalhos (produtos) são frequentemente extensas. Na minha instalação atual do compiere, uso o campo descrição das linhas de ordem de venda (e fatura) para esse objetivo, porém diversas vezes tive dificuldades com o número máximo de caracteres (512). Vendo o BD do adempiere, percebo que o limite desse mesmo campo é ainda menor (256 caracteres). Há algum problema em aumentar esses campos pra algo como 1000 caracteres? E aonde mudar isso? Preciso ir tabela por tabela como SuperUser, aumentar o limite e mandar sincronizar a coluna? Ou há uma maneira mais direta?',
        autoria: 'Neymar',
        modelo: 'modelo1'
    }
  ];

}
