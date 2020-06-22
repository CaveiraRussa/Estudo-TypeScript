import { View } from './View';
import { Negociacoes } from '../models/index';


export class NegociacoesView extends View<Negociacoes> {

     
    template(model: Negociacoes): string{

        return `
        <table class="table table-hover table-bordered">
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            </tbody>
                ${model.paraArray().map(Negociacao =>
                    `
                    <tr>
                        <td>${Negociacao.data.getDate()}/${Negociacao.data.getMonth() +1}/${ Negociacao.data.getFullYear()}</td>
                        <td>${Negociacao.quantidade}</td>
                        <td>${Negociacao.valor}</td>
                        <td>${Negociacao.volume}</td>                   
                    <tr>
                    `
                ).join('')}
            <tfoot>
            </tfoot>
        </table>               
        `
    }
    
}