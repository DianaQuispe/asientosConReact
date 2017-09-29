
let pasajeros =
[
 { nombre : 'Diana',
 apellido: 'Quispe',
  dni: 1111411,
  asiento: 2,
},
{ nombre : 'Jose',
apellido: 'Quispe',
dni: 1111411,
asiento: 5,
},
{ nombre : 'Maria',
apellido: 'Quispe',
dni: 1111411,
asiento: 7,
},
{ nombre : 'Fernando',
apellido: 'Quispe',
dni: 1111411,
asiento: 9,
},
{ nombre : 'Nicol',
apellido: 'Quispe',
dni: 1111411,
asiento: 24,
},
{ nombre : 'Susana',
apellido: 'Quispe',
dni: 1111411,
asiento: 16,
},
]
function Color(props) {
  
}

function Reserva(props) {
  let lista = pasajeros.map((value) =>{
    let numAsiento = value.asiento;
    console.log( 'asientos:' + numAsiento);
    if(numAsiento == value.asiento)  {
      console.log(numAsiento)
    }
    
    return <div className='listaPasajeros'>
      <p>NOMBRE :{value.nombre}</p>
      <p>APELLIDO: {value.apellido}</p>
      <p>DNI: {value.dni}</p>
      <p>ASIENTO: {value.asiento}</p>

    </div>
  } )
  return( 
    <div>  <section className="row">
    <div >
      <h1>Asientos</h1>
        <table className="col-md-6" id="tabla" border="2" align="center" >
          <tr>
              <td><button>4</button></td>
              <td><button>8</button></td>
              <td><button>12</button></td>
              <td><button>16</button></td>
              <td><button>20</button></td>
              <td><button>24</button></td>
              <td><button>28</button></td>
              <td><button>32</button></td>
          </tr>
          <tr >
              <td><button>3</button></td>
              <td><button>7</button></td>
              <td><button>11</button></td>
              <td><button>15</button></td>
              <td><button>19</button></td>
              <td><button>23</button></td>
              <td><button>27</button></td>
              <td><button>31</button></td>
         </tr>
            <tr></tr>
            <tr></tr>
           <tr>
            <td><button>2</button></td>
            <td><button>6</button></td>
            <td><button>10</button></td>
            <td><button>14</button></td>
            <td><button>18</button></td>
            <td><button>22</button></td>
            <td><button>26</button></td>
            <td><button>30</button></td>
          </tr>
          <tr>
              <td><button>1</button></td>
              <td><button>5</button></td>
              <td><button>9</button></td>
              <td><button>13</button></td>
              <td><button>17</button></td>
              <td><button>21</button></td>
              <td><button>25</button></td>
              <td><button>29</button></td>
          </tr>	
        </table>
      <div className='formI text-center col-md-6 '>
			<b>DNI:</b><input id="buscarInp" type="number"></input>
         <span class="btn" id="buscarBtn">Buscar</span> 
				<div>
					<p><b>ASIENTO:</b> <input id="asiento" type="text"  disabled ></input> </p>
					<p><b>NOMBRE:</b> <input id="nombre" type="text" ></input> </p>
					<p><b>APELLIDO: </b><input id="apellido" type="text" ></input> </p>
					<p><b>DNI: </b><input id="dni" type="number" ></input> </p>
					<span  className="btn" id="reservar" >RESERVAR</span>
					<span className="btn" id="cancelar" >CANCELAR</span>
					<span className="btn" id="listar" >PASAJEROS</span>			
        </div>
      </div>

 
  </div>
</section> 
  <div className='col-md-6 col-md-offset-4'>
  <div>
  {lista}
  </div>
</div>
</div>

)};
ReactDOM.render( 
  <Reserva title="Yo" name="Diana"/>, document.getElementById('root'));