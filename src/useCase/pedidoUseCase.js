import Pedido from '../models/pedidoModel.js';
import PedidoRepository from '../repositories/pedidoRepository.js'
import LivroRepository from '../repositories/livroRepository.js'
import ClienteRepository from '../repositories/clienteRepository.js'
import Cliente from '../models/clienteModel.js'
import Pais from '../models/paisModel.js';
import Estado from '../models/estadoModel.js';
import PaisRepository from '../repositories/paisRepository.js'
import EstadoRepository from '../repositories/estadoRepository.js'
import CupomRepository from '../repositories/cupomRepository.js';
import Cupom from '../models/cupomModel.js';
import Response from '../helpers/response.js';


class PedidoUseCase {


	async consistirCupom (cupomDesconto)
	{
        let response = new Response();

		response.success = 'true';
		response.message = 'cupom válido';
		const cupomRepository   = new CupomRepository();

		response = await cupomRepository.find('codigo',cupomDesconto);            

		if (response.success) 
		{

            const { percentual, dataValidade  } = response.data[0];

			const cupom  = new Cupom(cupomDesconto,percentual, dataValidade);;

			response = await cupom.consistirValidade();
			response.data = {percentual};			 


		} else
		{                   
			response.message = 'código de cupom inválido';		   

		} 


		return response;


	}


	async consistirPaisExiste(pais){

	   const paisRepository    =  new PaisRepository(); 
	   return await paisRepository.find('nome',pais);

	}



	async constitirEstadoPais (idPais,estado){


		let response = new Response();

		response.success = 'true';
		response.message = 'país consistido com sucesso';
	
		const estadoRepository  =  new EstadoRepository();	
		response = await estadoRepository.find('pais',idPais);

		 if (response.success && estado == '')
		{   
			response.success = false;
			response.message = 'deve informar o estado para o país';
   		     response.data = [] 				

		}	
		
		return response;
	} 


	async consitirTotalItens (listaItens,total,perDesconto) 
	{

	   let totalItens = 0	
       let response = new Response();
       const livroRepository   =  new LivroRepository();

       response.success = true;
	   response.message = 'validado com sucesso!';

	    for (const item of listaItens) {
		 
		  response = await livroRepository.find('id',item.idLivro)
		  

		  if (!response.success) 
		  {
             response.message = 'idlivro ' + item.idLivro + ' não consta ';
				
			 break
		  } 
		  
		  
        const {preco} =  response.data[0] ;
		totalItens +=   item.quantidade *   preco.toFixed(2);
		  
	  }

      response.data = [{totalItens}];
	 
	 
	  if (response.success)
      {
        if (perDesconto >  0) 		{
           
			 totalItens =  totalItens - (  totalItens  *  ( this.perDesconto / 100)  )

			 totalItens = totalItens.toFixed(2);
                
		}

         if (total != totalItens)
	     {

           response.success = false;
		   response.message = 'Total não confere com o total dos itens',
		   response.data = []

	     }		  
	  }
  

	  return response;
	}



	async salvarPedido(pedidoCompra)
	{

		const {cliente,listaItens, total , desconto} = pedidoCompra;
		
		const pedido            =  new Pedido(cliente,listaItens,total,desconto);
        const pedidoRepository  =  new PedidoRepository();	

		return  await pedidoRepository.save(pedido);

		 
	}


	async salvarCliente (cliente) {


		const clienteRepository =  new ClienteRepository();
		
		const existeCliente = await clienteRepository.consistirExiste('email',cliente.email)

		if (!existeCliente)
		{
		    const _cliente = new Cliente(cliente.nome,cliente.email,cliente.documento,cliente.sobrenome,cliente.endereco,cliente.complemento,
				  cliente.cidade,cliente.pais,cliente.estado,cliente.telefone, cliente.cep );

			clienteRepository.save(_cliente);
		}	

	}

	async salvarPais(nomePais) {

	   const paisRepository    =  new PaisRepository(); 
	   const pais = new Pais(nomePais)   
	   paisRepository.save(pais);

	}


	async salvarEstado(nomeEstado,idPais) {

	   const estadoRepository    =  new PaisRepository();
	   const estado = new Estado(nomeEstado,idPais) 
	   estadoRepository.save(estado);
	}



	async comprar (pedidoCompra)
	{
        
		const { cupomDesconto , cliente} = pedidoCompra
	
		let perDesconto = 0;
		let idPais = '';

		
		let response = new Response()
        response.success = true;
		
		
		

		if (cupomDesconto != '')
		{			

			response = await  this.consistirCupom(cupomDesconto); 
			
			
			if (response.success)
	        {
               const {percentual} = response.data;
		       perDesconto = percentual;

	        }	 


		}		


		if (!response.success) 
        {
            response.data = [];
		   
			return response;	 
		  	
		}	
		
		
		response = await this.consistirPaisExiste(cliente.pais);

		if (response.success)
		{

            const {id} = response.data[0];

			idPais = id;

		} 


		if (idPais != '')
	    {
           response = await  this.constitirEstadoPais(idPais,cliente.estado)		
		}		
		

		if (!response.success) 
        {          
		   response.data = [];
			return response;	
		  	
		}	


		response = await this.consitirTotalItens(pedidoCompra.listaItens,pedidoCompra.total,perDesconto);


		if (!response.success) 
        {
           response.data = [];
		    return response;	 
		  	
		}
		

		const {totalItens } = response.data[0]; ;
		pedidoCompra.toltaItens = totalItens;
		pedidoCompra.desconto   = totalItens -  pedidoCompra.total;

		response  = await  this.salvarPedido(pedidoCompra);


		if (response.success)
		{

            this.salvarCliente(cliente);
			 
			if (idPais != '')
			{
			   this.salvarPais(cliente.pais);
			}	


			if (cliente.estado != '')
			{
				this.salvarEstado(cliente.estado,idPais);
			}	
			

		}	
	
        
        
		return response;


	}

}



export default PedidoUseCase;